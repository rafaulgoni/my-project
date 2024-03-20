import { useLoaderData, useNavigate } from "react-router-dom";


const BabaData = () => {
    const navigate = useNavigate()
    const handleBack= ()=>{
        navigate(-2)
    }
    const about = useLoaderData()
    const {id , name} = about
    return (
        <div>
           <h1>id: {id}</h1> 
           <h1>name: {name}</h1>
           <button className="btn" onClick={handleBack}>go back</button>
        </div>
    );
};

export default BabaData;