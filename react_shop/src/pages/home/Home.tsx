import CenterContent from "../../components/CenterContent";
import TopBar from "../../components/topbar/TopBar";
import PizzaList from "./PizzaList";


function Home() {
    return (
        <>
            <TopBar routeName="Home" />
            <CenterContent>
               <PizzaList /> 
            </CenterContent>
        </>
    );
}

export default Home;