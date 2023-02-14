import { useState, useEffect } from 'react'
import React from 'react'

const initialState = {
  next: () => {},
  back: () => {}
};
const SwitchContext = React.createContext(initialState);
function SwitchProvider({ children }) {
    let banners = require("../shared/ListOfBanners.json");
    const [index, setIndex] = useState(1);
  useEffect(() => {
    if(index <=0 || index>= banners.length-1) {
      setIndex(1);
    }
  }, [index, banners.length]);
  const back = () => {
    setIndex(index-1)
  };
  const next = () => {
    setIndex(index+1)
  };
  return (
    <SwitchContext.Provider value={{ index, banners, back, next }}>
        {children}
    </SwitchContext.Provider>
  );
}
export { SwitchProvider, SwitchContext };
