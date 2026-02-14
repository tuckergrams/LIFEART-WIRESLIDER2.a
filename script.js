let ws = new WebSocket("wss://life-server-art.onrender.com:443");

window.onload = function () {
  if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
    document.body.addEventListener("touchstart", function () {}, true);
  }
};
let Scrub = document.querySelector(".controlScrub");
Scrub.addEventListener("input", (event) => {
  ws.send(JSON.stringify({ scrubvalue2: Scrub.value / 100 }));
});

let Speed = document.querySelector(".controlSpeed");
Speed.addEventListener("input", (event) => {
  ws.send(JSON.stringify({ trimspeed2: Speed.value / 100 }));
});
let Loop = document.querySelector(".controlLoop");
Loop.addEventListener("input", (event) => {
  ws.send(JSON.stringify({ loopvalue2: Loop.value / 100 }));
});
let V1 = document.querySelector(".B1");
V1.addEventListener("touchstart", (event) => {
  ws.send(JSON.stringify({ vid1_2: 1 }));
});
V1.addEventListener("touchend", (event) => {
  ws.send(JSON.stringify({ vid1_2: 0 }));
});

let V2 = document.querySelector(".B2");
V2.addEventListener("touchstart", (event) => {
  ws.send(JSON.stringify({ vid2_2: 2 }));
});
V2.addEventListener("touchend", (event) => {
  ws.send(JSON.stringify({ vid2_2: 0 }));
});

let V3 = document.querySelector(".B3");
V3.addEventListener("touchstart", (event) => {
  ws.send(JSON.stringify({ vid3_2: 3 }));
});
V3.addEventListener("touchend", (event) => {
  ws.send(JSON.stringify({ vid3_2: 0 }));
});

let V4 = document.querySelector(".B4");
V4.addEventListener("touchstart", (event) => {
  ws.send(JSON.stringify({ vid4_2: 4 }));
});
V4.addEventListener("touchend", (event) => {
  ws.send(JSON.stringify({ vid4_2: 0 }));
});

ws.addEventListener("open", (event) => {
  console.log("websocket opened");
});

ws.addEventListener("message", (message) => {
  if (message.data == "ping") {
    ws.send("pong");
    return;
  }
});

ws.addEventListener("error", (error) => {
  console.error("websocket closed");
});

ws.addEventListener("close", (event) => {
  console.log("websocket closed");
});

const removeWatermark = () => {
  const ids = [];
  const iframes = document.body.querySelectorAll("iframe");
  for (const iframe of iframes) {
    if (iframe.id.startsWith("sb__open-sandbox")) ids.push(iframe.id);
  }
  for (const id of ids) {
    const node = document.createElement("div");
    node.style.setProperty("display", "none", "important");
    node.id = id;
    document.getElementById(id).remove();
    document.body.appendChild(node);
  }
};

setTimeout(removeWatermark, 1000);
