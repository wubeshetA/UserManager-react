// import { useState } from "react";
// import axios from "axios";
import { useSelector } from "react-redux";
// import {  } from "../../redux/responseSlice"

const ResponseSection = () => {
  const { response } = useSelector((state) => state.responseGetter);

  return (
    <div className="w-[400px] h-[450px] p-4 relative flex flex-col">
      {response && (
        <div className="response-section  ">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ResponseSection;
