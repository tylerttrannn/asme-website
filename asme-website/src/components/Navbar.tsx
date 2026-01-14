function Navbar() {
  return (
    <nav className="font-helvetica bg-white/90 backdrop-blur-sm px-12 py-3 rounded-full shadow-lg border border-white/20">
      <ul className="flex items-center gap-12 text-sm font-medium text-gray-800">
        <li className="cursor-pointer hover:text-blue-600 transition">About</li>
        <li className="cursor-pointer hover:text-blue-600 transition">Events</li>
        <li className="cursor-pointer hover:text-blue-600 transition">Yearbook</li>
        <li className="cursor-pointer hover:text-blue-600 transition">Store</li>
      </ul>
    </nav>
  )
}

export default Navbar;