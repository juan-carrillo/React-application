import React, { Component } from "react";

import { initializeApp } from 'firebase/app'
var uuid = require('uuid');

class Usurvey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: uuid.v1(),
            studentName: '',
            answers: {
                answers1: '',
                answers2: '',
                answers3: '',
            },
            isSubmitted: false
        };
        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
    }

    answerSelected(event) {
        var answers = this.state.answers;
        if(event.target.name === 'answer1') {
            answers.answers1 = event.target.value;
        } else if(event.target.name === 'answer2') {
            answers.answers2 = event.target.value;
        } else if(event.target.name === 'answer3') {
            answers.answers3 = event.target.value;
        }

        this.setState({answers: answers}, function() {
            console.log(this.state);
        });
    }

    questionSubmit() {
        //TODO insert firebase storing
        this.setState({isSubmitted: true});
    }

    nameSubmit(event) {
        var studentName = this.refs.name.value;
        this.setState({studentName: studentName}, function() {
            console.log(this.state);
        });
    }

    render() {
        var studentName;
        var questions;

        if(this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h1>Hey Student, please let us know your name: </h1>
                <form onSubmit={this.nameSubmit}>
                    <input className="namy" type="text" placeholder="Enter your name" ref="name" />
                </form>
            </div>;
            questions = '';
        } else if(this.state.studentName != '' && this.state.isSubmitted === false) {
            studentName = <h1>Welcome to U-Survey, {this.state.studentName}</h1>;
            questions = <div>
                <h2>Here are some questions: </h2>
                <form onSubmit={this.questionSubmit}>
                    <div className="card">
                        <label>What kind of courses you like the most: </label><br />
                        <input type="radio" name="answer1" value="Technology"
                        onChange={this.answerSelected} />Technology
                        <input type="radio" name="answer1" value="Desgin"
                        onChange={this.answerSelected} />Design
                        <input type="radio" name="answer1" value="Marketing"
                        onChange={this.answerSelected} />Marketing
                    </div>
                    <div className="card">
                        <label>you are a: </label><br />
                        <input type="radio" name="answer2" value="student"
                        onChange={this.answerSelected} />Student
                        <input type="radio" name="answer2" value="in-job"
                        onChange={this.answerSelected} />In-Job
                        <input type="radio" name="answer2" value="looking-job"
                        onChange={this.answerSelected} />Looking-Job
                    </div>
                    <div className="card">
                        <label>Is online learning helpful: </label><br />
                        <input type="radio" name="answer3" value="yes"
                        onChange={this.answerSelected} />Yes
                        <input type="radio" name="answer3" value="no"
                        onChange={this.answerSelected} />No
                        <input type="radio" name="answer3" value="may-be"
                        onChange={this.answerSelected} />May Be
                    </div>
                    <input className="feedback-button" type="submit" value="submit" />
                </form>
            </div>;
        } else if(this.state.isSubmitted === true) {
            studentName = <h1>Thanks, {this.state.studentName}</h1>
        }

        return(
            <div>
                {studentName}
                -------------------------------------
                {questions}
            </div>
        );
    }
}

export default Usurvey;