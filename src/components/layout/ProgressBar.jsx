"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#8B0000"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default ProgressProvider;
