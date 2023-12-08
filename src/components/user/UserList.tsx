"use client";

import { getAllUsers } from "@/services/user/user";
import { TUser } from "@/types/User";
import { useEffect, useState } from "react";

const UserList = () => {
  const [userList, setUserList] = useState<TUser[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const userList = await getAllUsers();
      setUserList(userList);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {!!userList && (
        <ul>
          {userList.map((user) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
