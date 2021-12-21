import React, { Component } from 'react';

class CourseSales extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
        };

        this.sumPrice = this.sumPrice.bind(this);
    }

    sumPrice(price) {
        this.setState({total: this.state.total + price});
    }

    render() {
        console.log(this.props.items);
        var courses = this.props.items.map((item, idx) => {
            return <Course name={item.name} price={item.price}
                    key={idx} sumPrice={this.sumPrice} active={item.active} />;
        });
        return (
            <div>
                <h1>You can buy courses: </h1>
                <div id="courses">
                    {courses}
                    <p id="total">Total: <b>{this.state.total}</b></p>
                </div>
            </div>
        );
    }
}

class Course extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.clicker = this.clicker.bind(this);
    }

    clicker() {
        var active = !this.state.active;
        this.setState({active: active});
        this.props.sumPrice(active ? this.props.price : -this.props.price);
    }

    render() {
        return(
            <div>
                <p className={this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.name} <b>{this.props.price}</b></p>
            </div>
        );
    }
}

export default CourseSales
