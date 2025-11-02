import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-pink-300 transition-colors"
          >
            August&apos;s Cubbyhole
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
