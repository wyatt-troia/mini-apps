class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cc_number: "",
      cc_expiration: "",
      cc_cvv: "",
      billing_zip: ""
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
            <Link to="/review">
              <button
                onClick={() =>
                  this.props.updatePurchaseRecord({
                    ...this.state,
                    purchase_id: this.props.purchase_id
                  })
                }
              >
                Review
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

window.F3 = F3;
