import react from "react";
import { Product } from "./product";

export function ProductList(props) {
  return props.products.map((item) => (
    <div className="col-4" key={item.id}>
      <Product data={item} />
    </div>
  ));
}
