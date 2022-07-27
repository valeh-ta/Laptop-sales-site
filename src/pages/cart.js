import react, { Component, useState } from "react";
import { Cart } from "../components/cart/list";
import { cartStore } from "../components/product";

export class CartPage extends Component {
  state = {};

  componentDidMount() {
    this.setState({ products: cartStore.getState() });
    this.unsubscribe = cartStore.subscribe(() =>
      this.setState({ products: cartStore.getState() })
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="mt-5">
        <Cart products={this.state.products} />
      </div>
    );
  }
}
