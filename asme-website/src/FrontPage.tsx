import asmeimg from '../src/assets/pngver.png'
import paperimg from '../src/assets/paper.jpg'
import './index.css' 
import EventCard from './components/EventCard'
import BentoGallery from './components/BentoGallery'
import ProjectCard from './components/ProjectCard'
import Navbar from './components/Navbar'

interface EventItem {
  title: string;
  date: string;
  description: string;
  image: string; 
  tag: string;
}

const eventsData: EventItem[] = [
  {
    title: "Research Network Night",
    date: "Jan 21 • 5 - 8 PM",
    description: "Come to learn about the multitude of researh topics from the Engineering faculty, ask questions on graduate school, and enjoy refreshments!",
    image: asmeimg,
    tag: "Event"
  },
  {
    title: "Senior Design Networking Night",
    date: "Jan 21 • 5 - 8 PM",
    description: "Come to learn about the multitude of researh topics from the Engineering faculty, ask questions on graduate school, and enjoy refreshments!",
    image: asmeimg,
    tag: "Event"
  },
  {
    title: "Network with ASME",
    date: "Jan 21 • 5 - 8 PM",
    description: "Come to learn about the multitude of researh topics from the Engineering faculty, ask questions on graduate school, and enjoy refreshments!",
    image: asmeimg,
    tag: "Event"
  },
];


const projectsData: EventItem[] = [
  {
    title: "HPVC",
    date: "Jan 21 • 5 - 8 PM",
    description: "Come to learn about the multitude of researh topics from the Engineering faculty, ask questions on graduate school, and enjoy refreshments!",
    image: asmeimg,
    tag: "Event"
  },
  {
    title: "Peterworks",
    date: "Jan 21 • 5 - 8 PM",
    description: "Come to learn about the multitude of researh topics from the Engineering faculty, ask questions on graduate school, and enjoy refreshments!",
    image: asmeimg,
    tag: "Event"
  },

];



function FrontPage() {
  return (
    <div className="relative min-h-screen w-full bg-gray-50">
      
      <div className="fixed inset-0 z-0 ">
      </div>

      <div className="relative z-10">
        
        <div className="relative h-screen w-full overflow-hidden flex flex-col items-center">
          <div className="absolute top-14 z-100">
            <Navbar />
          </div>
          
          <div className="h-full w-full p-4 md:p-6 lg:p-8">
            <img 
                src={asmeimg} 
                className="h-full w-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="py-24 bg-[#f1f0ea] text-black ">
          <div className="container mx-auto px-6 lg:px-24 flex flex-col ">
            
            <div className = "flex flex-col space-y-12">
                <h2 className="font-helevtica text-sm font-bold uppercase tracking-widest mb-2">Who We Are</h2>
                <h1 className="font-helevtica font-normal text-4xl md:text-5xl font-bold mb-6">About ASME</h1>
                <div className="mt-auto pt-4 border-t-[0.5px] border-zinc-700"></div>
            </div>

            <p className="font-helevtica font-light text-lg md:text-xl leading-relaxed pt-4 pb-14">
              ASME is a community of students and engineers dedicated to learning, collaboration, and hands-on innovation. We create opportunities for members to grow through technical projects, professional development, workshops, and networking events.
            </p>


            <BentoGallery/>

          </div>

        </div>

        <div className="py-24 bg-[#505544]">
          <div className="container mx-auto px-6 lg:px-24 flex flex-col gap-12">
            
            <div className="max-w-3xl">
               <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Get Involved</h2>
               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
            </div>

            <div className="flex flex-col gap-12">
              {eventsData.map((event, index) => (
                <EventCard 
                  key={index} 
                  event={event} 
                  isReversed={index % 2 !== 0} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="py-24 bg-zinc-900">
          <div className="container mx-auto px-6 lg:px-24 flex flex-col gap-12">
            
            <div className="max-w-3xl">
                <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Our Work</h2>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h1>
                <p className="text-zinc-400 text-lg">
                Explore the hands-on engineering challenges our teams are tackling this year.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {projectsData.map((event, index) => (
                <ProjectCard 
                  key={index} 
                  event={event} 
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FrontPage