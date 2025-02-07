import React, { useEffect, useState } from 'react';
import Header from '../componets/Header';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { addtowhislist, removewitemtowhislist } from '../Redux/wishlist';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import { ToastContainer,toast } from 'react-toastify';


function View() {


    const [product, setproduct] = useState([])

    const userWishlist = useSelector(state=>state.wishlistReducer)
    const cartitems = useSelector(state=>state.cartreduces)

    const dispatch =useDispatch()

    const { id } = useParams()

    useEffect(() => {
        if (localStorage.getItem("allproducts")) {
            const allProducts = JSON.parse(localStorage.getItem("allproducts"))
            setproduct(allProducts.find(item => item.id == id))

        }
    }, [])
    
    const handleclickwishlist=()=>{
        const exsisting = userWishlist.find(item=>item.id==product.id)
        if (exsisting) {
            toast.warning("Item already added!!..")
        } else {
            dispatch(addtowhislist(product))
            toast.success("Item added to wishlist")
        }
    }

    const handlecartitem=()=>{
        let addeditem=cartitems.find(items=>items.id==product.id)
        if (addeditem) {
            toast.success("Incrimented cart item")
            dispatch(addToCart(product))
            
        } else {
            dispatch(addToCart(product))
            toast.success("Item adedd to cart")
            
        }
    }
    return (
        <div className="">
            <Header />
            <Container className="d-flex align-content-center">
                <Row className="align-items-center justify-content-center d-flex py-5 ">
                    {/* Product Image */}
                    <Col md={6} className="text-center pb-4">
                        <img
                            src={product?.thumbnail}
                            alt="Product"
                            className=" shadow img-fluid bg-light rounded shadow-sm "
                            style={{width:'78%'}}
                        />
                    </Col>

                    {/* Product Details */}
                    <Col md={6}>
                        <div className="mb-4">
                            
                            <h2 className="fw-bold">{product?.title}</h2>
                            <h3 className="text-success my-3">$ {product?.price}</h3>
                            <p className="text-muted">{product?.description}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className='d-flex justify-content-between gap-3'>
                            <Button onClick={handleclickwishlist} variant="outline-danger" size="lg" className='d-flex align-items-center gap-2'>
                                <i className="fa-solid fa-heart-circle-plus"></i>
                            </Button>
                            <Button onClick={handlecartitem} variant="success" size="lg" className='d-flex align-items-center gap-2'>
                                <i className="fa-solid fa-cart-plus"></i>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default View;
