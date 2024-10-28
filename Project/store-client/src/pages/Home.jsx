import HomeCards from "../components/HomeCards"
import HomeCarousel from "../components/HomeCarousel"

const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-start gap-8 w-screen h-full">
                <HomeCarousel />
                <HomeCards />
            </div>
        </>
    )
}

export default Home