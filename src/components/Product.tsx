import { Button } from "react-bootstrap";
import { useAppDispatch } from "../hooks/hooks";
import { addToCart } from "../features/productSlice";

interface IProps {
    image: string;
    title: string;
    price: number;
    description: string;
    rating:{
      rate: number;
      count: number;
    }
  }
  export const Product = (props: IProps) => {
    const { image, title, price, rating, description } = props;

    const product = props;

    const dispatch =useAppDispatch();

    const handleAddProduct =() =>{
      dispatch(addToCart(product))
    }
    return (
      <div>
        <section className="Details">
          <article className="Detail_thumbnail">
            <img style={{ maxWidth: "10%" }} src={image} />
          </article>
          <article className="Detail_content">
            <h2>{title}</h2>
          </article>
          <article className="Detail_info">
            <span className="Detail_price">Price: ${price}</span>
          </article>
          <article className="Detail_info">
            <span className="Detail_rate">Rating: {rating.rate}</span>
          </article>
          <article className="Detail_description">
            <p>{description}</p>
          </article>
          <Button onClick={handleAddProduct}>Add Product to Cart</Button>
        </section>
      </div>
    );
  };