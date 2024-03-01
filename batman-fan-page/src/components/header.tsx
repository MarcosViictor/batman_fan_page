import Image from "next/image"



export default function Header(props:any){
    return(
        <div className="flex items-center bordex-b-4 px-6 h-24 justify-around bg-yellow-400 font-medium  border-2 border-dashed border-black font-sans md:font-serif" >
            <div>
            <Image
            src="/img/batman_logo.png"
            alt="Minha Imagem"
            width={100}
            height={100}
      />
            </div >
            <div>História</div>
            <div>Vilões</div>
            <div>Bat-familia</div>
        </div>
    )
}