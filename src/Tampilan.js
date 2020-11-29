import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import style from './style.css';
import { Row, Col } from 'antd';
import Link from './elements/Link';
import Button from './elements/Button';
import Cards from './components/Card';

const { Header, Content, Footer } = Layout;

const Tampilan = () => {
    return (
        <Layout className="layout" style={{ fontFamily: 'Poppins' }}>
            <Header>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <h3 style={{color:"white"}}>Arduino Store</h3>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}></div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}></div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <Link href="/SignIn">Sign In</Link>
                            <Link href="/SignUp">Sign Up</Link>
                        </div>
                    </Col>
                </Row>
                {/* <Menu theme="dark" mode="horizontal">
                    
                </Menu> */}

            </Header>
            <Content style={{ padding: '0 50px', fontFamily: 'Poppins' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Praktikum RSBK</Breadcrumb.Item>
                    <Breadcrumb.Item>Tugas Akhir</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <div className="Components">
                        <Cards/>
                        <Button>More Info</Button>
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', fontFamily: 'Poppins' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default Tampilan;