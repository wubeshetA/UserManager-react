// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMethod } from "../redux/formDataSlice";

const Methods = () => {
  // const [selectedMethod, setSelectedMethod] = useState("GET");
  const { currentMethod } = useSelector((state) => state.methodGetter);
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    // setSelectedMethod(e.target.value);
    dispatch(setMethod(e.target.value));
  };

  return (
    // <div className="flex items-center justify-center h-screen bg-gray-200">
    //   <div className="p-6 space-y-8 bg-white rounded shadow-md">
    <div className="mb-5">
      <h3 className="text-xl font-bold mb-5 mt-4">Request Playground</h3>
      <div className="flex items-center space-x-4">
        <span className="font-medium">Method:</span>
        <select
          value={currentMethod}
          onChange={handleSelect}
          className="p-2 w-full bg-gray-200 rounded-md"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
     
    </div>
  );
};

export default Methods;
