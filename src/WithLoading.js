import React from "react";

const WithLoading = (Component) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component {...props} />;
    } else {
      return <div>List is Loading.</div>;
    }
  };
};

export default WithLoading;
