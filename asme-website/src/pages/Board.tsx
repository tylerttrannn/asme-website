import Layout from "@/components/Layout";
import board from '../../src/assets/board.jpg';
import Section from "@/components/Section";
import BoardComittes from "@/components/BoardCommittes";

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
                <BoardComittes/>


            </Section>
      
        </Layout>
    )
}

export default Board;