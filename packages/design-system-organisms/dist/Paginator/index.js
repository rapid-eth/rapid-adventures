"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import PaginatorHooked from 'react-hooks-paginator';
var Paginator = props => {
  // const pageLimit = 10;
  // const [offset, setOffset] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  var [data, setData] = (0, _react.useState)([]);
  var [currentData] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (data.length === 0) {
      setData(['data']);
    }
  }, [data.length]); // useEffect(() => {
  //   setCurrentData(data.slice(offset, offset + pageLimit));
  // }, [offset, data]);

  return _react.default.createElement("div", null, _react.default.createElement("ul", null, currentData.map(data => _react.default.createElement("li", null, data))));
};

var _default = Paginator;
exports.default = _default;