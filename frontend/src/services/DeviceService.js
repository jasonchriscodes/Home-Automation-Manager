import axios from "axios";
const DEVICES_API_BASE_URL = "http://localhost:8080/api/v1/devices";

class DeviceService {
  updateDeviceStatus(device, deviceId) {
    return axios.put(DEVICES_API_BASE_URL + "/" + deviceId, device);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new DeviceService();
