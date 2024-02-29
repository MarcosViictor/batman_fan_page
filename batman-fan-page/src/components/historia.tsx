import Image from "next/image"

export default function Historia(props:any){
    return(
        <div className="flex items-center justify-between border-2 border-dashed border-black">
            <div >
            <Image
            src="/img/Batman_home.png"
            alt="Minha Imagem"
            width={800}
            height={800}
      />
            </div>
            <div >
                <h1 className="font-medium text-xl text-center mr-[100px] ">História</h1>
                <p className="flex-1 max-w-[400px] text-lg font-sans md:font-serif mr-[100px]">
                    
                    Batman, criado por Bob Kane e Bill Finger em 1939, é Bruce Wayne, um bilionário traumatizado pelo assassinato dos pais. Sem superpoderes, ele se torna o vigilante Batman, treinado em combate e detetive habilidoso. Utiliza alta tecnologia e enfrenta vilões como Coringa e Mulher-Gato em Gotham City. Bruce também é filantropo, aliado a personagens como Alfred, Robin e Batgirl. A história do Batman transcende quadrinhos, adaptando-se a várias mídias, permanecendo como símbolo de justiça. 
                </p>
            </div>
        </div>
    )
}



