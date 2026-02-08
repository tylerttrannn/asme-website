import Layout from "@/components/Layout";
import board from '../../src/assets/board.jpg';
import Section from "@/components/Section";
import BoardComittes from "@/components/BoardCommittes";
import exec from "../assets/exec.png"

function Board() { 
    return (
        <Layout>
            <Section >
                <div className = "pt-28 space-y-8 w-full h-full">
                    <h1 className="font-helvetica font-medium text-6xl md:text-7xl tracking-tighter ">
                        Meet the <br /> 
                        <span className="">ASME Board</span>
                    </h1>
                    
                    <img 
                        src={board} 
                        className="h-full w-full object-contain rounded-2xl shadow-2xl"
                        alt="ASME Board" 
                    />
                </div>

            </Section>

            <Section >
                <div className="flex flex-col space-y-8 justify-center items-center w-full">
                    {/* Added flex, flex-col, items-center, and text-center here */}
                    <div className="flex flex-col items-center justify-center text-center font-helvetica space-y-4">
                        <h1 className="font-normal text-3xl md:text-4xl tracking-tighter mb-8">
                            Get to know our team<br /> 
                        </h1>

                        <img 
                            src={exec} 
                            className="w-3/4 h-auto object-cover rounded-lg" 
                            alt="Exec Team"
                        />

                        <p className="font-light text-md">
                            Insert amazing info about each committee here
                        </p>
                    </div>

                    <BoardComittes />
                </div>


            </Section>
      
        </Layout>
    )
}

export default Board;