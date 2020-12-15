import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../../components/client/Banner';
import Offer from '../../components/client/Offer';
import Sidebar from '../../components/client/Sidebar';
import TopMenu from '../../components/client/TopMenu';
import BottomNav from '../../components/client/BottomNav';
import ProductsContainer from '../../containers/ProductsContainer';
import CartContainer from '../../containers/CartContainer';

export default function Home({ ...props }) {
  const productsRef = useRef(null);

  useEffect(() => {
    alert("Welcome AdityaG (learning experiment,open source)");
    window.scrollTo({
      top: productsRef.current.offsetTop - 100,
      behavior: 'smooth',
    });
  }, []); // run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run

  return (
    <>
      <TopMenu isHome={true} />
      <Banner />
      <Container className='p-0' fluid>
        <Offer />
        <Row className='m-0'>
          <Col xl={2} lg={3} className='p-0'>
            <Sidebar myRef={productsRef} />
          </Col>
          <Col ref={productsRef} xl={10} lg={9} className='p-0'>
            <ProductsContainer history={props.history} />
          </Col>
        </Row>
      </Container>
      <CartContainer />
      <BottomNav />
    </>
  );
}
