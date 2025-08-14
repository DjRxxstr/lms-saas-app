import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import NavItems from './NavItems';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href="/">
            <div className='flex items-center gap-2.5 cursor-pointer'>
                <Image 
                    src="/images/logo.svg"
                    alt="logo"
                    width={46} height={46}/>
            </div>
        </Link>
        
        <div className='flex items-center gap-6'>
            <NavItems/>

            <SignedOut>

              <SignInButton 
                // mode="modal"
              >
                <button className="btn-signin">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Sign Up
                </button>
              </SignUpButton>

            </SignedOut>


            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar;
