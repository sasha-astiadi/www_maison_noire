import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-gray-200/80 tracking-widest hover:text-slate-300"
    >
      {children}
    </Link>
  )
}
