import { Tooltip, Modal, Divider, Space } from 'antd';
import axios from 'axios';
import React, { Component } from 'react';
import Button from '../elements/Button';
import TextInput from '../elements/TextInput';
import '../style.css';

//funciton components
function Square(props) {
    return (
        <div>
            <div className="column">
                <div className="column left">
                    <img alt="img" src={props.link} />
                </div>

                <div className="column right">
                    <h1>{props.nama}</h1>
                    <hr></hr>
                    {/* <h3>Deskripsi</h3>
                    <p>{props.deskripsi}</p> */}
                    <h3>{props.harga}</h3>
                    <Button onClick={props.view}>View More</Button>
                </div>
            </div>
        </div>
    );
}

//export card
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            visible: false,
            link: "",
            nama: "",
            deskripsi: "",
            harga: "",
            search: "",
        };
    }
    handleButton = () => {
        this.setState({
            visible: true,
        });
    };
    handleLink = (e) => {
        this.setState({
            link: e.target.value,
        });
        console.log(this.state.link);
    };
    handleNama = (e) => {
        this.setState({
            nama: e.target.value,
        });
        console.log(this.state.nama);
    };
    handleDeskripsi = (e) => {
        this.setState({
            date: e.target.value,
        });
        console.log(this.state.deskripsi);
    };
    handleHarga = (e) => {
        this.setState({
            harga: e.target.value,
        });
        console.log(this.state.harga);
    };
    handleSearch = (e) => {
        this.setState({
            search: e.target.value,
        });
        console.log(this.state.search);
    }
    componentDidMount() {
        axios({
            method: "get",
            url: "https://jualarduino.herokuapp.com/posts",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    posts: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="flex">
                        <Tooltip placement="topLeft" title="Case Sensitive. Cari dengan huruf kapital di awal kata.">
                            <TextInput type="text" id="inputText" placeholder="Search Arduino..." onChange={this.handleSearch} value={this.state.search} />
                        </Tooltip>
                        <Button style={{ width: "125px" }} onClick={this.handleSearch}>Refresh Data</Button>
                    </div>
                    <div className="flex">
                        <br></br>
                        <h2 style={{ textAlign: "left" }}>Arduino Products</h2>
                        <hr></hr>
                    </div>
                    <div>
                        {this.state.posts
                            .filter(user => user.nama.includes(this.state.search))
                            .map(user => {
                                return (
                                    <div key={user.link}>
                                        <div className="wrapper">
                                            <Space>
                                                <div className="column">
                                                    <div className="column left">
                                                        <img alt="img" width="80%" src={user.link} />
                                                    </div>

                                                    <div className="column right" style={{ justifyContent: "center" }}>
                                                        <h2>{user.nama}</h2>
                                                        <hr></hr>
                                                        {/* <h3>Deskripsi</h3>
                    <p>{props.deskripsi}</p> */}
                                                        <h5>Rp{user.harga}</h5>
                                                        <Button onClick={this.handleButton}>View More</Button>
                                                    </div>
                                                </div>
                                            </Space>
                                        </div>
                                        <Modal
                                            title={user.handleNama}
                                            visible={this.state.visible}
                                            onOk={this.handleOk}
                                            onCancel={() => this.setState({ visible: false })}
                                        >
                                            <h2>{user.nama}</h2>
                                            <hr></hr>
                                            <Divider orientation="left">
                                                <h5>Deskripsi</h5></Divider>
                                            <p style={{ textAlign: "justify" }}>{user.deskripsi}</p>
                                            <br></br>
                                            <h5 style={{ textAlign: "right" }}>Harga : {user.harga}</h5>
                                        </Modal>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    }
}