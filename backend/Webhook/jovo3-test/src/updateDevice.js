const fetch = require("node-fetch");
const dev = process.env.NODE_ENV !== "production";
const server = dev
  ? "http://localhost:8080"
  : "https://your_deployment.server.com";
module.exports.updateDevice = async function updateDevice(device, status) {
  // User Data
  const data = {
    name: device,
    status: status,
  };

  // Awaiting fetch which contains method,
  // headers and content-type and body
  const response = await fetch(`${server}/devices/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // Awaiting response.json()
  const resData = await response.json();

  // Return response data
  return resData;
};
