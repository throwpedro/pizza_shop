import CenterContent from "../../components/CenterContent";
import TopBar from "../../components/topbar/TopBar";
import ProductList from "./ProductList";


function Home() {
    return (
        <>
            <TopBar routeName="Home" />
            <CenterContent>
               <ProductList /> 
            </CenterContent>
        </>
    );
}

export default Home;