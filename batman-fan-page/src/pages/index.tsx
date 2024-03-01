
import Header from "@/components/header";
import Historia from "@/components/historia";
import Viloes from "@/components/viloes";
import Bat_familia from "@/components/batfamilia";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main >
      <div >
      <Header/>
      </div>

      <div className="p-20 bg-gray-800 text-white">
        <Historia/>
      </div>
      
      <div className="p-20 bg-gray-800 text-white">
        <Viloes/>
      </div>
      <div className="p-20 bg-gray-800 text-white">
          <Bat_familia/>
      </div>
      <div  className="p-20 bg-yellow-400 text-black">
        <Footer/>
      </div>
    </main>
  );
}
