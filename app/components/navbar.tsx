'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string): boolean => pathname === path;

  const navItems = [
    { href: '/', text: 'cd ~', title: '~', icon: '>' },
    { href: '/about', text: 'whoami', title: 'whoami', icon: '$' },
    { href: '/blog', text: 'cat blog.md', title: 'blog.md', icon: '#' },
    { href: '/work', text: 'ls projects/', title: 'projects/', icon: '%' }, 
    { href: '/contact', text: 'ssh contact', title: 'contact', icon: '@' },
  ];

  const getCurrentPageText = () => {
    const currentItem = navItems.find(item => item.href === pathname);
    return currentItem ? (currentItem.title === '~' ? '~' : '--' + currentItem.title) : '~';
  };

  return (
    <nav className="bg-black/90 border-b px-20 border-green-500/30">
      <div className=" mx-auto px-4 md:px-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 px-4 md:px-0">
            <div className="font-mono text-green-400 text-xl typing-effect">
              ./gaps {getCurrentPageText()}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ href, text, icon }) => (
                <Link key={href} href={href} passHref legacyBehavior>
                  <a 
                    className={`font-mono px-3 py-2 rounded-md text-sm transition-colors duration-300 
                      ${isActive(href) ? 'bg-green-500/20 text-green-400' : 'text-green-300 hover:bg-green-500/10 hover:text-green-400'}`}
                  >
                    <span className="text-yellow-400">{icon}</span> {text}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-green-300 hover:bg-green-500/10 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <span className="font-mono">kill -9</span>
              ) : (
                <span className="font-mono">./menu</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ href, text, icon }) => (
              <Link key={href} href={href} passHref legacyBehavior>
                <a 
                  className={`font-mono block px-3 py-2 rounded-md text-base transition-colors duration-300
                    ${isActive(href) ? 'bg-green-500/20 text-green-400' : 'text-green-300 hover:bg-green-500/10 hover:text-green-400'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-yellow-400">{icon}</span> {text}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
