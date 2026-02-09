import Layout from "../components/Layout"


function Events(){
    return(
        <Layout>
             <div className="p-32 bg-[#f1f0ea]">
                <h1 className="text-[64px] font-bold text-blue-600 flex justify-center text-center font-helvetica">CHECK OUT OUR UPCOMING EVENTS!</h1>
    
                {/* This is where you'll build your Instagram post section */}
            </div>
            <div className="container mx-auto p-15">
                <h1 className="flex justify-center font-helvetica text-[40px] text-blue-400"> Posts </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-32 bg-#ffffff">
                    <div className="aspect-square bg-blue-100 p-15"> RNN JOCELYN SLAPS BRIAN </div>
                    <div className="aspect-square bg-blue-100 p-15"> BRIAN TAKES REVENGE; PUSHES HER INTO POOL</div>
                    <div className="aspect-square bg-blue-100 p-15"> Wow! RNN Recap </div>
                </div>
            </div>
        </Layout>
    )
}

export default Events;