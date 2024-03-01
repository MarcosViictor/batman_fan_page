
import Image from "next/image"

export default function Viloes(props:any){
    return(
        <div className="flex items-center justify-between border-2 border-dashed border-black">
            <div className="flex-1 max-w-[400px] text-sl font-sans md:font-serif ml-[200px] text-justify">
                <h1 className="font-medium text-xl text-center mr-[100px] ">Vilões</h1>
                <p>
                Os vilões do Batman são parte essencial do universo do Cavaleiro das Trevas, cada um com características distintas que desafiam o herói de Gotham. Destacam-se:

                Coringa: Arqui-inimigo caótico do Batman, conhecido por sua insanidade.

                Duas-Caras (Harvey Dent): Promotor público com personalidade dual, decide ações com uma moeda.

                Pinguim (Oswald Cobblepot): Gângster aristocrático, especializado em contrabando.

                Espantalho (Dr. Jonathan Crane): Usa gás do medo para explorar os medos de suas vítimas.

                Esses vilões, entre outros, enriquecem as narrativas de Batman, testando não apenas suas habilidades físicas, mas também seus princípios éticos em meio às sombras de Gotham City.
                </p>
            </div>

            <div>
            <Image
            src="/img/viloes.jpg"
            alt="Minha Imagem"
            width={700}
            height={700}
      />
            </div>
        </div>
    )


}