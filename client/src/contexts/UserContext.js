import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);

  const getUsersList = async () => {
    const response = await fetch("http://localhost:8000/api/v1/users");
    const data = await response.json();
    setUserList(data);
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
