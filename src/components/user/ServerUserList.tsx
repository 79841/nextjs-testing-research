import { getAllUsers } from "@/services/user/user";

const ServerUserList = async () => {
  const userList = await getAllUsers();
  return (
    <div>
      {!!userList &&
        userList.map((user) => <li key={user.name}>{user.name}</li>)}
    </div>
  );
};

export default ServerUserList;
