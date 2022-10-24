Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "name",
  streamUrl:
    "rtsp://196.75.191.202:555/user=admin_password=6SKNIdTL_channel=1_stream=0.sdp?real_stream",
  wsPort: 9999,
});
