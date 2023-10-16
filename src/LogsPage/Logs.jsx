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
      <div key={index} className="flex p-2 border-b border-gray-300">
        <div className={`rounded-full h-6 w-6 mr-4 flex items-center justify-center
          ${log.method === 'GET' ? 'bg-blue-500' :
          log.method === 'POST' ? 'bg-green-500' :
          log.method === 'PUT' ? 'bg-yellow-500' :
          log.method === 'DELETE' ? 'bg-red-500' : 'bg-gray-500'}`}>
          {log.method}
        </div>
        <div className="flex-1">
          <div className="text-gray-800 font-semibold">{log.path}</div>
          <div className="text-gray-600">{log.source}</div>
          <div className="text-gray-600">{log.created_at}</div>
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
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Logs;
