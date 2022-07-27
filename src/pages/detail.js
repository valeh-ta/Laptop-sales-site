import react, { Component, Fragment } from "react";
import { CommentList, CreateComment } from "../components/comment";

import { productService, cartStore, addToCart } from "../components/product";


export class Detail extends Component {
  state = {};

  async componentDidMount() {
    let id = this.props.match.params.id;
    const { data } = await productService.getProductById(id);
    this.setState({ data });

    //cart
    this.unsubscribe = cartStore.subscribe(() => {
      console.log(cartStore.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  // for comment
  async submitComment(comment) {
    const response = await productService.addComment(
      this.state.data.id,
      comment
    );
    if (response.status === 200) {
      const { data } = await productService.getComments(this.state.data.id);
      this.setState({ data: { ...this.state.data, comments: data } });
    }
  }

  //cart

  AddToCartHandler() {
    cartStore.dispatch(addToCart(this.state.data));
  }

  render() {
    const data = this.state.data;
    if (!data) {
      return <div>Loading...</div>;
    }
    return (
      <Fragment>
        <div className="row">
          <div className="col-5">
            <img src={data.pic} width="100%" />
          </div>

          <div className="col-7">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <strong style={styles.price}>{data.price}</strong>
            <br />
            <button
              onClick={this.AddToCartHandler.bind(this)}
              className="mt-5 btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* for comment */}
        <div className="row mt-5">
          <div className="col-10 mx-auto">
            <CommentList comments={data.comments || []} />
            <hr />
            <CreateComment onComment={this.submitComment.bind(this)} />
          </div>
        </div>
      </Fragment>
    );
  }
}

const styles = {
  price: { color: "green", fontSize: 24 },
};
