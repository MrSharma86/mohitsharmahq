"use client";

import { useEffect, useState } from "react";
import LikeButton from "@/components/LikeButton";

type ArticleLikesProps = {
  slug: string;
  placement: "top" | "bottom";
};

type LikeSyncDetail = {
  slug: string;
  count: number;
  clicked: boolean;
};

export default function ArticleLikes({
  slug,
  placement,
}: ArticleLikesProps) {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const loadLikes = async () => {
      try {
        const res = await fetch(`/api/like?slug=${encodeURIComponent(slug)}`);
        const data = await res.json();
        setCount(data.likes ?? 0);
      } catch {
        setCount(0);
      }
    };

    loadLikes();

    const alreadyClicked = localStorage.getItem(`liked:${slug}`) === "true";
    setClicked(alreadyClicked);

    const handleSync = (event: Event) => {
      const customEvent = event as CustomEvent<LikeSyncDetail>;
      if (customEvent.detail.slug !== slug) return;

      setCount(customEvent.detail.count);
      setClicked(customEvent.detail.clicked);
    };

    window.addEventListener("article-like-sync", handleSync as EventListener);

    return () => {
      window.removeEventListener(
        "article-like-sync",
        handleSync as EventListener
      );
    };
  }, [slug]);

  const handleClick = async () => {
    if (clicked) return;

    try {
      const res = await fetch("/api/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      });

      if (!res.ok) {
        throw new Error("Failed to like article");
      }

      const data = await res.json();
      const nextCount = data.likes ?? count + 1;

      setCount(nextCount);
      setClicked(true);
      localStorage.setItem(`liked:${slug}`, "true");

      window.dispatchEvent(
        new CustomEvent<LikeSyncDetail>("article-like-sync", {
          detail: {
            slug,
            count: nextCount,
            clicked: true,
          },
        })
      );
    } catch (e) {
      console.error("Like failed", e);
    }
  };

  if (placement === "top") {
    return (
      <LikeButton
        count={count}
        clicked={clicked}
        onClick={handleClick}
        compact
      />
    );
  }

  return (
    <div className="mt-12 border-t border-white/10 pt-8 text-center">
      <p className="mb-4 text-center text-sm text-zinc-400">
        If this made you think, feel free to leave a ❤️
      </p>

      <LikeButton count={count} clicked={clicked} onClick={handleClick} />
    </div>
  );
}