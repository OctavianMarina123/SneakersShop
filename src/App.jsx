import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
    return (
        <main>
            <Navbar/>
            <section className="xl:padding-1 wide:padding-r padding-b">
                <Hero/>
            </section>
            <section className="padding">
                PopularProducts
            </section>
            <section className="padding">
                SuperQuality
            </section>
            <section className="padding-x py-10">
                Services
            </section>
            <section className="padding-x padding-t pb-8">
                Footer
            </section>
        </main>
    )
}