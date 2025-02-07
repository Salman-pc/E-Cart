import Header from '../componets/Header';
import { Col, Row, Button, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../Redux/ProductSlice';
import React, { useEffect, useState } from 'react';
import Cursol from '../componets/Cursol';
import NOthing from '../assets/NOthing.jpg';

function Home() {
  const { allProducts, pending } = useSelector(state => state.productReducer);
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 28;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [allProducts]);
  

  // Pagination Logic
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const paginatedProducts = allProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <Header insidehome={true} />
      <Cursol />

      {pending ? (
        <div className='d-flex justify-content-center align-items-center w-100' style={{ height: '50vh' }}>
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div className='container my-5'>
          {paginatedProducts.length > 0 ? (
            <Row className='justify-content-center'>
              {paginatedProducts.map((item, index) => (
                <Col key={index} xs={6} sm={6} md={4} lg={3} xl={2} className='mb-4 d-flex'>
                  <Card className='w-100 border-1 shadow-lg flex-grow-1'>
                    <Card.Img className='bg-light shadow-sm' variant="top" style={{ height: '180px', objectFit: 'contain' }} src={item.thumbnail} />
                    <Card.Body className='d-flex flex-column align-items-center justify-content-between p-2'>
                      <Card.Title className='text-dark text-center' style={{ fontSize: '14px' }}>
                        {item.title.length > 13 ? `${item.title.slice(0, 13)}...` : item.title}
                      </Card.Title>
                      <Link to={`/view/${item.id}`} className='btn btn-warning w-100 text-center'>
                        View More
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
              <img className="img-fluid w-75" src={NOthing} alt="No Products" />
            </div>
          )}

          {/* Pagination */}
          
          {totalPages > 1 && (
            <div className='d-flex mt-3 gap-2 justify-content-center'>
              <Button className='bg-dark shadow border-dark' disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}><i class="fa-solid fa-arrow-left"></i></Button>
              {[...Array(totalPages)].map((_, index) => (
                <Button key={index} className={`shadow border-dark ${currentPage === index + 1 ? 'bg-warning' : 'bg-dark'}`} onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </Button>
              ))}
              <Button className='bg-dark shadow border-dark' disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}><i class="fa-solid fa-arrow-right"></i></Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
