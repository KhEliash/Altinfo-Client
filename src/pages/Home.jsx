import Banner from "../components/Banner";
import LatestCard from "../components/LatestCard";
import NewsLetter from "../components/NewsLetter";
import Slider from "../components/Slider";

 

const Home = () => {
    return (
        <div className="container mx-auto bg-base-200">
            <Slider></Slider>
            <Banner></Banner>
            <LatestCard></LatestCard>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;