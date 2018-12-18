class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
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
              <label>Line 1:</label>
              <input
                type="text"
                name="address_1"
                id="address_1"
                onChange={this.handleChange}
                autoComplete="address_1"
              />
            </div>
            <div>
              <label>Line 2:</label>
              <input
                type="text"
                name="state"
                id="state"
                onChange={this.handleChange}
                autoComplete="state"
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                name="city"
                id="city"
                onChange={this.handleChange}
                autoComplete="city"
              />
            </div>
            <div>
              <label>State:</label>
              <input
                type="text"
                name="state"
                id="state"
                onChange={this.handleChange}
                autoComplete="state"
              />
            </div>
            <div>
              <label>Zip Code:</label>
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
            <label>Phone:</label>
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
              <button>Next</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

window.F2 = F2;
