import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Rating } from "@material-tailwind/react";

function DetalhesFilme() {

    const { id } = useParams();
    const [filmes, setFilme] = useState([])

    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'

    useEffect(() => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
            .then(response => response.json())
            .then(response => setFilme(response))
            .catch(erro => console.log(erro))
    }, [])


    return (
        <>
            <form className=" max-w-md mx-auto border-3 space-y-4">
                <label htmlFor="default-search" className=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-azul-escuro dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className=" block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-stone-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite sua busca" required />

                </div>
            </form>
            <br />
            <hr className="h-px m-2 border-0 bg-azul-escuro p-0 mx-10"></hr>
            <br />
            <div className="flex flex-row">
                <img className=" mx-10 flex flex-row-start w-2/4 h-2/4" src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} />
                <div className="">
                    <p className="font-bold text-2xl mx-10 flex flex-row-start">{filmes.title}</p>
                    {/* {
                        filmes.map(
                            filme => (
                                <>
                                    <p>{filme.genre_ids}</p>
                                </>
                            )
                        )
                    } */}
                    <p className="mx-10 my-2">Data de lançamento: {filmes.release_date}</p>
                    <Rating className="mx-10 flex flex-row-start" value={4} />
                    <p className="mx-10 my-2 flex flex-row-start">Avaliação: {filmes.vote_average}</p>
                </div>
            </div>

            <br />
            <h1 className="font-bold text-2xl text-azul-escuro mx-10">Sinopse</h1>
            <p className="mx-10 ">{filmes.overview}</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </>
    )
}

export default DetalhesFilme;