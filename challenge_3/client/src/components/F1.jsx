class F1 extends React.Component {
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
            <Link to="/F2">
              <button
                onClick={() =>
                  this.props.updatePurchaseRecord({
                    ...this.state,
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

window.F1 = F1;
