import Banner from "../components/Banner";
import LatestCard from "../components/LatestCard";
import Slider from "../components/Slider";

 

const Home = () => {
    return (
        <div className="container mx-auto">
            <Slider></Slider>
            <Banner></Banner>
            <LatestCard></LatestCard>
        </div>
    );
};

export default Home;