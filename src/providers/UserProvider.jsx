import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);
  const contextName = "課長";
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, contextName }}>
      {children}
    </UserContext.Provider>
  );
};
