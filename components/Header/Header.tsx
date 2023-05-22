import Link from "next/link";
import { useRouter } from "next/router";
import { HEADER_LINKS } from "./Header.data";
import { IHeaderLinks } from "./Header.model";

const Navigation = () => {
  const router = useRouter();
  const currentRoute = router.route;
  return (
    <header className="fixed top-0 w-full backdrop-blur-md text-dark border-b-[1px] border-slate-50/50 z-10 dark:text-white bg-white/30 dark:bg-black/20 dark:border-slate-800/50">
      <nav className="h-12">
        <ul className="flex items-center justify-end h-full max-w-7xl mx-auto px-4 gap-4">
          {HEADER_LINKS.map((link: IHeaderLinks) => {
            return (
              <li key={link.title}>
                <Link
                  href={link.href}
                  passHref
                  className={currentRoute === link.href ? "underline" : ""}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
