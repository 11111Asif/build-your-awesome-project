import Banner from "../Banner/Banner";
import Choice from "../Choice/Choice";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Choice></Choice>
            <Service></Service>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;