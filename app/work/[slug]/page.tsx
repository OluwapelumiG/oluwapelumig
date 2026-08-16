import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Work" };
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default function CasePage({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const project = getProject(params.slug);
  if (!project) notFound();

  const i = projects.findIndex((p) => p.slug === project.slug);
  const prev = i > 0 ? projects[i - 1] : null;
  const next = i < projects.length - 1 ? projects[i + 1] : null;

  return (
    <>
      <p className="crumb">
        <Link href="/work">Project index</Link>
        <span> / </span>
        {project.title}
      </p>
      <h1>{project.title}</h1>
      <p className="role">{project.role}</p>
      <p className="dek">{project.oneLiner}</p>
      <div className="reagents" style={{ marginTop: "1rem" }}>
        Stack: {project.stack.join(" · ")}
      </div>

      <div className="methods" style={{ marginTop: "2rem" }}>
        <p>{project.body[0]}</p>
        <p style={{ marginTop: "1.25rem" }}>{project.body[1]}</p>
      </div>

      <p className="mail" style={{ marginTop: "2rem" }}>
        <a href={project.url} rel="noreferrer" target="_blank">
          Open project
        </a>
      </p>

      <nav className="case-turn">
        {prev ? (
          <Link href={`/work/${prev.slug}`}>← {prev.title}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`}>{next.title} →</Link>
        ) : (
          <span />
        )}
      </nav>
    </>
  );
}
