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

var F2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(F2, _React$Component);

  function F2(props) {
    var _this;

    _classCallCheck(this, F2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(F2).call(this, props));
    _this.state = {
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      zip_code: "",
      phone: "",
      formErrors: {
        address_1: "",
        city: "",
        state: "",
        zip_code: "",
        phone: ""
      },
      formIsValid: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.validateForm = _this.validateForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(F2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios.get("/purchase", {
        params: {
          purchase_id: this.props.purchase_id
        }
      }).then(function (response) {
        console.log(response.data); // only update state if fields are not null

        if (response.data.address_1) {
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
        address_1: "",
        city: "",
        state: "",
        zip_code: "",
        phone: ""
      }; // validate address_1

      if (this.state.address_1 === "") {
        isValid = false;
        formErrors.address_1 = "Street address is required";
      } // validate city


      if (this.state.city === "") {
        isValid = false;
        formErrors.city = "City is required";
      } // validate state


      if (this.state.state === "") {
        isValid = false;
        formErrors.state = "State is required";
      } // validate zip_code


      if (this.state.zip_code === "") {
        isValid = false;
        formErrors.zip_code = "Zip code is required";
      } // validate phone


      if (this.state.phone === "") {
        isValid = false;
        formErrors.phone = "Phone number is required";
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

      return React.createElement("div", null, React.createElement("form", null, React.createElement("div", null, React.createElement("div", null, React.createElement("label", null, "Shipping Address:")), React.createElement("div", null, React.createElement("label", null, "Line 1: "), React.createElement("input", {
        type: "text",
        name: "address_1",
        id: "address_1",
        onChange: this.handleChange,
        autoComplete: "address_1",
        value: this.state.address_1
      })), React.createElement("div", null, React.createElement("label", null, "Line 2: "), React.createElement("input", {
        type: "text",
        name: "address_2",
        id: "address_2",
        onChange: this.handleChange,
        autoComplete: "address_2",
        value: this.state.address_2
      })), React.createElement("div", null, React.createElement("label", null, "City: "), React.createElement("input", {
        type: "text",
        name: "city",
        id: "city",
        onChange: this.handleChange,
        autoComplete: "city",
        value: this.state.city
      })), React.createElement("div", null, React.createElement("label", null, "State: "), React.createElement("input", {
        type: "text",
        name: "state",
        id: "state",
        onChange: this.handleChange,
        autoComplete: "state",
        value: this.state.state
      })), React.createElement("div", null, React.createElement("label", null, "Zip Code: "), React.createElement("input", {
        type: "text",
        name: "zip_code",
        id: "zip_code",
        onChange: this.handleChange,
        autoComplete: "zip_code",
        value: this.state.zip_code
      }))), React.createElement("br", null), React.createElement("div", null, React.createElement("label", null, "Phone: "), React.createElement("input", {
        type: "text",
        name: "phone",
        id: "phone",
        onChange: this.handleChange,
        autoComplete: "phone",
        value: this.state.phone
      })), React.createElement("br", null), React.createElement(Link, {
        to: "/F1"
      }, React.createElement("button", {
        onClick: function onClick() {
          return _this3.props.updatePurchaseRecord({
            address_1: _this3.state.address_1,
            address_2: _this3.state.address_2,
            city: _this3.state.city,
            state: _this3.state.state,
            zip_code: _this3.state.zip_code,
            phone: _this3.state.phone,
            purchase_id: _this3.props.purchase_id
          });
        }
      }, "Back")), React.createElement("span", null, this.state.formIsValid ? React.createElement(Link, {
        to: "/F3",
        onMouseEnter: this.validateForm
      }, React.createElement("button", {
        onClick: function onClick() {
          return _this3.props.updatePurchaseRecord({
            address_1: _this3.state.address_1,
            address_2: _this3.state.address_2,
            city: _this3.state.city,
            state: _this3.state.state,
            zip_code: _this3.state.zip_code,
            phone: _this3.state.phone,
            purchase_id: _this3.props.purchase_id
          });
        }
      }, "Next")) : React.createElement("span", {
        onMouseEnter: this.validateForm
      }, React.createElement("button", {
        disabled: !this.state.formIsValid
      }, "Next")))), React.createElement("div", {
        className: "errors"
      }, React.createElement(FormErrors, {
        formErrors: this.state.formErrors
      })));
    }
  }]);

  return F2;
}(React.Component);

window.F2 = F2;