import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { setResponse } from "../../redux/responseSlice";
// import dispatch from 'react-redux';


const RequestSection = () => {
    // const [currentMethod, setMethod] = useState('GET');
    // set dispatch
    const { currentMethod } = useSelector((state) => state.methodGetter);
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [userData, setUserData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    // const [response, setResponse] = useState(null);

    const handleSubmit = async () => {
        try {
            let res;
            const url = `http://127.0.0.1:8000/api/users/${id ? id + '/' : ''}`;

            switch (currentMethod) {
                case 'GET':
                    res = await axios.get(url);
                    break;
                case 'POST':
                    res = await axios.post(url, userData);
                    break;
                case 'PUT':
                    res = await axios.put(url, userData);
                    break;
                case 'DELETE':
                    if (window.confirm('Are you sure you want to delete this user?')) {
                        res = await axios.delete(url);
                        
                    }
                    break;
                default:
                    break;
            }

            // setResponse(res.data);
            dispatch(setResponse(res.data));
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    return (
        <div className="request-section w-[400px] h-[450px] p-4 relative flex flex-col">
            {currentMethod === 'GET' && (
                <div className="mb-4">
                    <label className="mr-2">User ID:</label>
                    <input type="text" onChange={(e) => setId(e.target.value)} className="p-2 border rounded" />
                </div>
            )}

            {(currentMethod === 'POST' || currentMethod === 'PUT') && (
                <>
                    {currentMethod === 'PUT' && (
                        <div className="mb-4">
                            <label className="mr-2">User ID:</label>
                            <input type="text" onChange={(e) => setId(e.target.value)} className="p-2 border rounded focus:border-blue-500" />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="mr-2">Username:</label>
                        <input 
                            type="text" 
                            onChange={(e) => setUserData(prev => ({ ...prev, username: e.target.value }))} 
                            className="p-2 border rounded" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mr-2">First Name:</label>
                        <input 
                            type="text" 
                            onChange={(e) => setUserData(prev => ({ ...prev, first_name: e.target.value }))} 
                            className="p-2 border rounded" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mr-2">Last Name:</label>
                        <input 
                            type="text" 
                            onChange={(e) => setUserData(prev => ({ ...prev, last_name: e.target.value }))} 
                            className="p-2 border rounded" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mr-2">Email:</label>
                        <input 
                            type="email" 
                            onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))} 
                            className="p-2 border rounded" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mr-2">Password:</label>
                        <input 
                            type="password" 
                            onChange={(e) => setUserData(prev => ({ ...prev, password: e.target.value }))} 
                            className="p-2 border rounded" 
                        />
                    </div>
                </>
            )}

            {currentMethod === 'DELETE' && (
                <div className="mb-4">
                    <label className="mr-2">User ID:</label>
                    <input type="text" onChange={(e) => setId(e.target.value)} className="p-2 border rounded" />
                </div>
            )}

<div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </div>

        </div>
    );
};

export default RequestSection;
