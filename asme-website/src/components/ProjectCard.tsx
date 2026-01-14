
interface EventItem {
  title: string;
  date: string;
  description: string;
  image: string; 
  tag: string;
}

interface ProjectCardProps {
  event: EventItem;
}

function ProjectCard({event} : ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 shadow-lg hover:shadow-2xl hover:border-zinc-600 transition-all duration-300">
      
      <div className="h-[250px] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
        />
      </div>

      <div className="flex-1 p-8 flex flex-col">        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {event.title}
        </h3>
        <p className="text-gray-400 text-base leading-relaxed mb-6">
          {event.description}
        </p>

        <div className="mt-auto pt-4 border-t border-zinc-700">
            <button className="text-gray-300 text-sm font-semibold hover:text-white transition-colors flex items-center gap-2">
            View Project
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
        </div>

      </div>

    </div>
  );

}

export default ProjectCard;