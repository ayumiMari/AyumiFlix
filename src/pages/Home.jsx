import data from '../../articles.json'

function Home() {
    return ( 
        <>
            <input type="text" id="buscar" placeholder='Buscar uma notícia' />
            <div className='grid grid-cols-3 gap-4'>
            {
                data.map( (artigo, index) => (
                    <div className='card overflow pb-10 px-3' key={index}>
                        <h2>{artigo.title}</h2>
                        <img className="h-96 w-full rounded-lg object-cover object-center mb-2" src={artigo.image} alt={artigo.title} />
                        <div className='tags'>
                            {artigo.tags.map( (tag, index) => (
                                <span className="bg-ayumi p-1 m-1 object-center" key={index}>{tag}</span>
                            ))}
                        </div>
                        <div className='texto '>
                        {artigo.text.map( (paragrafo,index) => (
                            <p key={index}>{paragrafo}</p>
                        ))}
                        
                        </div>

                    </div>
                    
                ))
            }
            </div>
        </>
    );
}

export default Home ;

