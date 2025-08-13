import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-gray-400 hover:bg-gold-600 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
