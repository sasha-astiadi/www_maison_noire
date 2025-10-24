'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-50/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-lg bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="/">MENUS</MobileNavLink>
        <MobileNavLink href="/story">STORY</MobileNavLink>
        <MobileNavLink href="/experiences">EVENTS</MobileNavLink>
        <MobileNavLink href="/dahabiyas">CONTACT</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm py-3">
      <Container>
        <nav className="relative z-50 flex items-center justify-between md:justify-center">
          <div className="md:hidden" /> {/* Spacer for mobile */} 
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/">MENUS</NavLink>
              <NavLink href="/story">STORY</NavLink>
              <NavLink href="/experiences">EVENTS</NavLink>
              <NavLink href="/dahabiyas">CONTACT</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </nav>
      </Container>
    </header>
  )
}
