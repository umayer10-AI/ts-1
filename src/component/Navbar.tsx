'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Product', path: '/product' },
  { name: 'Profile', path: '/profile' },
]

const Navbar = () => {

    const pathname = usePathname()

    return (
        <div>
            <nav className="bg-black text-white px-6 py-4">
      <ul className="flex items-center justify-center gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path

          return (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`transition-all duration-300 px-4 py-2 rounded-md ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'hover:bg-white/20'
                }`}
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
        </div>
    );
};

export default Navbar;