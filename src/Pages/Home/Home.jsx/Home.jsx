import ExtraSection from "../../../Componets/ExtraSection/ExtraSection";

import Salider from "../../Salider/Salider";
import PopularServices from "../PopularServices/PopularServices";


const Home = () => {
    return (
        <div>
            <Salider></Salider>
        <PopularServices></PopularServices>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Home;