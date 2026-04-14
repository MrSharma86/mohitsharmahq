import type { MDXComponents } from "mdx/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { ComponentPropsWithoutRef } from "react";
import HeroImage from "@/components/HeroImage";
import Image from "next/image";

type CodeProps = ComponentPropsWithoutRef<"code"> & {
  className?: string;
  children?: React.ReactNode;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="mt-10 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-12 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg"
        {...props}
      />
    ),
    a: (props) => (
      <a
        className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
        {...props}
      />
    ),
    strong: (props) => (
      <strong className="font-semibold text-white" {...props} />
    ),
    ul: (props) => (
      <ul
        className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-zinc-300 sm:text-lg"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mt-6 list-decimal space-y-3 pl-6 text-base leading-8 text-zinc-300 sm:text-lg"
        {...props}
      />
    ),
    li: (props) => <li className="pl-1" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mt-8 border-l border-white/15 pl-5 italic text-zinc-400"
        {...props}
      />
    ),
    hr: (props) => <hr className="my-10 border-white/10" {...props} />,

    code: ({ className, children, ...props }: CodeProps) => {
      const match = /language-(\w+)/.exec(className || "");
      const language = match?.[1] || "python";
      const isBlock =
        typeof children === "string" && children.includes("\n");

      if (isBlock) {
        return (
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            PreTag="div"
            customStyle={{
              marginTop: "2rem",
              marginBottom: "2rem",
              borderRadius: "1rem",
              padding: "1.25rem",
              overflowX: "auto",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            codeTagProps={{
              style: {
                fontSize: "0.9rem",
                lineHeight: "1.6",
              },
            }}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        );
      }

      return (
        <code
          className="rounded bg-white/10 px-1.5 py-0.5 text-[0.95em] text-zinc-200"
          {...props}
        >
          {children}
        </code>
      );
    },

    pre: ({ children }) => <>{children}</>,

    img: (props) => (
      <span className="my-8 block overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={props.src || ""}
          alt={props.alt || ""}
          width={1600}
          height={900}
          className="h-auto w-full object-cover"
        />
      </span>
    ),

    HeroImage,

    ...components,
  };
}