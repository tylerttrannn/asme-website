import { useState } from "react";
import exec from "../assets/board-group-photos/exec.png"
import boardCommitte from "@/model/BoardMembers";






function BoardCommittees() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentCommittee = boardCommitte[activeIndex];

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-normal text-3xl md:text-4xl tracking-tighter mb-8">
        Get to know our team
      </h1>

      <img 
        src={exec} 
        className="w-4/5 h-auto object-cover rounded-lg" 
        alt="Exec Team"
      />

      <div className="flex flex-col mt-10 w-full max-w-8xl px-4 items-center"> 
        <div className="w-full flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl px-2">
            {boardCommitte.map((committee, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  px-5 py-2 rounded-full border transition-all duration-300 font-medium text-sm
                  ${
                    activeIndex === index
                      ? "bg-gray-800 text-white border-gray-900 shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                  }
                `}
              >
                {committee.title}
              </button>
            ))}
          </div>
        </div>

        {/* photo grid*/}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-12">
            {currentCommittee.members.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start w-60"> 
                <div className="w-60 h-60 overflow-hidden bg-gray-100 mb-4 rounded-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="w-full px-1">
                  <h3 className="font-medium text-lg text-center sm:text-left leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-center sm:text-left text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default BoardCommittees;