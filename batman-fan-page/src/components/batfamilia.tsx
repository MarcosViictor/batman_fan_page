import Image from "next/image"

export default function Bat_familia(props:any){
    return(
        <div className="flex items-center justify-between border-2 border-dashed border-black">
            <div>
            <Image
            src="/img/batfamilia.jpg"
            alt="Minha Imagem"
            width={800}
            height={800}
      />
            </div>
            <div className="flex-1 max-w-[400px] text-sl font-sans md:font-serif mr-[100px] text-justify">
                <h1 className="font-medium text-xl text-center mr-[100px] ">
                    Bat-familia
                </h1>
                <p>
                A Batfamília, parte integrante do universo do Batman, é uma rede de aliados que auxiliam o Cavaleiro das Trevas em sua missão contra o crime em Gotham City. Com personagens como os vários Robins (Dick Grayson, Jason Todd, Tim Drake, Damian Wayne), Batgirl (Barbara Gordon, Cassandra Cain, Stephanie Brown), Asa Noturna (Dick Grayson), Capuz Vermelho (Jason Todd), Mulher-Gato (Selina Kyle) e Oráculo (Barbara Gordon), a dinâmica do grupo traz uma variedade de habilidades e personalidades. Cada membro contribui para a complexidade emocional das histórias, explorando temas de família, lealdade e superação, adicionando camadas significativas ao universo do Batman.
                </p>
            </div>
        </div>
    )
}