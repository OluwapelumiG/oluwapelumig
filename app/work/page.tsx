import type { Metadata } from "next";
import Link from "next/link";
import { archiveProjects, featuredProjects } from "../data/projects";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage(): JSX.Element {
  return (
    <>
      <h1>
        Project
        <span>index</span>
      </h1>
      <p className="dek">
        Featured systems, then the archive. Each entry is a case.
      </p>

      <h2>Featured</h2>
      {featuredProjects.map((project, i) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="log"
        >
          <span className="exp">OA-{String(i + 1).padStart(2, "0")}</span>
          <span>
            <strong>{project.title}</strong>
            <p>{project.oneLiner}</p>
            <div className="reagents">
              Stack: {project.stack.join(" · ")} · {project.role}
            </div>
          </span>
          <span
            className="swatch"
            style={{ background: project.tint }}
            aria-hidden
          />
        </Link>
      ))}

      <h2>Archive</h2>
      {archiveProjects.map((project, i) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="log"
        >
          <span className="exp">AR-{String(i + 1).padStart(2, "0")}</span>
          <span>
            <strong>{project.title}</strong>
            <p>{project.oneLiner}</p>
            <div className="reagents">
              Stack: {project.stack.join(" · ")}
            </div>
          </span>
        </Link>
      ))}
    </>
  );
}
