"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Review =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Review, _React$Component);

  function Review(props) {
    var _this;

    _classCallCheck(this, Review);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Review).call(this, props));
    _this.state = {
      name: "",
      email: "",
      password: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      zip_code: "",
      phone: "",
      cc_number: "",
      cc_expiration: "",
      cc_cvv: "",
      billing_zip: ""
    };
    return _this;
  }

  _createClass(Review, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log("review component mounted");
      axios.get("/purchase", {
        params: {
          purchase_id: this.props.purchase_id
        }
      }).then(function (response) {
        console.log(response.data);

        _this2.setState(response.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", null, React.createElement("h2", null, "Review Purchase"), React.createElement("h3", null, "User Information"), React.createElement("p", null, "Name: ", this.state.name), React.createElement("p", null, "Email: ", this.state.email), React.createElement("p", null, "Password: ", this.state.password), React.createElement("h3", null, "Shipping Address"), React.createElement("p", null, "Line 1: ", this.state.address_1), React.createElement("p", null, "Line 2: ", this.state.address_2), React.createElement("p", null, "City: ", this.state.city), React.createElement("p", null, "State: ", this.state.state), React.createElement("p", null, "Zip: ", this.state.zip_code), React.createElement("p", null, "Phone: ", this.state.phone), React.createElement("h3", null, "Credit Card Information"), React.createElement("p", null, "Number: ", this.state.cc_number), React.createElement("p", null, "Expiration: ", this.state.cc_expiration), React.createElement("p", null, "CVV: ", this.state.cc_cvv), React.createElement("p", null, "Billing Zip Code: ", this.state.billing_zip), React.createElement("div", null, React.createElement(Link, {
        to: "/F3"
      }, React.createElement("button", null, "Back")), React.createElement(Link, {
        to: "/"
      }, React.createElement("button", {
        onClick: function onClick() {
          return _this3.props.updatePurchaseId(null);
        }
      }, "Purchase"))));
    }
  }]);

  return Review;
}(React.Component);

window.Review = Review;