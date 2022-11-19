import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export function ContextProvider({ children }) { 
  const [access, setAccess] = useState(
    JSON.parse(localStorage.getItem("app-connect-access"))
    );
    
  return (
    <Context.Provider value={{ access, setAccess }}>
      {children}
    </Context.Provider>
  );
}
