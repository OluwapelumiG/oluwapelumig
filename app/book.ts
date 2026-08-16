export const bookPages = [
  { href: "/", label: "Cover", page: "Cover" },
  { href: "/work", label: "Work", page: "02" },
  { href: "/notes", label: "Notes", page: "03" },
  { href: "/about", label: "About", page: "04" },
  { href: "/contact", label: "Contact", page: "05" },
] as const;

export function pageIndex(pathname: string): number {
  if (pathname.startsWith("/work/")) return 1;
  const i = bookPages.findIndex((p) => p.href === pathname);
  return i < 0 ? 0 : i;
}

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isCoverPath(pathname: string): boolean {
  return pathname === "/";
}
