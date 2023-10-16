import UsersList from "./UsersList";
import Methods from "./Methods";
import ReqRespSection from "./RequestResponse/ReqResp";

const Home = () => {
  return (
    <div className="flex h-[350px] mt-5 flex-col items-center w-full mx-auto bg-white">
      <UsersList className="" />
      <div className=" w-full bg-green-600 flex flex-col items-center">
        <Methods />
        <ReqRespSection />
      </div>
    </div>
  );
};

export default Home;