import React from 'react';
import { Layout, Breadcrumb, notification } from 'antd';
import style from './style.css';
import { Row, Col } from 'antd';
import Link from './elements/Link';
import Cards from './components/Card';
import Instagram from './components/Instagram';

const { Header, Content, Footer } = Layout;

//notifikasi
const openNotification = () => {
    const args = {
        message: 'Panduan',
        description:
            'Silakan cek apakah data yang sudah muncul bisa terlihat semua. Jika belum ,cobalah untuk me-refresh laman ini dan jika masih belum bisa juga, hubungi Customer Kami.',
        duration: 0,
    };
    notification.open(args);
};

const Tampilan = () => {
    return (
        <Layout className="layout" style={{ fontFamily: 'Poppins' }}>
            <Header>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <p style={{ color: "white" }}><b>Arduino Store</b></p>
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
                            <Link primary onClick={openNotification}>Panduan</Link>
                            <Link href="/">Home</Link>
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
                        <div className="container">
                            <Cards />
                        </div>
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', fontFamily: 'Poppins', background:'#001529', color:'white'}}>
                
            <h4 style={{color:"white"}}><b>Find Us On:</b></h4>
            <br></br>
            <Instagram/>
            <hr></hr>
            <br></br>
                Ant Design ©2018 Created by Ant UED
                </Footer>
        </Layout>
    );
};

export default Tampilan;