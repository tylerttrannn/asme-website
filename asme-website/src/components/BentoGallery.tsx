



function BentoGallery() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 w-full  h-[800px]">
        <div className="md:col-span-2 md:row-span-2 relative group">

          <div className="absolute bottom-4 left-4 text-white font-bold opacity-0 group-hover:opacity-100 transition">
             Main Feature
          </div>
        </div>

        <div className="md:col-span-3 relative">
          <img 
            src="https://picsum.photos/800/400?random=2" 
            className="w-full h-full object-cover rounded-lg" 
          />
        </div>

        <div className="relative">
          <img 
            src="https://picsum.photos/400/400?random=4" 
            className="w-full h-full object-cover rounded-lg" 
          />
        </div>

         <div className="relative">
          <img 
            src="https://picsum.photos/400/400?random=5" 
            className="w-full h-full object-cover rounded-lg" 
          />
        </div>

         <div className="relative">
          <img 
            src="https://picsum.photos/400/400?random=6" 
            className="w-full h-full object-cover rounded-lg" 
          />
        </div>

        <div className="relative">
          <img 
            src="https://picsum.photos/400/400?random=6" 
            className="w-full h-full object-cover rounded-lg" 
          />
        </div>

        <div className="relative">
          <img 
            src="https://picsum.photos/400/400?random=6" 
            className="w-full h-full object-cover rounded-lg" 
          />
        </div>

      </div>
    </div>
  )
}


export default BentoGallery;