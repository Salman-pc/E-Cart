import React from 'react';
import Header from '../componets/Header';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, emptycart, quantitydicriment, quantityincriment } from '../Redux/CartSlice';
import { Link, useNavigate } from 'react-router-dom';
import EmptyCart from '../assets/EmptyCart.jpg';
import { ToastContainer,toast} from 'react-toastify';

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const CartItem = useSelector(state => state.cartreduces);

  let totalCartAmount = CartItem?.reduce((total, item) => total + item.totalPrice, 0) || 0;

  const handledicriment = (product) => {
    console.log(product);
    
    if (product.quantity > 1) {
      dispatch(quantitydicriment(product.id));
    } else {
      dispatch(deleteCartItem(product.id));
    }
  };

  const handleCartCheckOut = () => {
    toast.success("You successfully Ordered items!")
    dispatch(emptycart());
    setTimeout(()=>{
      navigate('/');
    },1000)
    
  };

  return (
    <div>
      <Header insidehome={false} />
      {CartItem.length > 0 ? (
        <div className='container p-4'>
          <h2 className="text-center">Shopping Cart</h2>
          <Row className="gy-3 py-3">
            {/* Cart Items */}
            <Col xs={12} lg={8}>
              <div className="d-flex flex-wrap  gap-3">
                {CartItem.map((product, index) => (
                  <div key={index} className='shadow  border rounded p-3 w-100' style={{ maxWidth: '500px' }}>
                    <div className='d-flex '>
                      <img className='bg-light rounded' src={product.thumbnail} alt="Product" width="120" />
                      <div className='d-flex flex-column gap-1 px-3'>
                        <h6>{product.title},{}</h6>
                        <h5 className='text-success'>${product.totalPrice}</h5>

                        <div className='d-flex align-items-center'>
                          <button onClick={() => handledicriment(product)} className='btn btn-outline-secondary px-2'>
                            {product.quantity === 1 ? <i className='fa-solid fa-trash text-danger'></i> : '-'}
                          </button>
                          <span className='px-3'>{product.quantity}</span>
                          <button onClick={() => dispatch(quantityincriment(product.id))} className='btn btn-outline-secondary px-2'>+</button>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            {/* Checkout Section */}
            <Col xs={12} lg={4}>
              <div className='text-center bg-light border rounded shadow p-3'>
                <h3>Total Cart Items: {CartItem.length}</h3>
                <h2>Total Amount: <span className="text-primary">${Math.floor(totalCartAmount)}</span></h2>
                <Button onClick={handleCartCheckOut} className='bg-warning border-0 w-100 mt-3'>Checkout</Button>
              </div>

              <div className='d-flex justify-content-between gap-3 mt-4'>
                <button onClick={() => dispatch(emptycart())} className='btn btn-danger w-50 shadow me-md-2 mb-2 mb-md-0'>Empty Cart</button>
                <Link to='/' className='w-50'>
                  <button className='btn shadow btn-secondary w-100'>Shop More</button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
          <img className="img-fluid w-75" src={EmptyCart} alt="Empty Cart" />
        </div>
      )}
    </div>
  );
}

export default Cart;
