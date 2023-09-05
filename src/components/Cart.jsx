import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {

  const products = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const removeFromCart =(id) => {
    //dispatch the remove action
    dispatch(remove(id));
  }

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-12" style={{marginBottom: '10px'}}>
      <Card className=" h-100">
        <div className="text-center">
          <Card.Img
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>NGR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{background: 'white', display: 'flex',justifyContent: 'center'}}>
          <Button variant="danger" onClick={()=> removeFromCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <Container>
    <div className="row">
      {cards}
    </div>
    </Container>
  )
}

export default Cart



// import { Button, Card, Container } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { remove } from "../store/cartSlice";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart);

//   const dispatch = useDispatch();

//   const removeFromCart = (cartItemId) => {
//     // Dispatch the remove action with the cart item's unique ID
//     dispatch(remove(cartItemId));
//   };

//   const cartItemsMap = new Map(); // Use a map to store cart items with unique keys

//   // Populate the map with cart items, combining duplicate products
//   cartItems.forEach((cartItem) => {
//     const cartItemId = `${cartItem.id}_${cartItem.cartEntryId}`;

//     if (!cartItemsMap.has(cartItemId)) {
//       cartItemsMap.set(cartItemId, { ...cartItem, quantity: 1 });
//     } else {
//       const existingCartItem = cartItemsMap.get(cartItemId);
//       existingCartItem.quantity++;
//     }
//   });

//   const cards = [...cartItemsMap.values()].map((cartItem) => (
//     <div key={cartItem.cartEntryId} className="col-md-12" style={{ marginBottom: '10px' }}>
//       <Card className=" h-100">
//         <div className="text-center">
//           <Card.Img src={cartItem.image} style={{ width: "100px", height: "130px" }} />
//         </div>
//         <Card.Body>
//           <Card.Title>{cartItem.title}</Card.Title>
//           <Card.Text>NGR: {cartItem.price}</Card.Text>
//           <Card.Text>Quantity: {cartItem.quantity}</Card.Text>
//         </Card.Body>
//         <Card.Footer style={{ background: 'white', display: 'flex', justifyContent: 'center' }}>
//           <Button variant="danger" onClick={() => removeFromCart(cartItem.cartEntryId)}>Remove Item</Button>
//         </Card.Footer>
//       </Card>
//     </div>
//   ));

//   return (
//     <Container>
//       <div className="row">{cards}</div>
//     </Container>
//   );
// };

// export default Cart;
