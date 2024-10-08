import Button from "./Button.jsx";
import arrowRight from "../assets/icons/arrow-right.svg"
import bigShoe1 from '../assets/images/big-shoe1.png'

const Hero = () => {
    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Our Autum Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br/>
                    <span className="text-coral-red inline-block mt-3 relative z-10">Sneakers</span>
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover new
                    arrivals, quality comfort, and innovation for your ative life</p>
                <Button label="Shop Now" iconUrl={arrowRight}/>
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    <div>
                        <p className="text-4xl font-palanquin font-bold">1k+</p>
                        <p className="leading-7 font-montserrat text-slate-gray">Brands</p>
                    </div>
                    <div>
                        <p className="text-4xl font-palanquin font-bold">500+</p>
                        <p className="leading-7 font-montserrat text-slate-gray">Shops</p>
                    </div>
                    <div>
                        <p className="text-4xl font-palanquin font-bold">250k+</p>
                        <p className="leading-7 font-montserrat text-slate-gray">Customers</p>
                    </div>
                </div>
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
                <img
                    src={bigShoe1}
                    alt="shoe collection"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />
            </div>
            <div>

            </div>
        </section>
    )
}

export default Hero;