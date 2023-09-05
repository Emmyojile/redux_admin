import axios from "axios";
import { useState, useEffect } from "react";
import {Alert, Button, Card, Container, Row} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Products = () => {

  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.products)

  useEffect(() => {
    //dispatch an action to get the products
    dispatch(getProducts());

    
    // const getProducts = async () => {
    //   const { data } = await axios(`https://fakestoreapi.com/products`);
    //   setProducts(data);
    // };

    // getProducts();
  }, []);

  if(status === StatusCode.LOADING){
    return <h1>Loading...</h1>
  }

  if(status === StatusCode.ERROR){
    return <Alert key='danger' variant="danger">something went wrong! Try Again later</Alert>
  }

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  }

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3" style={{marginBottom: '10px'}}>
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
          <Button variant="primary" onClick={()=> addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
    <Container>
      <div>
        <h1 className="text-center">Products</h1>
        <Row className="row">{cards}</Row>
      </div>
    </Container>
    </>
  );
};

export default Products;
