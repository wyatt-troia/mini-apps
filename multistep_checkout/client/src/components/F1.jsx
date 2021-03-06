class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      formErrors: { name: "", email: "", password: "" },
      formIsValid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount() {
    if (this.props.purchase_id) {
      axios
        .get("/purchase", {
          params: {
            purchase_id: this.props.purchase_id
          }
        })
        .then(response => {
          console.log(response.data);
          this.setState(response.data);
        });
    }
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
    if (
      this.state.email === "" ||
      !this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      isValid = false;
      formErrors.email = "A valid email is required";
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
              value={this.state.name}
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
              value={this.state.email}
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
              value={this.state.password}
            />
          </div>
          <br />
          <div>
            {this.state.formIsValid ? (
              <Link to="/F2" onMouseEnter={this.validateForm}>
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
              <span onMouseEnter={this.validateForm}>
                <button disabled={!this.state.formIsValid}>Next</button>
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

window.F1 = F1;
