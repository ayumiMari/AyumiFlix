import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Filmes() {

    const [filmes, setFilmes] = useState([])


    const img_URL = 'https://image.tmdb.org/t/p/w300/'

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(error => console.log(error))

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

            <a href="#">
                <p className=' text-azul-escuro dark:text-gray-400 font-bold text-2xl mx-10'>Filmes em Destaque</p>
            </a>
            <br />
            <div className="listaFilmes flex flex-row gap-6 flex-wrap align-items-center justify-center ">

                {
                    filmes.map(
                        filme => (
                            <div className="card-filme shadow-xl shadow-blue-gray-900/50 rounded-xl" key={filme.id}>
                                <Link to={`${filme.id}`} className="flex flex-col">
                                    <img className="rounded-t-xl" src={`${img_URL}${filme.poster_path}`} />
                                    <h1 className="text-center ">{filme.title}</h1>
                                </Link>
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
            <div className="listaFilmes flex flex-row gap-6 flex-wrap align-items-center justify-center ">

                {
                    filmes.map(
                        filme => (
                            <div className="card-filme shadow-xl shadow-blue-gray-900/50 rounded-xl" key={filme.id}>
                                <Link to={`${filme.id}`} className="flex flex-col">
                                    <img className="rounded-t-xl" src={`${img_URL}${filme.poster_path}`} />
                                    <h1 className="text-center ">{filme.title}</h1>
                                </Link>
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
            <div className="listaFilmes flex flex-row gap-6 flex-wrap align-items-center justify-center ">

                {
                    filmes.map(
                        filme => (
                            <div className="card-filme shadow-xl shadow-blue-gray-900/50 rounded-xl" key={filme.id}>
                                <Link to={`${filme.id}`} className="flex flex-col">
                                    <img className="rounded-t-xl" src={`${img_URL}${filme.poster_path}`} />
                                    <h1 className="text-center ">{filme.title}</h1>
                                </Link>
                            </div>

                        )
                    )
                }

            </div>
        </>

    );
}

export default Filmes;