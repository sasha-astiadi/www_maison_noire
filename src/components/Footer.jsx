import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-transparent text-center">
      <Container>
        <div className="flex items-center justify-center py-8">
          <p className="text-sm text-slate-900">
            Copyright &copy; {new Date().getFullYear()} Maison Noire. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
