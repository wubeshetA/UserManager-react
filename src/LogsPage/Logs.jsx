import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const logsPerPage = 10; // Number of logs per page

  useEffect(() => {
    // Fetch logs data from the API
    axios.get('http://127.0.0.1:8000/api/logs/')
      .then((response) => {
        setLogs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching logs:', error);
      });
  }, []);

  const displayLogs = logs
    .slice(pageNumber * logsPerPage, (pageNumber + 1) * logsPerPage)
    .map((log, index) => (
      <div key={index} className="flex p-2 border-b lg:w-3/4 border-gray-300">
        <div className={`rounded px-2 mr-4 flex items-center justify-center
          ${log.method === 'GET' ? 'bg-blue-500 text-white' :
          log.method === 'POST' ? 'bg-green-500 text-white' :
          log.method === 'PUT' ? 'bg-yellow-200 text-black' :
          log.method === 'DELETE' ? 'bg-red-600 text-white' : 'bg-gray-500'}`}>
          {log.method}
        </div>
        <div className="flex-1">
          <div className='flex flex-wrap justify-between'>

          <div className="text-gray-700 font-semibold">Requested path: {log.path}</div>
          <div className="text-gray-600">Origin: {log.source}</div>
          </div>
          <div className="text-gray-600">Date: {log.created_at}</div>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(logs.length / logsPerPage);

  const handlePageChange = (data) => {
    setPageNumber(data.selected);
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Request Logs</h1>
      {displayLogs}
      <ReactPaginate
        className="flex justify-end my-5"
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination flex justify-center space-x-2 my-4"}
        pageLinkClassName={
          "paginationLink border px-3 hover:bg-blue-200 rounded"
        }
        previousLinkClassName={
          "previousButton border px-3 hover:bg-blue-200 rounded"
        }
        nextLinkClassName={"nextButton border px-3 hover:bg-blue-100 rounded"}
        disabledClassName={"paginationDisabled opacity-50 cursor-not-allowed"}
        activeClassName={"paginationActive bg-blue-500 text-white"}
      />
    </div>
  );
};

export default Logs;
