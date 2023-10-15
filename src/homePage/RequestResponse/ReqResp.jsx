import UserForm from "./Request";
import ResponseSection from "./Response";

const ReqRespSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start w-full items-center lg:h-full bg-purple-500">
      <div className="bg-slate-500 m-5 w-full md:w-3/4 lg:h-full flex flex-col items-center">
        <div>Request</div>
        <div className="h-3/4">

            <UserForm/>
        </div>
        <div>submit</div>
      </div>

      <div className="bg-slate-500 m-5 w-full md:w-3/4 lg:h-full flex flex-col items-center">
        <div>Response</div>
        <div className="h-3/4">
            <ResponseSection />
        </div>
      </div>
    </div>
  );
};
export default ReqRespSection;
