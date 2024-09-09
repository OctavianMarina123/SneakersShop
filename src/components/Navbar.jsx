import hamburger from '../assets/icons/hamburger.svg'
const Navbar = () =>{
    return(
        <header className="padding-x py-8">
            <nav className="flex justify-between items-center max-container">
                <h1 className="text-xl font-bold font-montserrat text-coral-red">
                    Sneakers Shop
                </h1>
                <ul className="flex-1 flex justify-center items-center gap-3 max-lg:hidden ">
                    <li className="font-montserrat leading-normal text-lg text-slate-gray">Home</li>
                    <li className="font-montserrat leading-normal text-lg text-slate-gray">About Us</li>
                    <li className="font-montserrat leading-normal text-lg text-slate-gray">Products</li>
                    <li className="font-montserrat leading-normal text-lg text-slate-gray">Contact Us</li>
                </ul>
                <img
                    className="hidden max-lg:block"
                    src={hamburger}
                    width={25}
                    height={25}
                    alt="Hamburger"
                />
            </nav>
        </header>
    )
}
export default Navbar;