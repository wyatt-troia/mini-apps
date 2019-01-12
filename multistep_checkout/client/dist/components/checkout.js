"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var RouteHandler = ReactRouterDOM.RouteHandler;
var Route = ReactRouterDOM.Route;
var Link = ReactRouterDOM.Link;
var Router = ReactRouterDOM.BrowserRouter;
var DefaultRoute = ReactRouterDOM.DefaultRoute;

var Checkout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkout, _React$Component);

  function Checkout(props) {
    var _this;

    _classCallCheck(this, Checkout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkout).call(this, props));
    _this.state = {
      purchase_id: null
    };
    _this.updatePurchaseId = _this.updatePurchaseId.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Checkout, [{
    key: "updatePurchaseId",
    value: function updatePurchaseId(id) {
      this.setState({
        purchase_id: id
      });
    }
  }, {
    key: "updatePurchaseRecord",
    value: function updatePurchaseRecord(data) {
      axios.put("/purchase", data).then(function (response) {
        console.log(response.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(Router, null, React.createElement("div", null, React.createElement("h1", null, "Multi-Step Checkout"), React.createElement(Route, {
        exact: true,
        path: "/",
        render: function render(props) {
          return React.createElement(Home, _extends({}, props, {
            updatePurchaseId: _this2.updatePurchaseId
          }));
        }
      }), React.createElement(Route, {
        path: "/F1",
        render: function render(props) {
          return React.createElement(F1, _extends({}, props, {
            updatePurchaseRecord: _this2.updatePurchaseRecord,
            purchase_id: _this2.state.purchase_id
          }));
        }
      }), React.createElement(Route, {
        path: "/F2",
        render: function render(props) {
          return React.createElement(F2, _extends({}, props, {
            updatePurchaseRecord: _this2.updatePurchaseRecord,
            purchase_id: _this2.state.purchase_id
          }));
        }
      }), React.createElement(Route, {
        path: "/F3",
        render: function render(props) {
          return React.createElement(F3, _extends({}, props, {
            updatePurchaseRecord: _this2.updatePurchaseRecord,
            purchase_id: _this2.state.purchase_id
          }));
        }
      }), React.createElement(Route, {
        path: "/review",
        render: function render(props) {
          return React.createElement(Review, _extends({}, props, {
            purchase_id: _this2.state.purchase_id,
            updatePurchaseId: _this2.updatePurchaseId
          }));
        }
      })));
    }
  }]);

  return Checkout;
}(React.Component);

window.Checkout = Checkout;