import axios from 'axios';
import React, { Component } from 'react';
import Button from '../elements/Button';
import TextInput from '../elements/TextInput';

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
        })
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
                <div className="flex">
                    <TextInput type="text" id="inputText" placeholder="Search Arduino..." value={this.state.search} />
                    <Button style={{ width: "90px" }} onClick={this.handleSearch}>Search</Button>
                </div>
                <div className="flex">
                    <br></br>
                    <h2 style={{textAlign:"left"}}>Arduino Products</h2>
                    <hr></hr>
                </div>
                <div className="container">
                    {this.state.posts
                    .filter((results,index) => results.nama.includes(this.state.search).toLowerCase())
                    .map((results, index)=>{
                        return(

                        )
                    })}
                </div>
            </div>
        );
    }
}