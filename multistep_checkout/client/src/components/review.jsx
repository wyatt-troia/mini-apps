class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentDidMount() {
    console.log("review component mounted");
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

  render() {
    return (
      <div>
        <h2>Review Purchase</h2>
        <h3>User Information</h3>
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>Password: {this.state.password}</p>
        <h3>Shipping Address</h3>
        <p>Line 1: {this.state.address_1}</p>
        <p>Line 2: {this.state.address_2}</p>
        <p>City: {this.state.city}</p>
        <p>State: {this.state.state}</p>
        <p>Zip: {this.state.zip_code}</p>
        <p>Phone: {this.state.phone}</p>
        <h3>Credit Card Information</h3>
        <p>Number: {this.state.cc_number}</p>
        <p>Expiration: {this.state.cc_expiration}</p>
        <p>CVV: {this.state.cc_cvv}</p>
        <p>Billing Zip Code: {this.state.billing_zip}</p>

        <div>
          <Link to="/F3">
            <button>Back</button>
          </Link>
          <Link to="/">
            <button onClick={() => this.props.updatePurchaseId(null)}>
              Purchase
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

window.Review = Review;
