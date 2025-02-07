import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <Row className="gy-3">
          {/* About Section */}
          <Col xs={12} md={4}>
            <h5 className="fw-bold">Fushion</h5>
            <p className="text-link-light">
              Your one-stop shop for the latest trends in fashion and lifestyle.
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={4} md={2} lg={4}>
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              {["Home", "Wishlist", "Cart", "View Products"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-light text-decoration-none">{item}</a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact & Newsletter */}
          <Col xs={8} md={6} lg={4}>
            <h6 className="fw-semibold">Stay Connected</h6>
            <form className="d-flex mb-2">
              <input type="email" className="form-control me-2" placeholder="Enter email" />
              <button className="btn btn-warning">Send</button>
            </form>

            {/* Social Media Links */}
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-light fs-5"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-light fs-5"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-light fs-5"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <div className="text-center text-secondary mt-3">
          © {new Date().getFullYear()} Fusion Store. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
