// let ReactRouterDOM = window.ReactRouterDOM;
let RouteHandler = ReactRouterDOM.RouteHandler;
let Route = ReactRouterDOM.Route;
let Link = ReactRouterDOM.Link;
let Router = ReactRouterDOM.BrowserRouter;
let DefaultRoute = ReactRouterDOM.DefaultRoute;

class Checkout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Checkout</h1>
          <Route exact path="/" component={F1} />
          <Route path="/F2" component={F2} />
          <Route path="/F3" component={F3} />
          <Route path="/review" component={Review} />
        </div>
      </Router>
    );
  }
}

window.Checkout = Checkout;
