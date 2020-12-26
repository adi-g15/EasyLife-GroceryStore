import React from "react"
import { connect } from "react-redux"

function CartPage() {
    const cartTotal = props.cart.reduce((accumuate, curr) => accumuate + curr);

    return (
        <div>
            Current Cart Total is {cartTotal}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(CartPage);
