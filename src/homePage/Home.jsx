import UsersList from "./UsersList";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full mx-auto bg-slate-400">
      <UsersList className="h-1/3 w-full max-w-2xl" />
      <div className="h-2/3 w-full bg-green-600">
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Home;
