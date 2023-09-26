import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { fontFraunces } from '@/styles/font'

const Header = () => (
  <header>
    <div className="relative flex items-center justify-center">

      <div className="md:hidden">
        <Image
          width={750}
          height={1076}
          src="./images/mobile/image-header.jpg"
          alt="banner"
        />
      </div>
      <div className="hidden md:block">
        <Image
          width={2880}
          height={1600}
          src="./images/desktop/image-header.jpg"
          alt="banner"
        />
      </div>

      <div className="absolute top-0 flex w-full items-center justify-between p-4">
        <div>
          <Image width={124} height={24} alt="logo" src="./images/logo.svg" />
        </div>
        <div className="hidden text-white md:block">
          <Link className="px-4" href="./">About</Link>
          <Link className="px-4" href="./">Services</Link>
          <Link className="px-4" href="./">Projects</Link>
          <button type="button" className="rounded-3xl bg-white px-3 py-2 text-black hover:bg-transparent hover:text-white">CONTACT</button>
        </div>

        <div className="md:hidden">
          {/* eslint-disable-next-line tailwindcss/classnames-order */}
          <details className="dropdown-end dropdown">
            <summary className="list-none text-3xl text-white"><GiHamburgerMenu /></summary>
            <ul className="clippath menu dropdown-content z-[1] flex w-[calc(100vw-40px)] items-center gap-3 bg-white p-2 py-6 text-neutral-dark-four shadow">
              <li><Link href="./">About</Link></li>
              <li><Link href="./">Services</Link></li>
              <li><Link href="./">Projects</Link></li>
              <li><button type="button" className={`${fontFraunces.className} rounded-3xl bg-yellow-400 font-extrabold uppercase text-black`}>CONTACT</button></li>
            </ul>
          </details>
        </div>

      </div>
      <h1 className={`${fontFraunces.className} absolute w-fit items-center pb-10 text-center text-4xl tracking-widest text-white md:pb-32 md:text-5xl lg:pb-60 lg:text-6xl`}>
        WE ARE CREATIVES
      </h1>

      <div className="absolute pt-52 md:pt-16">
        <Image width={36} height={154} alt="arrowDownIcon" src="./images/icon-arrow-down.svg" />
      </div>

    </div>

  </header>
)

export default Header
