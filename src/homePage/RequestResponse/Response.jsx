// import { useState } from "react";
// import axios from "axios";
import { useSelector } from "react-redux";
// import {  } from "../../redux/responseSlice"

const ResponseSection = () => {
  const { response } = useSelector((state) => state.responseGetter);

  return (
    <div>
      {response && (
        <div className="response-section mt-4 p-4 border rounded">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ResponseSection;
