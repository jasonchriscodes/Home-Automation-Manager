import React from "react";
import { useParams } from "react-router-dom";

const Analytics = () => {
  const { analyticId } = useParams();
  return <div>Analytics / {analyticId}</div>;
};

export default Analytics;
