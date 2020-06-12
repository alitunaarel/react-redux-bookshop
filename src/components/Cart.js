import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"



const Cart = (props) => {

    const totalPrice = props.cart.reduce((total, item) => (total += item.price), 0).toFixed(2)

    return (
        <div className="cartdiv">
            <h2>
                <Link to="/">List of Book</Link> <span>My Cart</span>
            </h2>

            <h3>Total Price: &#8378;{totalPrice}</h3>

            {props.cart.map((book, i) => (
                <div key={i} className="book">
                    <img
                        src={book.image}
                        alt={book.name}
                    />
                    <div>
                        <h4>{book.name}</h4>
                        <p>Author: {book.author}</p>
                        <p>Price: &#8378;{book.price}</p>


                        <button>-</button>
                        <button>Remove From Cart</button>
                        <button>+</button>
                    </div>
                </div>
            ))}
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps)(Cart);
