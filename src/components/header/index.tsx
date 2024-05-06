import React from 'react'
import { LanguageSelector } from '../language-selector'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

export function Header() {
  return (
    <div className="fixed left-0 top-0 flex w-full items-center justify-between border bg-slate-50 bg-opacity-70 px-4 py-4 md:px-12">
      <a href="/" className="text-xs md:text-base">
        What is the book told me...
      </a>
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <Button size={'icon'} asChild className="rounded-full">
          <a href="https://github.com/Quilljou/vite-react-ts-tailwind-starter" target="_blank" rel="noreferrer">
            <Github />
          </a>
        </Button>
      </div>
    </div>
  )
}
