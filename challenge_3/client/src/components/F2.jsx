class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      zip_code: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
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
            />
          </div>
          <br />
          <div>
            <Link to="/F3">
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
          </div>
        </form>
      </div>
    );
  }
}

window.F2 = F2;
