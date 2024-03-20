
import { Link } from 'react-router-dom';

const Users = ({ about }) => {
    const {name , email, username, id} = about;
    return (
        <div className='bg-gray-300 rounded-2xl'>
            <h1>name:{name} </h1>
            <h1>name:{email} </h1>
            <h1>username:{username} </h1>
           <Link to={`/baba/${id}`}> <button className='btn'>data</button></Link>
        </div>
    );
};

export default Users;