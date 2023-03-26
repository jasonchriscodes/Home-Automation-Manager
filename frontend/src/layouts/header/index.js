import React from "react";

const index = ({ children }) => {
  return (
    <div className="bg-white h-20 px-4">
      {/* <div>Search field</div> */}
      <div className="max-w-5xl flex-1 mx-auto py-4">{children}</div>
    </div>
  );
};

export default index;
