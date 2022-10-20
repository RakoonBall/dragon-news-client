import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import LeftSideNav from '../pages/shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../pages/shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
       <div>
        <Header></Header>
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
       </div>
    );
};

export default Main;