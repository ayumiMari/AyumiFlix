import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Rating } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
 
function DetalhesFilme(){
 
    const {id} = useParams();
    const [filme, setFilme] = useState([])
 
    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
 
    useEffect( () => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(erro => console.log(erro))
    },[])
 
 
    return(
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
<hr className="h-px m-2 border-0 bg-azul-escuro p-0 "></hr>
<br />

        <img className="max-w-md " src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`}/>
         <p className="font-bold text-2xl">{filme.title}</p>
         <Rating value={4} />
         <p>{filme.vote_average}</p>
         <h1 className="font-bold text-2xl text-azul-escuro">Sinopse</h1>
         <p>{filme.overview}</p>
         
    
        </>
    )
}
 
export default DetalhesFilme;