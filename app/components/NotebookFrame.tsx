"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { jobTitle } from "../data/identity";
import {
  bookPages,
  isActivePath,
  isCoverPath,
  pageIndex,
} from "../book";
import BookFlip from "./PageFlip";

type Sheet = { kind: "cover" | "paper"; direction: 1 | -1; id: number };

export default function NotebookFrame({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const idx = pageIndex(pathname);
  const current = bookPages[idx];
  const prev = bookPages[idx - 1];
  const next = bookPages[idx + 1];
  const cover = isCoverPath(pathname);
  const prevPath = useRef(pathname);
  const [sheet, setSheet] = useState<Sheet | null>(null);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    const direction: 1 | -1 =
      pageIndex(pathname) >= pageIndex(prevPath.current) ? 1 : -1;
    const kind: Sheet["kind"] =
      isCoverPath(prevPath.current) || isCoverPath(pathname)
        ? "cover"
        : "paper";
    prevPath.current = pathname;
    if (reduce) return;
    setSheet({ kind, direction, id: Date.now() });
  }, [pathname, reduce]);

  return (
    <main
      className="new-v5"
      data-cover={cover ? "true" : "false"}
      data-turning={sheet ? "true" : "false"}
      data-dir={sheet?.direction ?? 1}
    >
      <div className="desk-stage">
        <div className="desk-shadow" aria-hidden />
        <article className="notebook">
          <div className="spine" aria-hidden />
          <div className="holes" aria-hidden>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="rule" aria-hidden />

          <div className="page">
            <header className="header-row">
              <Link href="/" className="header-meta">
                <div>Role · {jobTitle}</div>
                <div>Node · Lagos, Nigeria</div>
              </Link>
              <nav className="toc" aria-label="Notebook">
                {bookPages.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-active={
                      isActivePath(pathname, item.href) ? "true" : "false"
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <span className="sticky">Available</span>
            </header>

            <BookFlip>{children}</BookFlip>

            <nav className="pager" aria-label="Turn page">
              {prev ? (
                <Link href={prev.href} className="pager-prev">
                  ← {prev.label}
                </Link>
              ) : (
                <span className="pager-prev is-disabled" />
              )}
              <span className="pager-num">
                {cover ? "Cover" : `p. ${current.page}`}
              </span>
              {next ? (
                <Link href={next.href} className="pager-next">
                  {cover ? "Index →" : `${next.label} →`}
                </Link>
              ) : (
                <span className="pager-next is-disabled">End →</span>
              )}
            </nav>
          </div>

          {sheet && !reduce ? (
            <motion.div
              key={sheet.id}
              className={`flip-sheet flip-sheet--${sheet.kind}`}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: sheet.direction > 0 ? 165 : -165 }}
              transition={{ duration: 0.68, ease: [0.33, 1, 0.32, 1] }}
              style={{ transformOrigin: "left center" }}
              onAnimationComplete={() => setSheet(null)}
              aria-hidden
            >
              <span className="flip-shade" />
            </motion.div>
          ) : null}
        </article>
      </div>
    </main>
  );
}
