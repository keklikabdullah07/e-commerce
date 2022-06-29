import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";

class Kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Computer" },
        { categoryId: 2, categoryName: "Accessory" },
        { categoryId: 3, categoryName: "Computer parts" },
        { categoryId: 4, categoryName: "Personel " },
      ],
    };
  }
  bringCategory() {
    fetch("http://localhost:3000/categories")
      .then(rsponse => rsponse.json())
      .then(data => this.setState({ categories: data }))
  }

  componentDidMount() { this.bringCategory() };



  render() {
    return (
      <div>
        <h1>{this.props.bilgiKategori.baslik}</h1>
        <h2>{this.props.bilgiKategori.ilaveBilgi}</h2>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={category.categoryName === this.props.selectedCategory ? true : false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}>{category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h1>{this.props.selectedCategory}</h1>
      </div>
    );
  }
}

export default Kategori;
