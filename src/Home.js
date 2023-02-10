import { useState } from "react";
import Materials from "./Components/Materials";

const Home = () => {
    const [material, setMaterial] = useState([
    {name: "EGL 101", reviews: 12, materialIn: 20, id: 1},
    {name: "EGL 103", reviews: 2, materialIn: 10, id: 2}

    ])
    return ( 
        <Materials materials={material} title="All materials"/>
     );
}
 
export default Home;