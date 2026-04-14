"use client";

import { useEffect, useState } from "react";
import LikeButton from "@/components/LikeButton";

type ArticleLikesProps = {
  slug: string;
  placement: "top" | "bottom";
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

      const data = await res.json();
      setCount(data.likes ?? count + 1);
      setClicked(true);
      localStorage.setItem(`liked:${slug}`, "true");
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