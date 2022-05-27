import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LoginBtn from '../components/LoginBtn'
import { useSession } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <header className="shadow-sm">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between py-4 px-2">
        {/* <Image
          src="/logo.svg"
          layout="fill"
          objectFit="contain"
          alt="Company Logo"
        /> */}
        <Link href="/">
          <h3 className="cursor-pointer text-xl font-bold">Movie App</h3>
        </Link>

        <div className="flex items-center space-x-3">
          <ul className="text-l flex space-x-2 font-semibold">
            <Link href="/">
              <li className="cursor-pointer">HOME</li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer">ABOUT</li>
            </Link>
            {session ? (
              <Link href="/my-dashboard">
                <li className="cursor-pointer">MY DASHBOARD</li>
              </Link>
            ) : (
              ''
            )}
          </ul>
          <LoginBtn />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
