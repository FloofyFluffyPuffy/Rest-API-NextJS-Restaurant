"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { ContextType } from "../types";
const Context = createContext<ContextType | null>(null);
// one thing about create context it actually need a value to create, so either it the type ContextType or at least null
// (null) mean by default this have no value
export const useContextData = () => {
  // custom hook to get context, custom hook should start with use
  const Context2 = useContext(Context);
  if (!Context2) {
    throw new Error("Context data must be use within provider");
  }
  return Context2;
};
// next is a context provider so we dont need to pass props manually in layout page
export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //react component name like ContextProvider must be capitalized
  const [scroll, setScroll] = useState<number>(0);
  const [sectionHash, setSectionHash] = useState<string>("")
  
  return (
    <Context.Provider
      value={{
        scroll,
        setScroll,
        sectionHash,
        setSectionHash
      }}
    >
      {children}
    </Context.Provider>
    // Context.Provider here is pointing toward the Context at the beginning where we create context
  );
};
