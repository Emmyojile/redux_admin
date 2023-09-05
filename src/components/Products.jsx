import axios from "axios";
import { useState, useEffect } from "react";
import {Button, Card, Container, Row} from 'react-bootstrap';



const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(`https://fakestoreapi.com/products`);
      setProducts(data);
    };

    getProducts();
  }, []);

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
          <Button variant="primary">Add to Cart</Button>
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
