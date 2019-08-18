import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const usePage = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error('usePage must be used within a PageContext');
  }

  return context;
};

export const PageProvider = props => {
  const [data, setData] = useState({
    panelData: {
      state: 'default',
      colors: ['rebeccapurple', 'tan', '#ccc', '#c03'],
    },
  });

  const setPanelData = panelData => {
    setData({
      ...data,
      panelData,
    });
  };

  const value = {
    data,
    setData,
    setPanelData,
  };

  return <PageContext.Provider value={value} {...props} />;
};
