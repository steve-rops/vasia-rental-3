export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#f0f2f4] p-4 flex justify-between items-center w-full">
      <img
        src="/logo.svg"
        alt="Vasia Rental Logo"
        className="h-8 w-auto mr-2"
      />

      <p className="text-xs text-[#9aa6b8]">© {year}</p>
    </footer>
  )
}
