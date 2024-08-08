import Link from "next/link";
import { ArrowIcon } from "../icons/arrow-icon";
import Avatar from './avatar.jpg'
import Image from "next/image";

export function Header() {
  return (
    <header className="flex flex-col gap-6 sm:justify-between sm:items-center sm:flex-row">
      <Link href="/" className="flex space-x-3 items-center">
        <Image src={Avatar} width={25} height={25} className="w-auto rounded-full shadow border-2 border-neutral-500 dark:border-neutral-300" alt="" />
        <span className="text-xl sm:text-3xl font-serif font-bold">Lightningspirit&apos;s Blog</span>
      </Link>
      <ul className="font-sm flex space-x-2 text-neutral-600 dark:text-neutral-300">
        {[
          { label: (
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 384 512"><path d="M56 336c31 0 56 25 56 56s-25 56-56 56-56-25-56-56 25-56 56-56zM0 192c140 0 256 116 256 256h-80c0-48-14-94-48-128S48 272 0 272v-80zM0 64c212 0 384 172 384 384h-80c0-171-133-304-304-304V64z"></path></svg>
          ), href: '/rss' },
          { label: (
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 448 512"><path d="M224 32c124 0 224 103 224 230 0 101-64 188-153 218h-4c-8 0-12-7-12-12 0-8 1-31 1-62 0-21-8-36-16-43 50-6 103-25 103-113 0-25-9-46-23-62 2-6 10-29-2-61h-5c-8 0-27 3-57 24-18-5-37-8-56-8s-38 3-56 8c-30-21-49-24-57-24h-5c-12 32-4 55-2 61-14 16-23 37-23 62 0 88 52 107 102 113-6 6-12 16-14 31-6 3-16 6-26 6-13 0-28-5-39-25 0 0-13-22-35-24-2 0-21 0-1 14 0 0 15 8 25 34 0 0 10 33 53 33 7 0 14 0 22-2v39c0 5-3 11-11 11h-4C64 450 0 364 0 262 0 135 100 32 224 32z"></path></svg>
          ), href: 'https://github.com/lightningspirit' },
        ].map(({ label, href }) => (
          <li key={href}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
            >
              <p className="ml-2 h-7 fill-black dark:fill-white">{label}</p>
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
