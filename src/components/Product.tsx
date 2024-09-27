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
    return (
      <div>
        <section className="Details">
          <article className="Detail_thumbnail">
            <img style={{ maxWidth: "100" }} src={image} />
          </article>
          <article className="Detail_content">
            <h2>{title}</h2>
          </article>
          <article className="Detail_info">
            <span className="Detail_price">${price}</span>
            <span className="Detail_rate">${rating.rate}</span>
          </article>
          <article className="Detail_description">
            <p>{description}</p>
          </article>
        </section>
      </div>
    );
  };