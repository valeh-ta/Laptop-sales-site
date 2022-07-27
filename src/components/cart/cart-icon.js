import react, { Component } from "react";
import { cartStore } from "../product";

export class CartIcon extends Component {
  state = {};
  componentDidMount() {
    cartStore.subscribe(() =>
      this.setState({ count: cartStore.getState().length })
    );
  }

  render() {
    return (
      <div>
        <img width="30" src="/images/cart.png" />

        {this.state.count > 0 && (
          <span
            style={{
              position: "absolute",
              marginLeft: -10,
              marginTop: -5,
              color: "black",
              backgroundColor: "red",
            }}
            className="badge badge-danger badge-pill"
          >
            {this.state.count}
          </span>
        )}
      </div>
    );
  }
}
