class Home extends React.Component {
  constructor(props) {
    super(props);
    this.createRecord = this.createRecord.bind(this);
  }

  createRecord() {
    axios.post("/purchase").then(response => {
      console.log(response.data);
      let purchaseId = response.data.purchase_id;
      this.props.updatePurchaseId(purchaseId);
    });
  }

  render() {
    return (
      <div>
        <Link to="/F1">
          <button onClick={this.createRecord}>Checkout</button>
        </Link>
      </div>
    );
  }
}

window.Home = Home;
