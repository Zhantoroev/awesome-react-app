import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {
    constructor(props){
        super();
    // initiating the local state
    this.state = {
        quiestions: {
            1: 'In which of the following areas, Node.js is not advised to be used? ',
            2: 'Which of the following command will show version of Node?',
            3: 'Which of the following is true about readable stream?',
            4: 'Which of the following code prints current directory?',
            5: 'A stream fires data event when there is data available to read.',
            6: 'JavaScript is a ___ -side programming language.',
            7: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
            8: 'How do you find the minimum of x and y using JavaScript?',
            9: 'Which of the following statements will throw an error?',
            10: 'Which JavaScript label catches all the values, except for the ones specified?',
        },
        answers: {
            1: {
                1: 'Single Page Applications',
                2: 'JSON APIs based Applications',
                3: 'CPU intensive applications'
            },
            2: {
                1: '$ npm --version',
                2: '$ node --version',
                3: '$ node getVersion'
            },
            3: {
                1: 'Readable stream is used for read operation',
                2: 'Output of readable stream can be input to a writable stream',
                3: 'Both of the above'
            },
            4: {
                1: "console.log('Current directory: ' + process.cwd());",
                2: "console.log('Current directory: ' + console.cwd());",
                3: "None of the above"
            },
            5: {
                1: 'false',
                2: 'true',
                3: 'I dunno'
            },
            6: {
                1: 'Client',
                2: 'Server',
                3: 'Both'
            },
            7: {
                1: 'alertBox("Hello DataFlair!");',
                2: 'alert("Hello DataFlair!");',
                3: 'alert(Hello DataFlair!);'
            },
            8: {
                1: 'Math.min(xy)',
                2: 'Math.min(x,y)',
                3: 'min(x,y);'
            },
            9: {
                1: "var fun = function bar( ){ }",
                2: "function fun( ){ }",
                3: "var fun = function bar{ }"
            },
            10: {
                1: 'default',
                2: 'catch',
                3: 'try'
            }
        },
        correctAnswers: {
            1: '3',
            2: '2',
            3: '3',
            4: '1',
            5: '2',
            6: '3',
            7: '2',
            8: '2',
            9: '3',
            10: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
        id: props.id,
        finish: 0,
        count:0
    }
    }
    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    finished = () => {
        fetch('/api/score', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                id: this.state.id,
                score: this.state.score
                })
            })
                .then(response => response.json())
                .then(count => {
                    this.props.onQuizFinish(count)
                })
    }
    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                        <p>Question number: {step} / 10</p>
                        <button className="NextStep finish" 
                            onClick={() => {this.finished(); this.props.onRouteChange('home')}}>Finish quiz</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                            <button className="NextStep"
                                onClick={() => { this.finished(); this.props.onRouteChange('home')}}>Go back</button>
                        </div>
                    )
                }
            </div>
        );
    }
}