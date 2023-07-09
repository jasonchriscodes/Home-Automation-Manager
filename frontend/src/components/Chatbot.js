import React, { Component } from "react";

class Chatbot extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "1eb2e7248fdfb64e5011b7dbf02904c71",
        popupWidget: true,
        voiceInput: true,
        voiceOutput: true,
        language: "en-US",
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  render() {
    return <div>This is Chat bot</div>;
  }
}

export default Chatbot;
