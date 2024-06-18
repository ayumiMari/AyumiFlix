import data from '../../articles.json'

function Home() {
    
    return ( 
        <>
        <form className=" max-w-md mx-auto border-3 space-y-4">   
    <label for="default-search" class=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="rounded-full block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-stone-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite sua busca" required />

    </div>
</form>
<br />
<hr className="h-px m-2 border-0 bg-azul-escuro p-0 "></hr>
<br />
<a href="#">
        <p className='font-normal text-azul-escuro dark:text-gray-400 text-2xl'>Filmes/séries que estão por vir</p>
    </a>
    <br />
            <div className='grid grid-cols-3 gap-4'>
            {
                data.map( (artigo, index) => (
                    <div className='card overflow pb-10 px-3 items-center' key={index}>
                        <h2>{artigo.title}</h2>
                        <img className="h-96 w-370 rounded-lg object-cover object-center mb-2" src={artigo.image} alt={artigo.title} />
                        <div className='tags'>
                            {artigo.tags.map( (tag, index) => (
                                <span className="bg-ayumi p-1 m-1 object-center" key={index}>{tag}</span>
                            ))}
                        </div>
                        <div className='texto'>
                        {artigo.text.map( (paragrafo,index) => (
                            <p key={index}>{paragrafo}</p>
                        ))}
                        
                        </div>

                    </div>
                    
                ))
                
            }
            
            
            <a href="#" class="block max-w-sm p-6 bg-azul-claro border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Homem-Aranha 4 | Filmagens devem começar em janeiro de 2025 com Venom como vilão</h5>
            <a href="#">
            <img class="rounded-t-lg" src="public/Rectangle 18.png" alt="" />
            </a>
            <p class="font-normal text-black dark:text-gray-400">Ao que parece, o quarto filme do Homem-Aranha protagonizado por Tom Holland finalmente definiu uma data para começar seus trabalhos. Segundo o Production List, as filmagens começam em janeiro de 2025, em Los Angeles.
            Boatos apontam também que Venom deve ser o vilão da trama. Além disso, Miles Morales pode ser finalmente introduzido ao MCU. Não foi divulgado, porém, o título oficial do filme, que também segue sem diretor e roteirista confirmados. Ainda segundo o site, o Demolidor e Wilson Fisk, o Rei do Crime, também podem estar no longa.</p>
            </a>

            <a href="#" class="block max-w-sm p-6 bg-azul-claro border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Homem-Aranha 4 | Filmagens devem começar em janeiro de 2025 com Venom como vilão</h5>
            <a href="#">
            <img class="rounded-t-lg" src="public/Rectangle 19.png" alt="" />
            </a>
            <p class="font-normal text-black dark:text-gray-400">Ao que parece, o quarto filme do Homem-Aranha protagonizado por Tom Holland finalmente definiu uma data para começar seus trabalhos. Segundo o Production List, as filmagens começam em janeiro de 2025, em Los Angeles.
            Boatos apontam também que Venom deve ser o vilão da trama. Além disso, Miles Morales pode ser finalmente introduzido ao MCU. Não foi divulgado, porém, o título oficial do filme, que também segue sem diretor e roteirista confirmados. Ainda segundo o site, o Demolidor e Wilson Fisk, o Rei do Crime, também podem estar no longa.</p>
            </a>

            <a href="#" class="block max-w-sm p-6 bg-azul-claro border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Homem-Aranha 4 | Filmagens devem começar em janeiro de 2025 com Venom como vilão</h5>
            <a href="#">
            <img class="rounded-t-lg" src="public/Rectangle 24.png" alt="" />
            </a>
            <p class="font-normal text-black dark:text-gray-400">Ao que parece, o quarto filme do Homem-Aranha protagonizado por Tom Holland finalmente definiu uma data para começar seus trabalhos. Segundo o Production List, as filmagens começam em janeiro de 2025, em Los Angeles.
            Boatos apontam também que Venom deve ser o vilão da trama. Além disso, Miles Morales pode ser finalmente introduzido ao MCU. Não foi divulgado, porém, o título oficial do filme, que também segue sem diretor e roteirista confirmados. Ainda segundo o site, o Demolidor e Wilson Fisk, o Rei do Crime, também podem estar no longa.</p>
            </a>
<br />
            </div>
        </>
    );
}

export default Home ;
