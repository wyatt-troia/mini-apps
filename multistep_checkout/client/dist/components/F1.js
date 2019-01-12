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

var F1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(F1, _React$Component);

  function F1(props) {
    var _this;

    _classCallCheck(this, F1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(F1).call(this, props));
    _this.state = {
      name: "",
      email: "",
      password: "",
      formErrors: {
        name: "",
        email: "",
        password: ""
      },
      formIsValid: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.validateForm = _this.validateForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(F1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.purchase_id) {
        axios.get("/purchase", {
          params: {
            purchase_id: this.props.purchase_id
          }
        }).then(function (response) {
          console.log(response.data);

          _this2.setState(response.data);
        });
      }
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
        name: "",
        email: "",
        password: ""
      }; // validate name

      if (this.state.name === "") {
        isValid = false;
        formErrors.name = "Name is required";
      } // validate email


      if (this.state.email === "" || !this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        isValid = false;
        formErrors.email = "A valid email is required";
      } // validate password


      if (this.state.password === "") {
        isValid = false;
        formErrors.password = "Password is required";
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

      return React.createElement("div", null, React.createElement("form", null, React.createElement("div", null, React.createElement("label", null, "Name: "), React.createElement("input", {
        type: "text",
        name: "name",
        id: "name",
        onChange: this.handleChange,
        autoComplete: "name",
        value: this.state.name
      })), React.createElement("div", null, React.createElement("label", null, "Email: "), React.createElement("input", {
        type: "text",
        name: "email",
        id: "email",
        onChange: this.handleChange,
        autoComplete: "email",
        value: this.state.email
      })), React.createElement("div", null, React.createElement("label", null, "Password: "), React.createElement("input", {
        type: "password",
        name: "password",
        id: "password",
        onChange: this.handleChange,
        autoComplete: "new-password",
        value: this.state.password
      })), React.createElement("br", null), React.createElement("div", null, this.state.formIsValid ? React.createElement(Link, {
        to: "/F2",
        onMouseEnter: this.validateForm
      }, React.createElement("button", {
        onClick: function onClick() {
          _this3.props.updatePurchaseRecord({
            name: _this3.state.name,
            email: _this3.state.email,
            password: _this3.state.password,
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

  return F1;
}(React.Component);

window.F1 = F1;