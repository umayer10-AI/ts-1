'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, LayoutDashboard, Home, DollarSign } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    path: '/profile',
    icon: <Home size={20} />,
  },
  {
    name: 'Price',
    path: '/profile/price',
    icon: <DollarSign size={20} />,
  },
  {
    name: 'Dashboard',
    path: '/profile/dashboard',
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: 'Back',
    path: '/',
    icon: <ArrowLeft size={20} />,
  },
]

const SideBar = () => {

    const pathname = usePathname()

    return (
        <div className='border'>
                <div className="w-[260px] h-screen bg-black text-white p-5">
                <h1 className="text-2xl font-bold mb-10">My App</h1>

                <div className="flex flex-col gap-3">
                    {menuItems.map((item) => {
                    const isActive = pathname === item.path

                    return (
                        <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                            isActive
                            ? 'bg-white text-black font-semibold'
                            : 'hover:bg-white/10'
                        }`}
                        >
                        {item.icon}
                        <span>{item.name}</span>
                        </Link>
                    )
                    })}
                </div>
                </div>
            </div>
    );
};

export default SideBar;