function BentoGallery() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 w-full h-auto md:h-[800px]">
        
        {/* img1*/}
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg min-h-[250px]">
          <img 
            src="https://picsum.photos/600/600?random=1" 
            alt="Main Feature"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          <div className="absolute bottom-4 left-4 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             Main Feature
          </div>
        </div>

        {/* img2*/}
        <div className="md:col-span-2 relative min-h-[200px]">
          <img 
            src="https://picsum.photos/800/400?random=2" 
            className="w-full h-full object-cover rounded-lg" 
            alt="Gallery Item"
          />
        </div>

        {/* img3*/}
        <div className="relative min-h-[200px]">
          <img 
            src="https://picsum.photos/400/400?random=3" 
            className="w-full h-full object-cover rounded-lg" 
            alt="Gallery Item"
          />
        </div>

        {/* img4 */}
         <div className="relative min-h-[200px]">
          <img 
            src="https://picsum.photos/400/400?random=4" 
            className="w-full h-full object-cover rounded-lg" 
            alt="Gallery Item"
          />
        </div>

        {/* img5 */}
         <div className="relative min-h-[200px]">
          <img 
            src="https://picsum.photos/400/400?random=5" 
            className="w-full h-full object-cover rounded-lg" 
            alt="Gallery Item"
          />
        </div>

        {/* img6*/}
        <div className="md:col-span-3 relative min-h-[200px]">
          <img 
            src="https://picsum.photos/900/400?random=6" 
            className="w-full h-full object-cover rounded-lg" 
            alt="Gallery Item"
          />
        </div>

      </div>
    </div>
  )
}

export default BentoGallery;