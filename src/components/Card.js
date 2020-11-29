import axios from 'axios';
import React, { Component } from 'react';
import style from '../style.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            holidays: [],
            visible: false,
            name: "",
            date: "",
            observed: "",
        };
    }
    handleButton = (name, date) => {
        
    };
    handleName = (e) => {
        this.setState({
            name: e.target.value,
        });
        console.log(this.state.name);
    };
    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        });
        console.log(this.state.date);
    };
    handleObserved = (e) => {
        this.setState({
            observed: e.target.value,
        });
        console.log(this.state.observed);
    };
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
                    holidays: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}