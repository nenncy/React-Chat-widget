'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* .chat-widget {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  width: 320px;\r\n  height: 450px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid #ccc;\r\n  border-radius: 10px;\r\n  padding: 12px;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r\n  background-color: #fff;\r\n  font-family: Arial, sans-serif;\r\n  z-index: 1000;\r\n} */\r\n .chat-toggle-btn {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  background-color: #5c9ded;\r\n  color: white;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  font-size: 24px;\r\n  text-align: center;\r\n  line-height: 50px;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\r\n  z-index: 1001;\r\n}\r\n\r\n.chat-widget {\r\n  position: fixed;\r\n  bottom: 80px; /* to avoid overlapping with the toggle button */\r\n  right: 20px;\r\n  width: 320px;\r\n  height: 450px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid #ccc;\r\n  border-radius: 10px;\r\n  padding: 12px;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r\n  background-color: #fff;\r\n  font-family: Arial, sans-serif;\r\n  z-index: 1000;\r\n}\r\n\r\n/* Your existing .messages, .message, .chat-input styles stay unchanged */\r\n\r\n\r\n.chat-widget h2 {\r\n  margin-top: 0;\r\n  margin-bottom: 10px;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  color: #333;\r\n}\r\n\r\n.messages {\r\n  flex: 1;\r\n  overflow-y: auto;\r\n  border: 1px solid #eee;\r\n  padding: 8px;\r\n  margin-bottom: 10px;\r\n  border-radius: 6px;\r\n  background-color: #f9f9f9;\r\n}\r\n\r\n.message {\r\n  background-color: #e6f0ff;\r\n  padding: 8px 10px;\r\n  margin-bottom: 6px;\r\n  border-radius: 6px;\r\n  font-size: 14px;\r\n  color: #333;\r\n}\r\n\r\n.chat-input {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.chat-input input {\r\n  flex: 1;\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 6px;\r\n  font-size: 14px;\r\n  outline: none;\r\n  transition: border 0.2s ease-in-out;\r\n}\r\n\r\n.chat-input input:focus {\r\n  border-color: #5c9ded;\r\n}\r\n\r\n.chat-input button {\r\n  padding: 8px 14px;\r\n  background-color: #5c9ded;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  transition: background-color 0.2s ease;\r\n}\r\n\r\n.chat-input button:hover {\r\n  background-color: #468ce1;\r\n}\r\n\r\n.chat-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.chat-header h2 {\r\n  margin: 0;\r\n  font-size: 18px;\r\n  color: #333;\r\n}\r\n\r\n.close-btn {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 15px;\r\n  color: #666;\r\n  cursor: pointer;\r\n  transition: color 0.2s ease-in-out;\r\n}\r\n\r\n.close-btn:hover {\r\n  color: #e74c3c; /* red on hover */\r\n}\r\n\r\n\r\n.messages {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  padding: 8px;\r\n  background-color: #f9f9f9;\r\n  border: 1px solid #eee;\r\n  border-radius: 6px;\r\n}\r\n\r\n.message {\r\n  max-width: 70%;\r\n  padding: 8px 12px;\r\n  margin-bottom: 8px;\r\n  border-radius: 12px;\r\n  font-size: 14px;\r\n  line-height: 1.4;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.user-msg {\r\n  background-color: #dcf8c6;\r\n  align-self: flex-end;\r\n  margin-left: auto;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.bot-msg {\r\n  background-color: #f1f0f0;\r\n  align-self: flex-start;\r\n  margin-right: auto;\r\n  border-top-left-radius: 0;\r\n}\r\n";
styleInject(css_248z);

var ChatWidget = function ChatWidget(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Chat' : _ref$title,
    _ref$messages = _ref.messages,
    messages = _ref$messages === void 0 ? [] : _ref$messages,
    onUserMessage = _ref.onUserMessage;
  var _useState = React.useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    input = _useState2[0],
    setInput = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpen = _useState4[0],
    setIsOpen = _useState4[1];
  var sendMessage = function sendMessage(message) {
    if (!message.trim()) return;
    onUserMessage(message);
    setInput('');
  };
  if (typeof onUserMessage !== 'function') {
    console.warn('ChatWidget: Missing required onUserMessage callback.');
    return null;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "chat-toggle-btn",
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "\uD83D\uDCAC"), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "chat-widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat-header"
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, "Close")), /*#__PURE__*/React.createElement("div", {
    className: "messages"
  }, messages.map(function (msg, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "message ".concat(msg.sender === 'user' ? 'user-msg' : 'bot-msg')
    }, /*#__PURE__*/React.createElement("p", null, msg.text));
  })), /*#__PURE__*/React.createElement("div", {
    className: "chat-input"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: input,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    placeholder: "Type your message...",
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && sendMessage(input);
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return sendMessage(input);
    }
  }, "Send"))));
};

exports.default = ChatWidget;
