import Link from "next/link";
import { useRouter } from "next/router";
import { HEADER_LINKS } from "./Header.data";
import { IHeaderLinks } from "./Header.model";

const Navigation = () => {
  const router = useRouter();
  const currentRoute = router.route;
  return (
    <header className="fixed top-0 w-full backdrop-blur-lg text-dark z-10 dark:text-white bg-gradient-to-b from-black/5 via-black/5 via-80% to-white dark:bg-gradient-to-b dark:from-white/5 dark:via-white/5 dark:via-80% dark:to-black">
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
