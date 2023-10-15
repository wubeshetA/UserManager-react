import { useState } from "react";

const Methods = () => {
  const [selectedMethod, setSelectedMethod] = useState("GET");

  const handleSelect = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    // <div className="flex items-center justify-center h-screen bg-gray-200">
    //   <div className="p-6 space-y-8 bg-white rounded shadow-md">
    <div>
        <h3 className="text-2xl font-bold">PlayGround</h3>
        <div className="flex items-center space-x-4">
          <span className="font-medium">Method:</span>
          <select
            value={selectedMethod}
            onChange={handleSelect}
            className="p-2 bg-gray-200 rounded-md"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="UPDATE">UPDATE</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        {selectedMethod === "GET" && <div>GET Component</div>}
        {selectedMethod === "POST" && <div>POST Component</div>}
        {selectedMethod === "UPDATE" && <div>UPDATE Component</div>}
        {selectedMethod === "DELETE" && <div>DELETE Component</div>}
        </div>
  );
};

export default Methods;
