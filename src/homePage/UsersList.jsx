import { useState } from "react";

import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

const UsersList = (props) => {
  // const dispatch = useDispatch();
  // const [users, setUsers] = useState([]);
  const { users } = props;
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  console.log;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => (
      <tr key={user.id}>
        <td className="border px-4 py-2">{user.id}</td>
        <td className="border px-4 py-2">{user.username}</td>
        <td className="border px-4 py-2">
          {user.first_name} {user.last_name}
        </td>
        <td className="border px-4 py-2">{user.email}</td>
      </tr>
    ));

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex flex-col lg:w-4/5 w-full">
      <div className="flex-grow">
        <h1 className="text-2xl font-bold text-center my-3">Users List</h1>
        <div className="">
          <table className="min-w-full table-auto w-full border border-blue-200">
            <thead>
              <tr className="bg-blue-200">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Full Name</th>
                <th className="border px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>{displayUsers}</tbody>
          </table>
        </div>
      </div>
      <div>
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
        <hr />
      </div>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired, // Assuming "users" is an array
};

export default UsersList;
