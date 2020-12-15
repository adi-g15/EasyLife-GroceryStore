import React from 'react';
import '../../styles/client/pages/Profile.scss';

import '../../components/client/UserSidebar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UserSidebar from '../../components/client/UserSidebar';

export default function Profile() {
  return (
    <Container className='p-5' fluid>
      <Row>
        <Col xl={3} className='d-none d-xl-flex'>
          <UserSidebar />
        </Col>
        <Col xl={9} className='p-5'>
          <div className='profile'>
            <h1>Your profile</h1>
            <div className='card'>
              <div className='card-header d-flex p-0'>
                <div className='title d-flex align-items-center'>
                  <span>1</span>
                  Information
                </div>
              </div>
              <div className='card-content row p-0 m-0'>
                <Form className='w-100'>
                  <Form.Row>
                    <Form.Group as={Col} controlId='formGridEmail'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type='password' placeholder='Password' />
                    </Form.Group>
                  </Form.Row>
                </Form>
              </div>
            </div>
            {/* Delivery-address */}
            <div className='delivery-address card'>
              <div className='card-header d-flex p-0'>
                <div className='title d-flex align-items-center'>
                  <span>2</span>
                  Delivery Address
                </div>
                <div className='option-add'>
                  <i className='fa fa-plus mr-2' aria-hidden='true'></i>
                  Add address
                </div>
              </div>
              <div className='card-content row p-0 m-0'>
                <div className='col-md-4'>
                  <div className='item active'>
                    <div className='name'>Home</div>
                    <div className='content'>
                      27 Street, 2569 Heritage Road Visalia, CA 93291
                    </div>
                    <div className='btn-edit'>
                      <i className='fa fa-pencil' aria-hidden='true'></i>
                    </div>
                    <div className='btn-delete'>
                      <i className='fa fa-trash' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className='col-md-4'>
                  <div className='item'>
                    <div className='name'>Home</div>
                    <div className='content'>
                      27 Street, 2569 Heritage Road Visalia, CA 93291
                    </div>
                    <div className='btn-edit'>
                      <i className='fa fa-pencil' aria-hidden='true'></i>
                    </div>
                    <div className='btn-delete'>
                      <i className='fa fa-trash' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
                {/* Item */}
              </div>
            </div>
            {/* Delivery-address */}

            <div className='contact-number card'>
              <div className='card-header d-flex p-0'>
                <div className='title d-flex align-items-center'>
                  <span>3</span>
                  Contact Number
                </div>
                <div className='option-add'>
                  <i className='fa fa-plus mr-2' aria-hidden='true'></i>
                  Add contact
                </div>
              </div>
              <div className='card-content row p-0 m-0'>
                <div className='col-md-4'>
                  <div className='item active'>
                    <div className='name'>Home</div>
                    <div className='content'>
                      27 Street, 2569 Heritage Road Visalia, CA 93291
                    </div>
                    <div className='btn-edit'>
                      <i className='fa fa-pencil' aria-hidden='true'></i>
                    </div>
                    <div className='btn-delete'>
                      <i className='fa fa-trash' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className='col-md-4'>
                  <div className='item'>
                    <div className='name'>Home</div>
                    <div className='content'>
                      27 Street, 2569 Heritage Road Visalia, CA 93291
                    </div>
                    <div className='btn-edit'>
                      <i className='fa fa-pencil' aria-hidden='true'></i>
                    </div>
                    <div className='btn-delete'>
                      <i className='fa fa-trash' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
                {/* Item */}
              </div>
            </div>
            {/* Contact Number */}
            <Button>Save</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
