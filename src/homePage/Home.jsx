import UsersList from "./UsersList";
import Methods from "./Methods";
import ReqRespSection from "./RequestResponse/ReqResp";

const Home = () => {
  return (
    <div className="flex mt-5 flex-col items-center w-full mx-auto bg-white">
      
      <UsersList />
      <div className=" w-full flex flex-col items-center">
        <Methods />
        <ReqRespSection />
      </div>
    </div>
  );
};

export default Home;