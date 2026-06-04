import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="bg-bg font-sans text-ink overflow-x-hidden">{children}</main>
    </>
  )
}
