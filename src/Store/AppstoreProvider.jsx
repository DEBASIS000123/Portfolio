import React, { createContext, useState } from "react";
export const AppStore = createContext({
  lightmode: false,
  setlightmode: () => {},
});
const AppstoreProvider = ({ children }) => {
  const [lightmode, setlightmode] = useState(false);
  return (
    <AppStore.Provider value={{ lightmode, setlightmode }}>
      {children}
    </AppStore.Provider>
  );
};

export default AppstoreProvider;
