import { useLoaderData } from "react-router-dom";
import Users from "./Users";


const About = () => {

    const about = useLoaderData()
    return (
        <div className="container mx-auto space-y-10">
            <h1>use:{about.length}</h1>
            <div className="">
            {
                about.map( about =><Users key={about.id} about = {about}></Users>)
            }
            </div>
        </div>
    );
};

export default About;