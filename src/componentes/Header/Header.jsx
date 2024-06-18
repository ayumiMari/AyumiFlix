import Navbar from "../Navbar/Navbar";


function Header() {
    return ( 
        <header className=" mx-auto flex justify-around bg-azul-escuro text-white p-4">
            <span>Seja bem vindo</span>
            <h1>AyumiFlix</h1>
            <Navbar/>
            
        </header>
        
     );
}

export default Header ;
