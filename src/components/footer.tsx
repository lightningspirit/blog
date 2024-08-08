export default function Footer() {
  return (
    <footer className="mb-16">
      <p className="mt-8 text-neutral-600 dark:text-neutral-300 text-sm">
        © {new Date().getFullYear()} lightningspirit / MIT Licensed
      </p>
    </footer>
  )
}