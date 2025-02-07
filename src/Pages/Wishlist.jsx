import React from 'react';
import Header from '../componets/Header';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { removewitemtowhislist } from '../Redux/wishlist';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import Emptywihslist from '../assets/Emptywihslist.jpg';
import { ToastContainer, toast } from 'react-toastify';

function Wishlist() {
  const dispatch = useDispatch();
  const cartitems = useSelector(state => state.cartreduces);
  const wishlist = useSelector(state => state.wishlistReducer);

  const handleCart = (item) => {
    let addedProduct = cartitems.find(items => items.id === item.id);
    if (addedProduct) {
      toast.success("Incrimented cart item");
      dispatch(addToCart(item));
    } else {
      toast.success("Item added to cart!");
      dispatch(addToCart(item));
    }
    dispatch(removewitemtowhislist(item.id));
  };

  return (
    <div>
      <Header insidehome={false} />
      <div className='container'>
        {wishlist.length > 0 ? (
          <div>
            <h2 className='text-center mt-4'>Your Wishlist</h2>
            <Row className='mt-4'>
              {wishlist.map((item, index) => (
                <Col key={index} xs={6} sm={6} md={4} lg={3} xl={2} className='mb-4 d-flex'>
                  <Card className='w-100 border shadow-sm flex-grow-1'>
                    <Card.Img
                      className='bg-light shadow-sm'
                      variant="top"
                      style={{ height: '180px', objectFit: 'contain' }}
                      src={item.thumbnail}
                    />
                    <Card.Body className='d-flex flex-column justify-content-between p-2'>
                      <Card.Title className='text-center text-dark' style={{ fontSize: '14px' }}>
                        {item.title.length > 13 ? `${item.title.slice(0, 13)}...` : item.title}
                      </Card.Title>
                      <div className='d-flex justify-content-between'>
                        <Button className='bg-light border-0' onClick={() => dispatch(removewitemtowhislist(item.id))}>
                          <i className="fa-solid fa-heart-circle-xmark text-danger"></i>
                        </Button>
                        <Button className='bg-light border-0 ' onClick={() => handleCart(item)}>
                          <i className="fa-solid fa-cart-plus text-success"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
            <img className="img-fluid w-75" src={Emptywihslist} alt="Empty Wishlist" />
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Wishlist;
