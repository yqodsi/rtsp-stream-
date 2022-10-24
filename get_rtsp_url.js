const onvif = require("node-onvif");

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: "http://192.168.10.17:8899/onvif/device_service",
  user: "admin",
  pass: "6SKNIdTL",
});

// Initialize the OnvifDevice object
device
  .init()
  .then(() => {
    // Get the UDP stream URL
    let url = device.getUdpStreamUrl();
    console.log(url);
  })
  .catch((error) => {
    console.error(error);
  });
