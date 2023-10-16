import UserForm from "./Request";
import ResponseSection from "./Response";

const ReqRespSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start md:w-4/5 items-center lg:h-full ">
      <div className="m-5 md:w-3/4 lg:h-full flex flex-col border rounded border-blue-500">
        <div className="mb-4 mt-2 w-full flex justify-center text-lg">
          Request
        </div>
        <hr/>
        <div className="h-3/4 flex w-full">
          <UserForm />
        </div>
      </div>

      <div className="m-5 md:w-3/4 lg:h-full flex flex-col border rounded border-blue-500">
        <div className="mb-4 mt-2 w-full flex justify-center text-lg">
          Response
        </div>
        <hr />
        <div className="h-3/4 flex w-full">
          <ResponseSection />
        </div>
      </div>
    </div>
  );
};
export default ReqRespSection;
