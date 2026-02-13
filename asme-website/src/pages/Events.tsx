import Section from "../components/Section"
import Layout from "../components/Layout"
import asmeimg from '../assets/pngver.png';
import { Reveal } from '../components/Reveal';

interface instaPosts { //the interface for the Instagram Updates
    title: string;
    date: string; 
    link: string; //goes to the post when clicked
    caption: string; //
    image: string; //display image or if its not a video
};

const postData = [
  { id: 1, title: "RNN" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" },
  { id: 6, title: "Post 6" },
  { id: 7, title: "Post 1" },
  { id: 8, title: "Post 2" },
  { id: 9, title: "Post 3" },
  { id: 10, title: "Post 4" },
  { id: 11, title: "Post 5" },
  { id: 12, title: "Post 6" },
  { id: 13, title: "Post 1" },
  { id: 14, title: "Post 2" },
  { id: 15, title: "Post 3" },
  { id: 16, title: "Post 4" },
  { id: 17, title: "Post 5" },
  { id: 18, title: "Post 6" },
];

function Events(){
    return(
        <Layout>
            <Section>
                <div className="p-32 bg-[#f1f0ea]">
                    <h1 className="text-[64px] font-bold flex justify-center text-center font-helvetica">CHECK OUT OUR UPCOMING EVENTS!</h1>
        
                    {/*Posts Section*/}
                </div>
           </Section>
           <Section className="bg-[#f1f0ea]">
                <div className="container mx-auto p-15">
                    <h1 className="flex justify-center font-helvetica text-[40px] "> Recent Posts </h1>
                    <div className="grid grid-cols-2 gap-6 bg-[#f1f0ea]">
                        {postData.slice(0,6).map((post, index) => (
                            <Reveal key={index} width="100%">
                            <div className="aspect-square border flex items-center justify-center p-4 bg-blue-100">
                                <p className="text-black font-bold">{post.title}</p>
                            </div>
                            </Reveal>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-6 bg-[#f1f0ea] p-6"> //padding to separate the top from middle and bottom
                        {postData.slice(6,12).map((post, index) => (
                            <Reveal key={index} width="100%">
                            <div className="aspect-square border flex items-center justify-center p-4 bg-blue-100">
                                <p className="text-black font-bold">{post.title}</p>
                            </div>
                            </Reveal>
                        ))}
                    </div>
                    <div className="grid grid-cols-6 gap-6 bg-[#f1f0ea]">
                        {postData.slice(12,18).map((post, index) => (
                            <Reveal key={index} width="100%">
                            <div className="aspect-square border flex items-center justify-center p-4 bg-blue-100">
                                <p className="text-black font-bold">{post.title}</p>
                            </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
                
            </Section>
        </Layout>
    )
}

export default Events;