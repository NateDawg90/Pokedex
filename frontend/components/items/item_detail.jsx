import React from 'react';

class ItemDetail extends React.Component {
  render() {
    let item = this.props.selectedItem;
    return (
      <ul>
        <li>{item.name}</li>
        <li>Happiness: {item.happiness}</li>
        <li>Price: {item.price}</li>
      </ul>
    );
  }
}

export default ItemDetail;
