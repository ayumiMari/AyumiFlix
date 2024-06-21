import data from '../../articles.json'

function Home() {
    
    return ( 
        <>
        <form className=" max-w-md mx-auto border-3 space-y-4">   
    <label htmlFor='default-search' className=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-azul-escuro dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className=" block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-stone-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite sua busca" required />

    </div>
</form>
<br />
<hr className="h-px m-2 border-0 bg-azul-escuro p-0 mx-10 "></hr>
<br />
<a href="#">
        <p className=' text-azul-escuro dark:text-gray-400 font-bold text-2xl mx-10'>Filmes/séries que estão por vir</p>
    </a>
    <br />

            <div className='grid grid-cols-3 gap-4 overflow-x-scroll pb-10 hide-scroll-bar justify-items-center'>
            {
                data.map( (artigo, index) => (
                    <div className='card overflow pb-10 px-3 items-center w-2/4' key={index}>
                        <h2 className='text-1xl font-bold text-center mx-auto'>{artigo.title}</h2>
                        <img className="flex justify-center h-96 w-full rounded-lg  mb-2 mx-auto" src={artigo.image} alt={artigo.title} />
                        <div className='tags'>
                            {artigo.tags.map( (tag, index) => (
                                <span className="p-1 m-1" key={index}>{tag}</span>
                            ))}
                        </div>
                        <div className='text-center'>
                        {artigo.text.map( (paragrafo,index) => (
                            <p key={index} className=''>{paragrafo}</p>
                        ))}
                        
                        </div>

                    </div>
                    
                ))
                
            }
            
            <br />
        <a href="#">
        <p className=' text-azul-escuro dark:text-gray-400 font-bold text-2xl mx-20 text-center'>Notícias</p>
    </a>

            <br />
                <a href="#" className="block max-w-sm p-6 bg-azul-claro border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Homem-Aranha 4 | Filmagens devem começar em janeiro de 2025 com Venom como vilão</h5>
                <a href="#">
                <img className="rounded-t-lg" src="public/Rectangle 18.png" alt="" />
                </a>
                <p className="font-normal text-black dark:text-gray-400">Ao que parece, o quarto filme do Homem-Aranha protagonizado por Tom Holland finalmente definiu uma data para começar seus trabalhos. Segundo o Production List, as filmagens começam em janeiro de 2025, em Los Angeles.
                Boatos apontam também que Venom deve ser o vilão da trama. Além disso, Miles Morales pode ser finalmente introduzido ao MCU. Não foi divulgado, porém, o título oficial do filme, que também segue sem diretor e roteirista confirmados. Ainda segundo o site, o Demolidor e Wilson Fisk, o Rei do Crime, também podem estar no longa.</p>
                </a>

                <a href="#" className="block max-w-sm p-6 bg-azul-claro border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Homem-Aranha 4 | Filmagens devem começar em janeiro de 2025 com Venom como vilão</h5>
                <a href="#">
                <img className="rounded-t-lg" src="public/Rectangle 19.png" alt="" />
                </a>
                <p className="font-normal text-black dark:text-gray-400">Ao que parece, o quarto filme do Homem-Aranha protagonizado por Tom Holland finalmente definiu uma data para começar seus trabalhos. Segundo o Production List, as filmagens começam em janeiro de 2025, em Los Angeles.
                Boatos apontam também que Venom deve ser o vilão da trama. Além disso, Miles Morales pode ser finalmente introduzido ao MCU. Não foi divulgado, porém, o título oficial do filme, que também segue sem diretor e roteirista confirmados. Ainda segundo o site, o Demolidor e Wilson Fisk, o Rei do Crime, também podem estar no longa.</p>
                </a>

                <a href="#" className="block max-w-sm p-6 bg-azul-claro border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Homem-Aranha 4 | Filmagens devem começar em janeiro de 2025 com Venom como vilão</h5>
                <a href="#">
                <img className="rounded-t-lg" src="public/Rectangle 24.png" alt="" />
                </a>
                <p className="font-normal text-black dark:text-gray-400">Ao que parece, o quarto filme do Homem-Aranha protagonizado por Tom Holland finalmente definiu uma data para começar seus trabalhos. Segundo o Production List, as filmagens começam em janeiro de 2025, em Los Angeles.
                Boatos apontam também que Venom deve ser o vilão da trama. Além disso, Miles Morales pode ser finalmente introduzido ao MCU. Não foi divulgado, porém, o título oficial do filme, que também segue sem diretor e roteirista confirmados. Ainda segundo o site, o Demolidor e Wilson Fisk, o Rei do Crime, também podem estar no longa.</p>
                </a>
           
<br />
            </div>
        </>
    );
}

export default Home ;