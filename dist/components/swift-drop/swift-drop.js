"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = require("react-dropzone");

var _classnames = _interopRequireDefault(require("classnames"));

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _swiftDropStyle = require("./swift-drop-style");

var _reactBootstrap = require("react-bootstrap");

var _swiftButton = _interopRequireDefault(require("../swift-button/swift-button"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//import { _imageCrop } from '../../../ajax/dash/global';
// detail stylesheet - https://github.com/mui-org/material-ui/issues/2130
var SwiftDrop = function SwiftDrop(props) {
  var _props$status, _props$maxSize;

  var _React$useState = _react.default.useState({
    message: props.status === 'success' ? 'File uploaded!' : '',
    type: (_props$status = props.status) !== null && _props$status !== void 0 ? _props$status : 'accept'
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      status = _React$useState2[0],
      setStatus = _React$useState2[1]; //console.log("SD-P", props);


  var files = props.files,
      setFiles = props.setFiles,
      crop = props.crop;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1]; //const [files, setFiles] = React.useState(props.files ?? []);


  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      fileProgress = _useState4[0],
      setFileProgress = _useState4[1]; //console.log("fileProgress", fileProgress);


  (0, _react.useEffect)(function () {
    //console.log('swift-drop.tsx - files changed...', files)
    if (files.length == 0) {
      setStatus({
        message: '',
        type: 'accept'
      });
      setFileProgress(0);
    } else {
      setStatus({
        message: files.length + ' file' + (files.length > 1 ? 's' : '') + ' uploaded.',
        type: 'success'
      });
    } //if (props.onChange) {
    //  props.onChange(files)
    //}

  }, [files]);

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    accept: props.accept,
    onDrop: function onDrop(acceptedFiles) {
      //setFiles(acceptedFiles)
      //for (let i = 0; i < acceptedFiles.length; i++) {
      //const j = i
      //console.log("START UPLOAD", acceptedFiles)
      var formData = new FormData();

      for (var i = 0; i < acceptedFiles.length; i++) {
        formData.append('file[]', acceptedFiles[i]);
      }

      formData.append('path', props.path || null);
      formData.append('output_format', props.output_format || null);
      var xhr = new XMLHttpRequest(); //xhr.self = this;

      //xhr.self = this;
      xhr.upload.onprogress = function (event) {
        var progress = Math.round(+(event.loaded / event.total * 100)); //console.log("file progress", progress)

        //console.log("file progress", progress)
        setFileProgress(progress);
      };

      xhr.open('POST', props.url || '/', true);
      xhr.send(formData);

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
          /*handle error*/
        }

        var res = JSON.parse(xhr.response); //console.log('SWIFTDROP - COMPLETE', JSON.parse(xhr.response))

        //console.log('SWIFTDROP - COMPLETE', JSON.parse(xhr.response))
        setFiles(res.output);

        if (crop && crop.active) {
          //setCropCurrent({ ...cropCurrent, width: res.output[0].width })
          setModal('crop');
        }
      }; //}

    },
    onDropAccepted: function onDropAccepted(files) {
      //console.log('DropZone: files accepted!', files)
      setStatus({
        message: files.length + ' file' + (files.length > 1 ? 's' : '') + ' uploading...',
        type: 'success'
      });
    },
    onDropRejected: function onDropRejected(files) {
      console.log('DropZone: files rejected!', files);
      setStatus({
        message: files.length + ' file' + (files.length > 1 ? 's' : '') + ' rejected.',
        type: 'warning'
      });
    },
    maxSize: (_props$maxSize = props.maxSize) !== null && _props$maxSize !== void 0 ? _props$maxSize : undefined
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;
  /*
   *   Cropping Tool
   */


  var _useState5 = (0, _react.useState)({
    unit: '%',
    x: 0,
    y: 0,
    width: 100,
    aspect: crop.aspect || 1
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      cropCurrent = _useState6[0],
      setCropCurrent = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      cropComplete = _useState8[0],
      setCropComplete = _useState8[1];

  var handleCropComplete = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //console.log('handleCropComplete running', cropComplete)
              try {
                //  SWIFT-FORM PACKAGE SIMPLIFICATION
                //const { data } = await _imageCrop({ ...cropComplete, image: files[0] });
                //console.log('handleCropComplete', data);
                setModal(null);
              } catch (e) {
                console.log('handleCropComplete error', e);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleCropComplete() {
      return _ref.apply(this, arguments);
    };
  }(); //const imgRef = useRef(null)
  //const onCropLoad = useCallback((img) => {
  //  imgRef.current = img
  //}, [])

  /*
  if(status.message) {
      setTimeout(() => {
        setStatus({
      message: "",
      type: "",
    })
      },3000);
    }
    */

  /*files.forEach(function (item, index) {
    if (fileProgress[index]) {
      item['progress'] = fileProgress[index]
    } else {
      item['progress'] = 0
    }
    if (item['progress'] === 100) {
      item.status = 'complete'
    } else {
      item.status = 'uploading'
    }
  })*/
  //console.log('swift-drop.tsx - files', files)
  //console.log('swift-drop.tsx - cropCurrent', cropCurrent)


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      children: props.label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftDropStyle.SwiftDropStyled, {
      is_active: isDragActive,
      is_accept: isDragAccept,
      is_accepted: status.type === 'success',
      is_reject: isDragReject,
      is_rejected: status.type === 'warning',
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
        className: "_swift_drop_box"
      }, getRootProps()), {}, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({}, getInputProps())), files.length ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "_swift_drop_box_actions",
          children: [files[0] && files[0]['url'] && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            target: "_blank",
            href: files[0]['url'],
            onClick: function onClick(e) {
              e.stopPropagation(); //e.preventDefault()
              //window.location.href = files[0]['url']
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                d: "M17 13h6l-11 11-11-11h6v-13h10z"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            onClick: function onClick(e) {
              e.stopPropagation();
              e.preventDefault();
              setFiles([]);
              setFileProgress(0);
              setStatus({
                message: '',
                type: 'accept'
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                d: "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              })
            })
          })]
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "_swift_drop_box_header",
          children: [status.type !== 'success' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z"
            })
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: status.type == 'success' ? 'Uploaded!' : 'Upload Files...'
          }), status.message ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
            children: status.message
          }) : '']
        }), fileProgress && fileProgress > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "_swift_drop_box_progress",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "_swift_drop_box_progress_bar",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "_swift_drop_box_progress_bar_progress",
              style: {
                width: fileProgress + '%'
              }
            })
          })
        }) : null, files.length ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
          className: "_swift_drop_box_list",
          children: [files.slice(0, 3).map(function (file, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              className: (0, _classnames.default)(file.status || 'success'),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "_swift_drop_box_list_item_text",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "_swift_drop_box_list_item_text_title",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "_swift_drop_box_list_item_text_title_content",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      children: file.name
                    })
                  }), file.size ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("small", {
                    children: [(file.size / 1000000).toFixed(2), "MB"]
                  }) : null]
                })
              })
            }, file.name);
          }), files.length > 3 && /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            className: 'success',
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "_swift_drop_box_list_item_text",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "_swift_drop_box_list_item_text_title",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "_swift_drop_box_list_item_text_title_content",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                    children: ["and ", files.length - 3, " more..."]
                  })
                })
              })
            })
          })]
        }) : '']
      }))
    }), files.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal, {
      show: modal == 'crop' && files.length > 0 ? true : false,
      onHide: crop.force ? function () {} : function () {
        return setModal(null);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Header, {
        closeButton: crop.force ? false : true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Title, {
          children: "Crop"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal.Body, {
        style: {
          padding: 0
        },
        children: ["ReactCrop was here... Didn't work with RemixJS because of css imports", /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            padding: '1rem'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftButton.default, {
            icon: "submit",
            onClick: function onClick() {
              return handleCropComplete();
            },
            style: {
              width: '100%'
            },
            children: "Save"
          })
        })]
      })]
    })]
  });
};

SwiftDrop.defaultProps = {
  label: 'Upload files',
  accept: '*',
  maxSize: null,
  type: null,
  format: null,
  crop: {
    active: false,
    aspect: 1,
    force: false
  }
};
var _default = SwiftDrop;
exports.default = _default;