class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  validateForm() {
    let isValid = true;
    let formErrors = {
      cc_number: "",
      cc_expiration: "",
      cc_cvv: "",
      billing_zip: ""
    };
    // validate cc_number
    if (this.state.cc_number === "") {
      isValid = false;
      formErrors.cc_number = "Credit card number is required";
    }

    // validate cc_expiration
    if (this.state.cc_expiration === "") {
      isValid = false;
      formErrors.cc_expiration = "Credit card expiration date is required";
    }

    // validate cc_cvv
    if (this.state.cc_cvv === "") {
      isValid = false;
      formErrors.cc_cvv = "Credit card CVV is required";
    }

    // validate billing_zip
    if (this.state.billing_zip === "") {
      isValid = false;
      formErrors.billing_zip = "Billing zip code is required";
    }

    this.setState({ formErrors, formIsValid: isValid });
    return isValid;
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <div>
              <label>Credit Card Info:</label>
            </div>
            <div>
              <label>Number: </label>
              <input
                type="text"
                name="cc_number"
                id="cc_number"
                onChange={this.handleChange}
                autoComplete="cc_number"
              />
            </div>
            <div>
              <label>Expiration: </label>
              <input
                type="text"
                name="cc_expiration"
                id="cc_expiration"
                onChange={this.handleChange}
                autoComplete="cc_expiration"
              />
            </div>
            <div>
              <label>CVV: </label>
              <input
                type="text"
                name="cc_cvv"
                id="cc_cvv"
                onChange={this.handleChange}
                autoComplete="cc_cvv"
              />
            </div>
            <br />
            <div>
              <label>Billing Zip Code: </label>
              <input
                type="text"
                name="billing_zip"
                id="billing_zip"
                onChange={this.handleChange}
                autoComplete="billing_zip"
              />
            </div>
          </div>
          <br />
          <div>
            {this.state.formIsValid ? (
              <Link to="/review" onMouseEnter={this.validateForm}>
                <button
                  onClick={() =>
                    this.props.updatePurchaseRecord({
                      cc_number: this.state.cc_number,
                      cc_expiration: this.state.cc_expiration,
                      cc_cvv: this.state.cc_cvv,
                      billing_zip: this.state.billing_zip,
                      purchase_id: this.props.purchase_id
                    })
                  }
                >
                  Review
                </button>
              </Link>
            ) : (
              <span onMouseEnter={this.validateForm}>
                <button disabled={!this.state.formIsValid}>Review</button>
              </span>
            )}
          </div>
        </form>
        <div className="errors">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
}

window.F3 = F3;
