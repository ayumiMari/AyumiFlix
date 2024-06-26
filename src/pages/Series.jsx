function Series() {
    return ( 
        <>
        <form class=" max-w-md mx-auto border-3 space-y-4">   
    <label for="default-search" class=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-azul-escuro dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class=" block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-stone-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite sua busca" required />

    </div>
</form>
<br />
<hr className="h-px m-2 border-0 bg-azul-escuro p-0 mx-10"></hr>
<br />

    <a href="#">
        <p className=' text-azul-escuro dark:text-gray-400 font-bold text-2xl mx-10'>Filmes em Destaque</p>
    </a>
<br />
        <div className="listaFilmes flex flex-row gap-3 flex-wrap justify-center align-items-center space-x-10">
           
            {
                filmes.map(
                    filme => (
                        <div className="card-filme space-x-10 object-cover object-center shadow-xl shadow-blue-gray-900/50 " key={filme.id}>
                            <img className="mx-1" src={`${img_URL}${filme.poster_path}`}/>
                            <h1>{filme.title}</h1>
                            <Link to={`${filme.id}`} className=" bg-azul-claro rounded-md ">Visualizar</Link>
                        </div>
            
                    )
                )
            }
           
        </div>
        <br />
        <a href="#">
        <p className=' text-azul-escuro dark:text-gray-400 font-bold text-2xl mx-10'>Lançamentos</p>
    </a>
<hr className="h-px m-2 border-0 bg-azul-escuro p-0 mx-10"></hr>
<br />
<div className="listaFilmes flex flex-row gap-3 flex-wrap justify-center align-items-center space-x-10">
           
           {
               filmes.map(
                   filme => (
                       <div className="card-filme space-x-10 object-cover object-center shadow-xl shadow-blue-gray-900/50" key={filme.id}>
                           <img className="mx-1" src={`${img_URL}${filme.poster_path}`}/>
                           <h1>{filme.title}</h1>
                           <Link to={`${filme.id}`} className=" bg-ayumi">Saiba Mais</Link>
                       </div>
           
                   )
               )
           }
           
        </div>
        <br />
        <a href="#">
        <p className=' text-azul-escuro dark:text-gray-400 font-bold text-2xl mx-10'>Filmes variados</p>
    </a>
<hr className="h-px m-2 border-0 bg-azul-escuro p-0 mx-10"></hr>
<br />
<div className="listaFilmes flex flex-row gap-3 flex-wrap justify-center align-items-center space-x-10">
           
           {
               filmes.map(
                   filme => (
                       <div className="card-filme space-x-10 object-cover object-center shadow-xl shadow-blue-gray-900/50" key={filme.id}>
                           <img className="mx-1" src={`${img_URL}${filme.poster_path}`}/>
                           <h1>{filme.title}</h1>
                           <Link to={`${filme.id}`} className=" bg-ayumi">Saiba Mais</Link>
                       </div>
           
                   )
               )
           }

        </div>
        </>
     );
}

export default Series ;