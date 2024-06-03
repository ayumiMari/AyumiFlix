import data from '../../articles.json'

function Home() {
    console.log(data)
    return ( 
        <main>
            <input type="text" name="busca" id="buscar" placeholder="Digite aqui sua busca"/>
            <div className='grid grid-cols-3 gap-4'>
                {
                    
                data.map(filme => (
                    <div className='card bg-ayumi' key={filme.title}>
                    <h1>{filme.title}</h1>
                    <img src={filme.image} alt={filme.title} />

                    <div className='texto'>
                        {filme.text.map(texto => (
                            <p key={texto}>{texto}</p>
                        ))}
                    </div>
                    
                    <div className='tag'>
                        {filme.tags.map(tag => (
                            <span key={tag} className='bg-blue-700 p-1 m-1 rounded-lg text-white'> {tag} </span>
                        ))}
                    </div>
                    </div>
                ))}
            </div>
        </main>
     );
}

export default Home ;


