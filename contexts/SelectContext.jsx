'use client';
import { useContext, createContext, useState } from 'react';

const SelectContext = createContext(null);

function SelectProvider({ children }) {
  const [selectVal, setSelectVal] = useState('ramadan');

  const value = { selectVal, setSelectVal };
  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
}

function useSelect() {
  const context = useContext(SelectContext);
  if (!context)
    throw new Error('SelectContext was used outside the SelectProvider');
  return context;
}

export { SelectProvider, useSelect };
