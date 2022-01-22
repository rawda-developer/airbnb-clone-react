import React from "react";
import star from "../images/star.png";
import image1 from "../images/image1.png";
import mountain_bike from "../images/mountain-bike1.png";
import wedding from "../images/wedding.png";
export default class ImageGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
  }
  getData = () => {
    return [
      {
        id: 1,
        image: image1,
        status: "sold out",
        rating: "5.00",
        stars: 6,
        country: "USA",
        title: "Life lessons with Katie Zaferes",
        price: 136,
      },
      {
        id: 2,
        image: wedding,
        status: "sold out",
        rating: "5.00",
        stars: 6,
        country: "USA",
        title: "Learn wedding photography",
        price: 125,
      },
      {
        id: 3,
        image: mountain_bike,
        status: "",
        rating: "5.00",
        stars: 30,
        country: "USA",
        title: "Group Mountain Biking",
        price: 50,
      },
    ];
  };
  render() {
    return (
      <div class="gallary">
        {this.state.data.map((item) => (
          <div className="gallary--item">
            <div className="gallary--image-wrapper">
              <img src={item.image} alt="" />
              {item.status.length > 0 && <p>{item.status}</p>}
            </div>
            <div className="gallary--rating">
              <p>
                <img src={star} alt="star ratings" />
                <span className="rating">{item.rating}</span> ({item.stars}).
                {item.country}
              </p>
            </div>
            <p>{item.title}</p>
            <p className="item-price">
              From ${item.price} / <span>person</span>
            </p>
          </div>
        ))}
      </div>
    );
  }
}
