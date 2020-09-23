import React from 'react';
import AppComponent from './src/components/AppComponent';

export const wrapRootElement = ({ element }) => {
  return <AppComponent element={element} />;
};
