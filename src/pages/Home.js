import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/action/userActions";
import UserCard from "../components/UserCard";
import UserModal from "../components/UserModal";
import styles from "../App.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User List</h1>
      <input
        type='text'
        placeholder='Search by name...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className={styles.userGrid}>
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => setSelectedUser(user)}
          />
        ))}
      </div>
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default Home;
