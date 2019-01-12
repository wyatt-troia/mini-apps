"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var F3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(F3, _React$Component);

  function F3(props) {
    var _this;

    _classCallCheck(this, F3);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(F3).call(this, props));
    _this.state = {
      cc_number: "",
      cc_expiration: "",
      cc_cvv: "",
      billing_zip: "",
      formErrors: {
        cc_number: "",
        cc_expiration: "",
        cc_cvv: "",
        billing_zip: ""
      }
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.validateForm = _this.validateForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(F3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios.get("/purchase", {
        params: {
          purchase_id: this.props.purchase_id
        }
      }).then(function (response) {
        console.log(response.data); // only update state if fields are not null

        if (response.data.cc_number) {
          if (response.data.cc_number === 0) {
            response.data.cc_number = "";
          }

          if (response.data.cc_cvv === 0) {
            response.data.cc_cvv = "";
          }

          _this2.setState(response.data);
        }
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var target = event.target;
      this.setState(_defineProperty({}, target.name, target.value));
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var isValid = true;
      var formErrors = {
        cc_number: "",
        cc_expiration: "",
        cc_cvv: "",
        billing_zip: ""
      }; // validate cc_number

      if (this.state.cc_number === "") {
        isValid = false;
        formErrors.cc_number = "Credit card number is required";
      } // validate cc_expiration


      if (this.state.cc_expiration === "") {
        isValid = false;
        formErrors.cc_expiration = "Credit card expiration date is required";
      } // validate cc_cvv


      if (this.state.cc_cvv === "") {
        isValid = false;
        formErrors.cc_cvv = "Credit card CVV is required";
      } // validate billing_zip


      if (this.state.billing_zip === "") {
        isValid = false;
        formErrors.billing_zip = "Billing zip code is required";
      }

      this.setState({
        formErrors: formErrors,
        formIsValid: isValid
      });
      return isValid;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", null, React.createElement("form", null, React.createElement("div", null, React.createElement("div", null, React.createElement("label", null, "Credit Card Info:")), React.createElement("div", null, React.createElement("label", null, "Number: "), React.createElement("input", {
        type: "text",
        name: "cc_number",
        id: "cc_number",
        onChange: this.handleChange,
        autoComplete: "cc_number",
        value: this.state.cc_number
      })), React.createElement("div", null, React.createElement("label", null, "Expiration: "), React.createElement("input", {
        type: "text",
        name: "cc_expiration",
        id: "cc_expiration",
        onChange: this.handleChange,
        autoComplete: "cc_expiration",
        value: this.state.cc_expiration
      })), React.createElement("div", null, React.createElement("label", null, "CVV: "), React.createElement("input", {
        type: "text",
        name: "cc_cvv",
        id: "cc_cvv",
        onChange: this.handleChange,
        autoComplete: "cc_cvv",
        value: this.state.cc_cvv
      })), React.createElement("br", null), React.createElement("div", null, React.createElement("label", null, "Billing Zip Code: "), React.createElement("input", {
        type: "text",
        name: "billing_zip",
        id: "billing_zip",
        onChange: this.handleChange,
        autoComplete: "billing_zip",
        value: this.state.billing_zip
      }))), React.createElement("br", null), React.createElement(Link, {
        to: "/F2"
      }, React.createElement("button", {
        onClick: function onClick() {
          return _this3.props.updatePurchaseRecord({
            cc_number: _this3.state.cc_number,
            cc_expiration: _this3.state.cc_expiration,
            cc_cvv: _this3.state.cc_cvv,
            billing_zip: _this3.state.billing_zip,
            purchase_id: _this3.props.purchase_id
          });
        }
      }, "Back")), React.createElement("span", null, this.state.formIsValid ? React.createElement(Link, {
        to: "/review",
        onMouseEnter: this.validateForm
      }, React.createElement("button", {
        onClick: function onClick() {
          return _this3.props.updatePurchaseRecord({
            cc_number: _this3.state.cc_number,
            cc_expiration: _this3.state.cc_expiration,
            cc_cvv: _this3.state.cc_cvv,
            billing_zip: _this3.state.billing_zip,
            purchase_id: _this3.props.purchase_id
          });
        }
      }, "Review")) : React.createElement("span", {
        onMouseEnter: this.validateForm
      }, React.createElement("button", {
        disabled: !this.state.formIsValid
      }, "Review")))), React.createElement("div", {
        className: "errors"
      }, React.createElement(FormErrors, {
        formErrors: this.state.formErrors
      })));
    }
  }]);

  return F3;
}(React.Component);

window.F3 = F3;