import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
      <AuthContext.Provider value={[loggedInUser, setLoggedInUser]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
