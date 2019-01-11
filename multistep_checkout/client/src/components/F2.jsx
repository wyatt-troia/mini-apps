class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount() {
    axios
      .get("/purchase", {
        params: {
          purchase_id: this.props.purchase_id
        }
      })
      .then(response => {
        console.log(response.data);
        // only update state if fields are not null
        if (response.data.address_1) {
          this.setState(response.data);
        }
      });
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
      address_1: "",
      city: "",
      state: "",
      zip_code: "",
      phone: ""
    };
    // validate address_1
    if (this.state.address_1 === "") {
      isValid = false;
      formErrors.address_1 = "Street address is required";
    }

    // validate city
    if (this.state.city === "") {
      isValid = false;
      formErrors.city = "City is required";
    }

    // validate state
    if (this.state.state === "") {
      isValid = false;
      formErrors.state = "State is required";
    }

    // validate zip_code
    if (this.state.zip_code === "") {
      isValid = false;
      formErrors.zip_code = "Zip code is required";
    }
    // validate phone
    if (this.state.phone === "") {
      isValid = false;
      formErrors.phone = "Phone number is required";
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
              <label>Shipping Address:</label>
            </div>
            <div>
              <label>Line 1: </label>
              <input
                type="text"
                name="address_1"
                id="address_1"
                onChange={this.handleChange}
                autoComplete="address_1"
                value={this.state.address_1}
              />
            </div>
            <div>
              <label>Line 2: </label>
              <input
                type="text"
                name="address_2"
                id="address_2"
                onChange={this.handleChange}
                autoComplete="address_2"
                value={this.state.address_2}
              />
            </div>
            <div>
              <label>City: </label>
              <input
                type="text"
                name="city"
                id="city"
                onChange={this.handleChange}
                autoComplete="city"
                value={this.state.city}
              />
            </div>
            <div>
              <label>State: </label>
              <input
                type="text"
                name="state"
                id="state"
                onChange={this.handleChange}
                autoComplete="state"
                value={this.state.state}
              />
            </div>
            <div>
              <label>Zip Code: </label>
              <input
                type="text"
                name="zip_code"
                id="zip_code"
                onChange={this.handleChange}
                autoComplete="zip_code"
                value={this.state.zip_code}
              />
            </div>
          </div>
          <br />
          <div>
            <label>Phone: </label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={this.handleChange}
              autoComplete="phone"
              value={this.state.phone}
            />
          </div>
          <br />
          <Link to="/F1">
            <button
              onClick={() =>
                this.props.updatePurchaseRecord({
                  address_1: this.state.address_1,
                  address_2: this.state.address_2,
                  city: this.state.city,
                  state: this.state.state,
                  zip_code: this.state.zip_code,
                  phone: this.state.phone,
                  purchase_id: this.props.purchase_id
                })
              }
            >
              Back
            </button>
          </Link>
          <span>
            {this.state.formIsValid ? (
              <Link to="/F3" onMouseEnter={this.validateForm}>
                <button
                  onClick={() =>
                    this.props.updatePurchaseRecord({
                      address_1: this.state.address_1,
                      address_2: this.state.address_2,
                      city: this.state.city,
                      state: this.state.state,
                      zip_code: this.state.zip_code,
                      phone: this.state.phone,
                      purchase_id: this.props.purchase_id
                    })
                  }
                >
                  Next
                </button>
              </Link>
            ) : (
              <span onMouseEnter={this.validateForm}>
                <button disabled={!this.state.formIsValid}>Next</button>
              </span>
            )}
          </span>
        </form>
        <div className="errors">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
}

window.F2 = F2;
