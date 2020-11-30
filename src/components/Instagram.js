import { Space } from 'antd';
import React, { Component } from 'react'
import Link from '../elements/Link';
import '../style.css';

function List(props) {
    return (
        <div>
            <Link primary href={props.link1}>

                <img alt="example" src={props.link} style={{ width: "40px", height: "30px" }} />
                @{props.nama}
                </Link>
        </div>
    )
}

export default class Instagram extends Component {
    render() {
        return (
            <div className="wrapper">
                <Space>
                    <div className="row">
                        <List link="https://imgur.com/crJ7aOU.png" link1="https://www.instagram.com/shafasphere/" nama="shafasphere" />
                        <List link="https://imgur.com/crJ7aOU.png" link1="https://www.instagram.com/fadhli_fadra/" nama="fadhli_fadra" />
                    </div>
                </Space>
            </div>
        );
    }
}
