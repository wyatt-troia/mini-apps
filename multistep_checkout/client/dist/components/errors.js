"use strict";

var FormErrors = function FormErrors(_ref) {
  var formErrors = _ref.formErrors;
  return React.createElement("div", {
    className: "formErrors"
  }, Object.keys(formErrors).map(function (fieldName, i) {
    if (formErrors[fieldName].length > 0) {
      return React.createElement("p", {
        key: i
      }, formErrors[fieldName]);
    } else {
      return "";
    }
  }));
};