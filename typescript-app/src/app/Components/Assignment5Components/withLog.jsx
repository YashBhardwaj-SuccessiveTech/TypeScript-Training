"use client";

const { useEffect } = require("react");

const withLog = (WrappedComponent) => (props) => {
  useEffect(() => {
    console.log("component mount");

    return () => console.log("unmount");
  }, []);

  useEffect(() => {
    console.log("updated");
  }, [props]);

  return <WrappedComponent {...props} />;
};
 
export default withLog;