let RouteHandler = ReactRouterDOM.RouteHandler;
let Route = ReactRouterDOM.Route;
let Link = ReactRouterDOM.Link;
let Router = ReactRouterDOM.BrowserRouter;
let DefaultRoute = ReactRouterDOM.DefaultRoute;

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { purchase_id: null };
    this.updatePurchaseId = this.updatePurchaseId.bind(this);
  }

  updatePurchaseId(id) {
    this.setState({
      purchase_id: id
    });
  }

  updatePurchaseRecord(data) {
    axios.put("/purchase", data).then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Checkout</h1>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} updatePurchaseId={this.updatePurchaseId} />
            )}
          />
          <Route
            path="/F1"
            render={props => (
              <F1
                {...props}
                updatePurchaseRecord={this.updatePurchaseRecord}
                purchase_id={this.state.purchase_id}
              />
            )}
          />
          <Route
            path="/F2"
            render={props => (
              <F2
                {...props}
                updatePurchaseRecord={this.updatePurchaseRecord}
                purchase_id={this.state.purchase_id}
              />
            )}
          />
          <Route
            path="/F3"
            render={props => (
              <F3
                {...props}
                updatePurchaseRecord={this.updatePurchaseRecord}
                purchase_id={this.state.purchase_id}
              />
            )}
          />
          <Route
            path="/review"
            render={props => (
              <Review {...props} purchase_id={this.state.purchase_id} />
            )}
          />
        </div>
      </Router>
    );
  }
}

window.Checkout = Checkout;
