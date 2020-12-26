import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/client/pages/Checkout.scss';
import Card from '../../components/client/Card';

export default function Checkout() {
  return (
    <Container className='p-5'>
      <Row>
        <Col xs={12} md={3} className='order-md-2 your-order'>
          <h3 className='text-center '>Your Order</h3>
          <div className='checkout-item'>
            <div className='title'>
              <b>2</b> x lime | 12px(s)
            </div>
            <div className='price'>$3.00</div>
          </div>
          {/* Checkout-item */}
          <div className='checkout-item'>
            <div className='title'>
              <b>2</b> x lime | 12px(s)
            </div>
            <div className='price'>$3.00</div>
          </div>
          {/* Checkout-item */}
          <div className='checkout-item'>
            <div className='title'>
              <b>2</b> x lime | 12px(s)
            </div>
            <div className='price'>$3.00</div>
          </div>
          {/* Checkout-item */}
          <div className='checkout-calculation'>
            <div className='checkout-item'>
              <div className='title'>Sub Total</div>
              <div className='price'>$3.00</div>
            </div>
            <div className='checkout-item'>
              <div className='title'>Delivery Fee</div>
              <div className='price'>$3.00</div>
            </div>
            <div className='checkout-item'>
              <div className='title'>Discount</div>
              <div className='price'>$3.00</div>
            </div>
            <div className='checkout-item total'>
              <div className='title'>
                Total <span>(Incl. VAT)</span>
              </div>
              <div className='price'>$3.00</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={9} className='order-md-1 px-lg-5 information-box'>
          <div className='delivery-address card'>
            <div className='card-header d-flex p-0'>
              <div className='title d-flex align-items-center'>
                <span>1</span>
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
          <div className='delivery-schedule card'>
            <div className='card-header d-flex p-0'>
              <div className='title d-flex align-items-center'>
                <span>2</span>
                Delivery Schedule
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
          {/* Delivery Schedule */}
          <Card
            className='contact-number'
            hasAdd={true}
            index={3}
            title='Contact Number'></Card>
          {/* Contact Number */}
          <div className='payment-option card'>
            <div className='card-header d-flex p-0'>
              <div className='title d-flex align-items-center'>
                <span>4</span>
                Payment Option
              </div>
            </div>
            <div className='card-content p-0 m-0'>
              <div className='payment-method'>
                <div className='payment-item active'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='money-bill-alt'
                    class='svg-inline--fa fa-money-bill-alt fa-w-20 '
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 640 512'>
                    <path
                      fill='currentColor'
                      d='M352 288h-16v-88c0-4.42-3.58-8-8-8h-13.58c-4.74 0-9.37 1.4-13.31 4.03l-15.33 10.22a7.994 7.994 0 0 0-2.22 11.09l8.88 13.31a7.994 7.994 0 0 0 11.09 2.22l.47-.31V288h-16c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h64c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 192c-53.02 0-96-50.15-96-112 0-61.86 42.98-112 96-112s96 50.14 96 112c0 61.87-43 112-96 112zm272 32h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z'></path>
                  </svg>
                  Cash
                </div>

                <div className='payment-item '>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='credit-card'
                    class='svg-inline--fa fa-credit-card fa-w-18 '
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'>
                    <path
                      fill='currentColor'
                      d='M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z'></path>
                  </svg>
                  Card
                </div>
              </div>
            </div>
            <p>
              By making this purchase you agree to our
              <a href='#terms'>terms and conditions.</a>
            </p>
            <div className='btn-checkout'>Proceed to Checkout</div>
          </div>
          {/* Delivery-address */}
        </Col>
      </Row>
    </Container>
  );
}
