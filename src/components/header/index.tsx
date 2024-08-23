/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col gap-6 sm:justify-between sm:items-center sm:flex-row">
      <Link href="/" className="flex space-x-3 items-center">
        <img
          src="data:image/jpg;base64,/9j/4QC8RXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAADAAAAADoAQAAQAAADEAAAAAAAAA/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAMQAwAwEiAAIRAQMRAf/EABwAAAEEAwEAAAAAAAAAAAAAAAYABAUHAQIIA//EADgQAAECBAMGAQgLAQAAAAAAAAECAwAEBREGEiEHEzFBUWFxFCIyM4GRobIXIzY4QnJ1doKxwbP/xAAZAQEAAwEBAAAAAAAAAAAAAAAFAAEEAwL/xAAkEQACAgECBgMBAAAAAAAAAAABAwACEQQTEiEiMUGBMjPBkf/aAAwDAQACEQMRAD8A5WsY3YbW66ENpKlngANTGxcUdAAT4RKYSfDGIpN531aFErNuVtYjbGtTYeJ0VQXuKnyYYYe2VYgq7aXlsJYayhat4rzrdQIGsb4VmcMzqUPELYc9WvrbiD3joXCeM6RMyz6JV6YdcabJU3uyFWHE94r7aPmxdQ1TrMlMyLUm6pSVzIsHBlN/bpASNc8uAaMDz+Rt+iVsnb5nx+ylYzGI2yqtextDsAj5Uq15QGkKzKzEaHoT/kOaDURSa3LOkDdNPhSudwNI1oNBnq06RJtgNg2U6vRI7X5nsILH9noapxU3Nl2dBvlKcqCOg7+MZ2tXXoue81KUy2L0r2h8caywr0vL0+lOuoS2bbhKUAqKdDmOlteUQe0DGk8/hqdp9Sk0y7jykhi9ipST6RNuliAfCIKlStXpDLbKkOlKdd3vS2to9QeYMHbWC3p6hzlcrEsjMENgS6iVBDRUAASeKyTmv2gbbSlgOM++cas1jVkZwT/BOfw4ocD2j0cmA4pKi02CONrjN8Ys2p4IpLmcsJelzfTKu49xgCxHQpihzSG3lJcbcF23E8x4cjDKtStpwO8DbpWKGT2lpYZlxT6XKywtmSlJV+ZQuT74nCu6XNeGkQ7V0hBJIUCEnvD9ld21HmTBN+o5MbqMDAlkbRajRMM4RpdYnqK3UqilhtDRBCdAkarPQEgcCYl67VqfO7Kw/LqQ0uelmXw0fSzEpUR7OECG1yq4O+jVKHAKg42dzLeSvGzbyk65lC4t5puD09sBchtGUxgOh0eUpTIbmZbyaYnHh5y1JVlOWx4gZTr1iDTi1BcDnM+518JPKek6r6m19SRAftHaExQ0PAXUy8BfoCLH42grmlXCQOsRdSbTOU6dllAapIF+AI1vFpPBYWnZtOOhrHf4R4o/yHDHD+cKFFmehImq/d+X+4j/AMYEaN9k5D9Tc+RqFChCvw9ww/Z6lhPemnxP9RFq4VDxX8sKFB1Ynaf/2Q=="
          className="w-8 h-8 rounded-full shadow border-2 border-neutral-500 dark:border-neutral-300"
          alt="Me"
        />
        <span className="text-xl sm:text-3xl font-serif font-bold">Lightningspirit&apos;s Blog</span>
      </Link>
      <ul className="font-sm flex space-x-2 text-neutral-600 dark:text-neutral-300">
        {[
          {
            label: 'GitHub',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 448 512"><path d="M224 32c124 0 224 103 224 230 0 101-64 188-153 218h-4c-8 0-12-7-12-12 0-8 1-31 1-62 0-21-8-36-16-43 50-6 103-25 103-113 0-25-9-46-23-62 2-6 10-29-2-61h-5c-8 0-27 3-57 24-18-5-37-8-56-8s-38 3-56 8c-30-21-49-24-57-24h-5c-12 32-4 55-2 61-14 16-23 37-23 62 0 88 52 107 102 113-6 6-12 16-14 31-6 3-16 6-26 6-13 0-28-5-39-25 0 0-13-22-35-24-2 0-21 0-1 14 0 0 15 8 25 34 0 0 10 33 53 33 7 0 14 0 22-2v39c0 5-3 11-11 11h-4C64 450 0 364 0 262 0 135 100 32 224 32z"></path></svg>
            ),
            href: 'https://github.com/lightningspirit',
        },
        ].map(({ label, icon, href }) => (
          <li key={href}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
              aria-label={label}
            >
              <p className="ml-2 h-7 fill-black dark:fill-white">{icon}</p>
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
