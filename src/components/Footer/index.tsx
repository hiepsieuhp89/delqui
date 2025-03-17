import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-sub-blue font-japanese text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between space-y-8 md:flex-row md:items-center md:space-y-0">
          {/* Logo */}
          <div>
            <Link href="/" className="text-4xl font-bold tracking-tight text-white">
              DelQui
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:justify-end">
            <Link href="/about" className="hover:text-key-blue transition-colors">
              DelQuiについて
            </Link>
            <Link href="/business" className="hover:text-key-blue transition-colors">
              新規事業開発
            </Link>
            <Link href="/development" className="hover:text-key-blue transition-colors">
              開発体制
            </Link>
            <Link href="/company" className="hover:text-key-blue transition-colors">
              企業情報
            </Link>
            <Link href="/contact" className="hover:text-key-blue transition-colors">
              お問い合わせ
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-12">
          <p className="text-sm">© 2025 DelQui</p>
        </div>
      </div>
    </footer>
  )
}

