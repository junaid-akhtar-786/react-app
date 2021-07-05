import React, { useState } from "react";
import { useSelector } from 'react-redux';



function Quiz() {

    const state = useSelector(state => state)
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [slectedValue, setSlectedValue] = useState("");
    const [result, setResult] = useState(false);

    function cheackAns() {
        let correctvalue = state.questions[count].correctAns;
        if (slectedValue === correctvalue) {
            setScore(score + 1);
        } if (state.questions.length === count + 1) {
            setResult(true);
        } else {
            setCount(count + 1);
        }
    }
    return (
        <div>
        <div className='App'>
            <div className='p-2'>
                <div className='container shadow'>
                    {result ? (
                        <div className="p-4 bg-gradient bg-warning rounded shadow text-dark">
                            <p className="fs-3">Result</p>
                            <progress
                                className="p-3"
                                id="file"
                                value={score}
                                max={state.questions.length}></progress>
                            <h3>
                                {((score / state.questions.length) * 100).toFixed(2)} %</h3>
                            <h3>
                                {(score / state.questions.length) * 100 < 60 ? "Fail" : "Pass"}{" "}
                            </h3>
                        </div>) : null
                    }
                </div>
            </div>
            <div className='container  shadow'>

                <div className='rounded shadow p-3 bg-warning '>

                    {!result ? (
                        <div className='container shadow rounded p-5 my-5 bg-warning bg-gradient'>
                            <p className='fs-3'>Question <span className='fs-2'>{count + 1}</span> Outof {state.questions.length}</p>

                            <h3>{state.questions[count].question}</h3>
                        </div>) : null}
                    {!result ? (
                        <div className='container rounded shadow p-5 my-5 bg-warning bg-gradient'>
                            <div className='row'>
                                {state.questions[count].options.map((e, i) => {
                                    return (
                                        <div key={i} className="col-md-4 py-2">
                                            <button
                                                onClick={() => setSlectedValue(e)}

                                                className="btn bg-gradient shadow btn-light rounded px-5">
                                                {e}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>) : null}


                    {!result ? (
                        <div className="container">
                            <button
                                onClick={() => cheackAns()}
                                className="btn btn-light px-5 shadow-5 rounded-pill">
                                Next
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
        </div>
    );

}

export default Quiz;