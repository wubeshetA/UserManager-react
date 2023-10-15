import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/users/");
    setUsers(response.data);
  };

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>
          {user.first_name} {user.last_name}
        </td>
        <td>{user.email}</td>
      </tr>
    ));

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="w-full lg:w-4/5">
      <h1 className="text-2xl font-bold text-center my-3">Users List</h1>
      <table className="table-auto w-full border-gray-400 shadow-lg md:gap-x-10">
        <thead>
          <th>ID</th>
          <th>Username</th>
          <th>Full Name</th>
          <th>Email</th>
        </thead>
        <tbody>{displayUsers}</tbody>
      </table>

      <ReactPaginate
        className="flex justify-end my-5"
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={pageCount}
        onPageChange={changePage}
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

export default UsersList;