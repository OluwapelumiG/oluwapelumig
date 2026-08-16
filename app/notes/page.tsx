import type { Metadata } from "next";
import { notes } from "../data/notes";

export const metadata: Metadata = {
  title: "Notes",
};

export default function NotesPage(): JSX.Element {
  return (
    <>
      <h1>
        Engineering
        <span>notes</span>
      </h1>
      <p className="dek">Dated write-ups. More incoming.</p>

      {notes.map((note, i) => (
        <article key={note.title} className="log">
          <span className="exp">N-{String(i + 1).padStart(2, "0")}</span>
          <span>
            <strong>{note.title}</strong>
            <p>
              {note.date} · {note.readingTime}. {note.excerpt}
            </p>
          </span>
        </article>
      ))}

      <p className="footer-meta">More posts coming soon.</p>
    </>
  );
}
