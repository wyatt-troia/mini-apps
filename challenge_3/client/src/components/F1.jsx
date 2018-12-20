class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      formErrors: { name: "", email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formIsValid: false
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
    let formErrors = { name: "", email: "", password: "" };
    // validate name
    if (this.state.name === "") {
      isValid = false;
      formErrors.name = "Name is required";
    }

    // validate email
    if (this.state.email === "") {
      isValid = false;
      formErrors.email = "Email is required";
    }

    // validate password
    if (this.state.password === "") {
      isValid = false;
      formErrors.password = "Password is required";
    }
    this.setState({ formErrors, formIsValid: isValid });
    return isValid;
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              autoComplete="name"
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.handleChange}
              autoComplete="email"
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
              autoComplete="new-password"
            />
          </div>
          <br />
          <div>
            {this.state.formIsValid ? (
              <Link to="/F2">
                <button
                  onClick={() => {
                    this.props.updatePurchaseRecord({
                      name: this.state.name,
                      email: this.state.email,
                      password: this.state.password,
                      purchase_id: this.props.purchase_id
                    });
                  }}
                >
                  Next
                </button>
              </Link>
            ) : (
              <div onMouseEnter={this.validateForm}>
                <button disabled={!this.state.formIsValid}>Next</button>
              </div>
            )}
          </div>
        </form>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
}

window.F1 = F1;
