import CenterContent from "../../components/CenterContent";
import TopBar from "../../components/topbar/TopBar";
import { cartContentsAtom } from "../../store";
import PizzaList from "./PIzzaList";
import { useAtom } from "jotai";


function Home() {
    const [cart, setCart] = useAtom(cartContentsAtom);
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