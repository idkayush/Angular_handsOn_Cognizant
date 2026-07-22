import React, { Component } from "react";

class Cart {
    constructor(itemName, price) {
        this.itemName = itemName;
        this.price = price;
    }
}

class OnlineShopping extends Component {
    constructor(props) {
        super(props);
        this.items = [
            new Cart("Laptop", 65000),
            new Cart("Phone", 28000),
            new Cart("Headphones", 3000),
            new Cart("Keyboard", 1500),
            new Cart("Mouse", 700)
        ];
    }

    render() {
        return (
            <div>
                <h1>Online Shopping</h1>
                <table border="1" cellPadding="8">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.items.map((item) => (
                            <tr key={item.itemName}>
                                <td>{item.itemName}</td>
                                <td>₹{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OnlineShopping;
