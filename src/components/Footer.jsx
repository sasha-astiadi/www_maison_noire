import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-creme-900">
      <Container>
        <div className="flex items-center justify-between py-16">
          <Logo className="h-10 w-auto" />
          <p className="text-sm text-slate-500">
            Copyright &copy; {new Date().getFullYear()} VEDA. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
