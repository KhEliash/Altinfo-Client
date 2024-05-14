import Banner from "../components/Banner";
import LatestCard from "../components/LatestCard";
import NewsLetter from "../components/NewsLetter";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";

 

const Home = () => {
    return (
        <div className="container mx-auto bg-base-200">
            <Slider></Slider>
            <Banner></Banner>
            <LatestCard></LatestCard>
            <NewsLetter></NewsLetter>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;