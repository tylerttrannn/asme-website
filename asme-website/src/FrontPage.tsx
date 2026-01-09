import asmeimg from '../src/assets/pngver.png'

function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm px-12 py-3 rounded-full shadow-lg border border-white/20">
      <ul className="flex items-center gap-12 text-sm font-medium text-gray-800">
        <li className="cursor-pointer hover:text-blue-600 transition">About</li>
        <li className="cursor-pointer hover:text-blue-600 transition">Events</li>
        <li className="cursor-pointer hover:text-blue-600 transition">Yearbook</li>
        <li className="cursor-pointer hover:text-blue-600 transition">Store</li>
      </ul>
    </nav>
  )
}

function FrontPage() {
  return (
    // all other components below are postiioned relative to this orginial div
    <div className="relative h-screen w-full overflow-hidden bg-white">
      
      <img 
        src={asmeimg} 
        className="h-full w-full object-cover p-4" 
        alt="Background"
      />

      <div className="absolute top-10 right-13 z-50">
        <Navbar />
      </div>
      
    </div>
  )
}

export default FrontPage