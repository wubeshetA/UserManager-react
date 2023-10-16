import UsersList from "./UsersList";
import Methods from "./Methods";
import ReqRespSection from "./RequestResponse/ReqResp";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../const";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    const response = await axios.get(`${API_URL}/api/users/`);

    setUsers(response.data);
    // setUsers(response.data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="flex mt-5 flex-col items-center w-full mx-auto bg-white">
      <UsersList users={users} />
      <div className=" w-full flex flex-col items-center">
        <Methods />
        <ReqRespSection fetchUserData={fetchUserData} />
      </div>
    </div>
  );
};

export default Home;
