import react from "react";
import { ProductList, productService } from "../components/product";

export class HomePage extends react.Component {


  state = { products: [] };
  // for search
  fetchData() {
    productService
      .getProducts(this.props.location.search)
      .then((response) => this.setState({ products: response.data }));
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }
  //---------------------
  render() {
    return (
      <div className="row">
        <ProductList products={this.state.products} />
      </div>
    );
  }
}
