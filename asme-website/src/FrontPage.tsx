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
    <div className="min-h-screen bg-black">
      <div className="relative h-screen w-full overflow-hidden bg-white">
        <img src={asmeimg} className="h-full w-full object-cover p-4"/>
        
        {/*need this so that it floats on top of the image */}
        <div className="absolute top-10 right-13 z-50">
          <Navbar />
        </div>
      </div>


      {/*About ASME*/}
      <div className="py-10 px-10 bg-white">
        <h1 className="text-4xl font-bold text-black mb-4">About ASME</h1>
        <div className="mt-5">
           <h1>ASME is a community of students and engineers dedicated to learning, collaboration, and hands-on innovation. We create opportunities for members to grow through technical projects, professional development, workshops, and networking events. Whether you are new to engineering or experienced in your field, ASME provides a welcoming space to explore ideas, build meaningful connections, and develop real world skills through programs like PeterWorks and the Human Powered Vehicle Competition.</h1>
        </div>

      </div>

      {/*Events*/}
      <div className="py-20 px-10 bg-black">
        <h1 className="text-4xl font-bold mb-4">Welcome to ASME</h1>
        <div className="mt-10">
           <button className="bg-blue-600 text-white px-6 py-3 rounded">Learn More</button>
        </div>
      </div>

      {/*Projects*/}
      <div className="py-20 px-10 bg-black">
        <h1 className="text-4xl font-bold mb-4">Welcome to ASME</h1>
        <div className="mt-10">
           <button className="bg-blue-600 text-white px-6 py-3 rounded">Learn More</button>
        </div>
      </div>


    </div>
  )
}

export default FrontPage