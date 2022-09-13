import CartContext from "./cartContext";

const UserState = (props) => {

    let cartItems = []
    return (
        <CartContext.Provider value={cartItems}>{props.children}</CartContext.Provider>
    )
}

export default UserState;