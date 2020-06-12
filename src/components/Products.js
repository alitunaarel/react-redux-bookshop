import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { sepeteEkle } from "../actions"

const Products = props => {
    console.log("Cart: ", props.cart)
    return (
        <div>
            <h2>
                <span>Kitap Listesi</span>
                <Link to="/cart">Sepetim</Link>
            </h2>
            {props.bookList.map(book => (
                <div key={book.id} className="book">
                    <img
                        src={book.image}
                        alt={book.name}
                    />
                    <div>
                        <h4>{book.name}</h4>
                        <p>{book.author}</p>
                        <p>{book.price} &#8378; </p>
                        <button onClick={() => props.sepeteEkle(book)} >Sepete Ekle</button>
                    </div>
                </div>
            ))}
        </div>
    );
};



const mapStateToProps = (state) => {
    return {
        bookList: state.bookList,
        cart: state.cart
    }
}

export default connect(
    mapStateToProps,
    { sepeteEkle })
    (Products);
