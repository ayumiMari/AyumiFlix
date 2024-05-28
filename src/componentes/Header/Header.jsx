import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around bg-primary-ayu text-zinc-50 p-4">
            <span>Seja bem vindo</span>
            <h1>AyumiFlix</h1>
            <Navbar/>
        </header>
     );
}




export default Header ;