"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var icons = {
  back: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    style: {
      transform: "rotate(-180deg)"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
    })
  }),
  next: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
    })
  }),
  check: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"
    })
  }),
  card_default: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 750 471",
    preserveAspectRatio: "xMidYMid meet",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
      id: "Page-1",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        id: "amex",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M711 40v391H41V40h670m0-40H41A40 40 0 001 40v391a40 40 0 0040 40h670a40 40 0 0040-40V40a40 40 0 00-40-40z",
          transform: "translate(-1)",
          id: "Rectangle-1"
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M11 113h728v101H11zm34 241h93v33H45zm127 0h156v33H172z"
    })]
  }),
  card_visa: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    viewBox: "0 0 750 471",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
        fill: "#0E4595",
        width: "750",
        height: "471",
        rx: "40"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M278 334l34-196h53l-33 196h-54zm246-191c-10-4-27-9-48-9-52 0-89 27-90 65 0 28 27 44 47 53 21 10 28 16 28 25 0 13-17 19-32 19-22 0-33-3-50-11l-7-3-8 44c13 6 36 10 60 11 56 0 92-27 93-67 0-23-14-40-45-54-19-9-30-15-30-24 0-8 9-17 30-17 18 0 30 4 40 8l5 2 7-42m138-5h-42c-12 0-22 4-28 17l-79 179h56l11-29h69l6 29h50l-43-196zm-66 127l21-55 8-19 3 17 12 57h-44zM233 138l-52 134-6-27c-10-31-40-65-74-82l48 171h56l84-196h-56",
        fill: "#FFF"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M132 138H46l-1 5c67 16 111 55 130 102l-19-90c-3-12-12-16-24-17",
        fill: "#F2AE14"
      })]
    })
  }),
  card_mastercard: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    viewBox: "0 0 750 471",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
        fill: "#F4F4F4",
        width: "750",
        height: "471",
        rx: "40"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M619 422l-3 1a4 4 0 000 6 4 4 0 006 0 4 4 0 000-6l-3-1zm0 7a3 3 0 110-6 3 3 0 010 6zm0-5h-2v4h1v-1l1 1h1l-1-1 1-1v-1l-1-1zm0 1l1 1h-2v-1h1zm-459 3h-9v-41h9v5s8-6 12-6c9 0 14 7 14 7s4-7 14-7c14 0 16 13 16 13v29h-9v-26s0-8-9-8-10 8-10 8v26h-9v-26s-1-8-8-8c-11 0-11 8-11 8v26zm266-42c-4 0-12 6-12 6v-5h-8v41h9l-1-26s1-8 11-8l4 1 3-8-6-1zm124 0c-5 0-12 6-12 6v-5h-9v41h9v-26s0-8 10-8l5 1 3-8-6-1zm-306 0c-13 0-20 11-20 21s8 22 21 22c7 0 13-5 13-5v4h8v-41h-8v5s-6-6-14-6zm2 8c7 0 13 6 13 14 0 7-6 13-13 13s-13-6-13-13c0-8 6-14 13-14zm249-8c-13 0-20 11-20 21s8 22 21 22c7 0 13-5 13-5v4h9v-41h-9v5s-6-6-14-6zm2 8c7 0 13 6 13 14 0 7-6 13-13 13s-13-6-13-13c0-8 6-14 13-14zm81-8c-13 0-20 11-20 21s8 22 21 22c7 0 13-5 13-5v4h9v-57h-9v21s-6-6-14-6zm2 8c7 0 13 6 13 14 0 7-6 13-13 13s-13-6-13-13c0-8 6-14 13-14zm-287 35c-9 0-17-5-17-5l3-6s8 3 14 3c3 0 9-1 10-4 0-4-11-5-11-5s-15-1-15-13c0-8 8-13 17-13 6 0 17 5 17 5l-5 6-12-3c-4 0-8 2-8 5 0 8 25-1 25 17 0 11-10 13-18 13zm33-54v12h-8v9h8v20s-1 14 14 14l12-3-3-9s-4 3-7 3c-7-1-7-5-7-5v-20h14v-9h-14v-12h-9zm52 11c-15 0-22 12-21 22 0 10 6 22 21 22 7 0 16-6 16-6l-4-7s-6 5-12 5c-11 0-12-11-12-11h30s3-25-18-25zm-2 8h1c11 0 11 10 11 10h-22s0-9 10-10zm90 23l4 8s-6 4-13 4c-15 0-23-11-23-22 0-16 13-21 22-21 8 0 15 5 15 5l-5 8s-2-5-10-5-13 7-13 14 5 13 13 13c5 0 10-4 10-4z",
        fill: "#000"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M625 279v-6h-2l-2 4-1-4h-2v6h1v-5l2 4h1l1-4v5h2zm-10 0v-5h2v-1h-4v1h1v5h1z",
        fill: "#F79F1A"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M625 197a154 154 0 11-309 0 154 154 0 01309 0z",
        fill: "#F79F1A"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M434 197a154 154 0 11-309 0 154 154 0 01309 0z",
        fill: "#EA001B"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M375 75a155 155 0 000 243 155 155 0 000-243z",
        fill: "#FF5F01"
      })]
    })
  }),
  card_american_express: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    viewBox: "0 0 752 471",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
        fill: "#2557D6",
        x: "1",
        width: "750",
        height: "471",
        rx: "40"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M1 221h36l8-19h18l8 19h71v-15l7 15h36l7-15v15h176v-32h3c3 0 3 0 3 4v28h91v-7c8 4 19 7 34 7h39l8-19h18l8 19h74v-18l11 18h59V99h-58v14l-9-14h-60v14l-7-14h-81c-14 0-26 2-36 7v-7h-56v7c-6-6-14-7-23-7H181l-14 31-14-31H89v14l-7-14H27L1 157v64zm227-17h-21v-69l-31 69h-18l-31-69v69H84l-8-20H32l-8 20H1l38-88h31l36 83v-83h34l28 59 25-59h35v88zM69 166l-15-35-14 35h29zm245 38h-70v-88h70v18h-49v16h48v18h-48v17h49v19zm100-65c0 14-10 22-15 24 4 1 8 5 10 7 3 5 4 8 4 16v18h-22v-12c0-5 1-12-3-17-3-3-8-3-15-3h-23v32h-21v-88h48c11 0 19 0 26 4s11 10 11 19zm-27 13c-3 2-6 2-10 2h-26v-19h26l10 1c3 2 4 4 4 8s-1 7-4 8zm60 52h-21v-88h21v88zm250 0h-30l-40-66v66h-43l-8-20h-44l-8 20h-24c-10 0-23-3-31-10-7-8-11-18-11-34 0-13 2-25 11-34 7-7 18-10 32-10h21v18h-20c-8 0-12 2-16 6-4 3-6 10-6 20 0 9 1 16 5 20s9 5 15 5h9l30-69h32l35 83v-83h33l37 61v-61h21v88zm-128-38l-15-35-14 35h29zm182 178c-5 7-15 11-29 11h-40v-19h40c4 0 7 0 9-2l2-6-2-6-8-1c-20-1-44 0-44-28 0-12 8-26 30-26h42v-17h-39c-12 0-20 2-26 7v-7h-58c-9 0-20 2-25 7v-7H500v7c-9-6-22-7-29-7h-68v7c-6-6-21-7-30-7h-76l-17 18-16-18H150v122h112l17-19 17 19h69v-29h7c9 1 20 0 29-4v33h57v-32h3c3 0 3 0 3 4v28h173c11 0 22-3 28-8v8h55c11 0 23-1 31-5v-23zm-342-47c0 24-18 29-36 29h-27v30h-41l-26-30-26 30h-84v-88h85l26 28 27-28h67c17 0 35 4 35 29zm-167 40h-52v-17h46v-18h-46v-16h53l23 25-24 26zm83 10l-32-36 32-34v70zm48-39h-27v-22h27c8 0 13 3 13 10 0 8-5 12-13 12zm143-40h70v18h-49v16h48v18h-48v17h49v19h-70v-88zm-27 47c5 1 8 5 10 7 3 4 4 8 4 16v18h-21v-11c0-6 0-14-4-18-3-3-8-4-15-4h-23v33h-21v-88h49c10 0 18 0 25 4s11 9 11 19c0 14-10 22-15 24zm-12-11l-10 1h-26v-19h26l10 1c3 2 4 4 4 8s-1 7-4 9zm190 5c4 4 7 10 7 19 0 19-12 28-33 28h-42v-19h41l9-2 2-6-2-6-8-2c-19-1-44 1-44-27 0-13 8-26 30-26h42v18h-38l-9 2c-2 1-3 3-3 6 0 4 2 6 5 7l8 1h11c12 0 20 2 24 7zm84-23h-38l-9 1c-2 2-3 4-3 7s2 5 5 6l8 1h11c12 1 19 3 24 7l2 3v-25z",
        fill: "#FFF"
      })]
    })
  }),
  card_discover: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    viewBox: "0 0 780 501",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M55 0C25 0 0 25 0 55v391c0 30 25 55 55 55h670c30 0 55-25 55-55V55c0-30-25-55-55-55H55z",
        fill: "#4D4D4D"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M415 161c31 0 56 24 56 53s-25 53-56 53-56-24-56-53 25-53 56-53zm-88 1c9 0 16 2 25 6v23c-8-8-16-11-25-11-20 0-35 15-35 34 0 20 15 34 36 34 9 0 16-3 24-11v23c-9 4-16 6-25 6-32 0-56-23-56-52s25-52 56-52zm-97 1c12 0 22 3 31 11l-11 13c-5-6-10-8-16-8-9 0-16 4-16 11 0 5 4 8 16 12 24 8 31 15 31 31 0 19-15 33-37 33-15 0-27-6-36-19l13-12c5 8 13 13 23 13 9 0 15-6 15-14 0-4-2-8-6-10l-14-6c-19-6-26-13-26-27 0-16 14-28 33-28zm235 1h22l28 67 29-67h22l-45 102h-12l-44-102zm-398 0h31c33 0 56 21 56 50 0 15-7 29-19 38-10 8-22 12-38 12H67V164zm97 0h20v100h-20V164zm411 0h59v17h-38v22h36v17h-36v27h38v17h-59V164zm72 0h31c23 0 37 11 37 30 0 15-9 25-24 28l33 42h-25l-29-40h-2v40h-21V164zm21 16v30h6c13 0 20-5 20-15s-7-15-20-15h-6zm-580 1v66h5c14 0 22-3 29-8a34 34 0 000-50c-7-6-15-8-29-8h-5z",
        fill: "#FFF"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M780 288c-26 19-221 150-559 213h504c30 0 55-25 55-55V288z",
        fill: "#F47216"
      })]
    })
  }),
  card_jcb: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    viewBox: "0 0 750 471",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("defs", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("linearGradient", {
        x1: "0%",
        y1: "50%",
        x2: "100%",
        y2: "50%",
        id: "a",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
          "stop-color": "#007B40",
          offset: "0%"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
          "stop-color": "#55B330",
          offset: "100%"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("linearGradient", {
        x1: "0%",
        y1: "50%",
        x2: "100%",
        y2: "50%",
        id: "b",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
          "stop-color": "#1D2970",
          offset: "0%"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
          "stop-color": "#006DBA",
          offset: "100%"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("linearGradient", {
        x1: "0%",
        y1: "50%",
        x2: "100%",
        y2: "50%",
        id: "c",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
          "stop-color": "#6E2B2F",
          offset: "0%"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
          "stop-color": "#E30138",
          offset: "100%"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
        fill: "#0E4C96",
        width: "750",
        height: "471",
        rx: "40"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M617 347c0 41-33 75-75 75H133V124c0-41 33-75 75-75h409v298z",
        fill: "#FFF"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M484 242h35c12 3 15 20 4 26-7 4-16 2-23 2h-16v-28zm42-32c2 9-7 17-15 16h-27v-26h32c5 1 9 5 10 10zm64-136v272c0 27-24 50-51 51h-81V287h88c14-1 29-10 29-25 2-15-12-25-26-27-5 0-5-2 0-2 13-3 23-16 19-30-3-14-18-19-31-19h-79v-62c2-26 27-48 53-48h79z",
        fill: "url(#a)"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M160 125c0-27 25-51 52-51h80v273c-1 26-25 49-51 50h-81V284c26 6 53 8 80 4 16-2 34-10 39-27 4-14 2-29 2-43v-34h-46v67c-2 14-15 22-28 22-16 0-48-12-48-12l1-136z",
        fill: "url(#b)"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M310 197c-3 1-1-8-1-11v-64c2-27 27-49 54-48h78v273c-1 26-25 49-51 50h-81V273c18 15 43 17 66 17 17 0 35-2 51-6v-23c-19 9-41 15-62 10-14-4-25-18-25-33-2-16 8-32 23-37 19-6 40-2 58 6 4 2 8 5 6-2v-18c-30-7-62-9-92-2-9 3-17 7-24 12z",
        fill: "url(#c)"
      })]
    })]
  }),
  card_diners_club: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    viewBox: "0 0 750 471",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
        fill: "#0079BE",
        width: "750",
        height: "471",
        rx: "40"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M585 238c0-99-83-168-174-168h-78a167 167 0 100 333h78c91 1 174-74 174-165z",
        fill: "#FFF"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M333 84a152 152 0 101 305 152 152 0 00-1-305z",
        fill: "#0079BE"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M237 236c0-41 26-76 62-90v180a97 97 0 01-62-90zm131 90V146a97 97 0 010 180z",
        fill: "#FFF"
      })]
    })
  })
};

var SwiftIconStyled = _styledComponents.default.i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  svg {\n    ", "\n  }\n"])), function (props) {
  return props.color && props.color == 'primary' ? "fill:".concat(props.theme.color_primary, ";") : props.color ? "fill:".concat(props.color, ";") : "";
});

var SwiftIcon = function SwiftIcon(props) {
  var i = props.i,
      className = props.className,
      color = props.color;
  if (!i) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
  if (Object.keys(icons).includes(i)) return /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftIconStyled, {
    className: className,
    color: color,
    children: icons[i]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
};

SwiftIcon.defaultProps = {
  className: null,
  color: null
};
var _default = SwiftIcon;
exports.default = _default;