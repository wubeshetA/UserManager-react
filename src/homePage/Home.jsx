import UsersList from "./UsersList";
import Methods from "./Methods";
import ReqRespSection from "./RequestResponse/ReqResp";

const Home = () => {
  return (
    <div className="flex flex-col items-center h-full w-full mx-auto bg-white">
      <UsersList className="h-1/3 w-full max-w-2xl" />
      <div className=" w-full bg-green-600 flex flex-col items-center">
        <Methods />
        <ReqRespSection />
      </div>
    </div>
  );
};

export default Home;
