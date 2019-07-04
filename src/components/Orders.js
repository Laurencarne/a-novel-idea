import React, { Component } from "react";

const SERVERURL = `http://localhost:3000/orders`;

class Orders extends Component {
  state = {
    orders: []
  };

  componentDidMount() {
    fetch(SERVERURL)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          orders: data
        })
      );
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <>
            <p>User: {order.user_id}</p>
            <p>Order Number: {order.id}</p>
            <p>Total: £{order.total}</p>
            <hr />
          </>
        ))}
      </div>
    );
  }
}

export default Orders;
