import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function parseFeaturedProjects(source) {
  const chunks = source.split(/^\s*\{/m);
  const featured = [];

  for (const chunk of chunks) {
    const title = chunk.match(/title:\s*"([^"]+)"/)?.[1];
    const url = chunk.match(/url:\s*"([^"]+)"/)?.[1];
    const oneLiner = chunk.match(/oneLiner:\s*"([^"]+)"/)?.[1];
    const isFeatured = /featured:\s*true/.test(chunk);

    if (title && url && oneLiner && isFeatured) {
      featured.push({ title, url, oneLiner });
    }
  }

  return featured;
}

function renderSelectedWork(projects) {
  if (projects.length === 0) {
    return "_No featured projects yet._";
  }

  return projects
    .map((project) => `- [${project.title}](${project.url}) — ${project.oneLiner}`)
    .join("\n");
}

const projectsSource = fs.readFileSync(
  path.join(root, "app/data/projects.ts"),
  "utf8"
);
const template = fs.readFileSync(
  path.join(root, "scripts/README.template.md"),
  "utf8"
);

const selectedWork = renderSelectedWork(parseFeaturedProjects(projectsSource));
const readme = template.replace("{{SELECTED_WORK}}", selectedWork);

fs.writeFileSync(path.join(root, "README.md"), `${readme.trimEnd()}\n`);
console.log("Wrote README.md");
