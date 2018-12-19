class Review extends React.Component {
  constructor(props) {
    super(props);
    this.cc_expiration = {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setcc_expiration({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Review Purchase</h2>
        <h3>User Information</h3>
        <p>Name: {this.props.name}</p>
        <p>Email: {this.props.email}</p>
        <p>Password: {this.props.password}</p>
        <h3>Shipping Address</h3>
        <p>Line 1: {this.props.address_1}</p>
        <p>Line 2: {this.props.address_2}</p>
        <p>City: {this.props.city}</p>
        <p>State: {this.props.state}</p>
        <p>Zip: {this.props.zip}</p>
        <p>Phone: {this.props.phone}</p>
        <h3>Credit Card Information</h3>
        <p>Number: {this.props.cc_number}</p>
        <p>Expiration: {this.props.cc_expiration}</p>
        <p>CVV: {this.props.cc_cvv}</p>
        <p>Billing Zip Code: {this.props.billing_zip}</p>

        <div>
          <Link to="/confirmation">
            <button>Next</button>
          </Link>
        </div>
      </div>
    );
  }
}

window.Review = Review;
