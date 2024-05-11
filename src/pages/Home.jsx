import Banner from "../components/Banner";
import Slider from "../components/Slider";

 

const Home = () => {
    return (
        <div className="container mx-auto">
            <Slider></Slider>
            <Banner></Banner>
        </div>
    );
};

export default Home;