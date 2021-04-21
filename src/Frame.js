import React, { useState } from 'react'
import axios from 'axios';

function Frame() {
  const [data, setData] = useState([]);

  const loadData = () => {
    axios
        .get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple`)
        .then(res => setData(res.data.results));
}

    const [score,setScore]=useState([0,0,0,0,0,0,0,0,0,0]);
    const[i,setI]=useState(0);
    const[k,setK]=useState(0);
    const[l,setL]=useState(0);
    const [inputs, setInputs] = useState("");
    const next=()=>{
        setK(k+1);
        if(inputs===data[`${i}`].correct_answer){
          var newScore=[...score];
          newScore[i]=1;
          setScore(newScore);}
        else{
          newScore=[...score];
          newScore[i]=0;
          setScore(newScore);}
          
        if(i<9)
          setI(i+1);
      
      const select=document.getElementById("gridRadios1");
      const select1=document.getElementById("gridRadios2");
      const select2=document.getElementById("gridRadios3");
      const select3=document.getElementById("gridRadios4");
      select.checked=false;
      select1.checked=false;
      select2.checked=false;
      select3.checked=false;
      // console.log(select.checked);  
      setL(Math.random()*10);
    }
    const reset=()=>{
      setScore([0,0,0,0,0,0,0,0,0,0]);
      setK(0);
      setI(0);
      loadData();
    }
    
    const prev=()=>{
      setK(k-1);
        if(i>0)
        setI(i-1);
    }
    
    return (
        <>
              {
        data.length===0?<div><h1>Welcome to Quiz App</h1><br/><br/><br/>
        <center><button id="start" onClick={()=>(loadData())}>Start</button></center></div>:`${k}`<10?<div className="main">
        <div className="ques"><p>Q{i+1}) {data[`${i}`].question}</p></div>
        {/* {`${i}`>8? <div className="score">{score.reduce((a, b) => a + b, 0)}</div>:""} */}
        <div className="option">
        {l<4?	<div className="random"><div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={data[`${i}`].correct_answer} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios1">
            <span>{data[`${i}`].correct_answer}</span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={data[`${i}`].incorrect_answers[0]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios2">
            <span>{data[1].incorrect_answers[0]}</span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value={data[`${i}`].incorrect_answers[1]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios3">
            <span>{data[`${i}`].incorrect_answers[1]}</span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value={data[`${i}`].incorrect_answers[2]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios4">
            <span>{data[`${i}`].incorrect_answers[2]}</span>
          </label>
        </div></div>:l<6?<div className="random"><div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={data[`${i}`].incorrect_answers[0]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios2">
            <span>{data[1].incorrect_answers[0]}</span>
          </label>
        </div>
	<div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={data[`${i}`].correct_answer} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios1">
            <span>{data[`${i}`].correct_answer}</span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value={data[`${i}`].incorrect_answers[1]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios3">
            <span>{data[`${i}`].incorrect_answers[1]}</span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value={data[`${i}`].incorrect_answers[2]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios4">
            <span>{data[`${i}`].incorrect_answers[2]}</span>
          </label>
        </div></div>:l<8?<div className="random"><div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={data[`${i}`].incorrect_answers[0]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios2">
            <span>{data[1].incorrect_answers[0]}</span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value={data[`${i}`].incorrect_answers[1]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios3">
            <span>{data[`${i}`].incorrect_answers[1]}</span>
          </label>
        </div>
	<div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={data[`${i}`].correct_answer} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios1">
            <span>{data[`${i}`].correct_answer}</span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value={data[`${i}`].incorrect_answers[2]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios4">
            <span>{data[`${i}`].incorrect_answers[2]}</span>
          </label>
        </div></div>:<div className="random"><div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={data[`${i}`].incorrect_answers[0]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios2">
            <span>{data[1].incorrect_answers[0]}</span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value={data[`${i}`].incorrect_answers[1]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios3">
            <span>{data[`${i}`].incorrect_answers[1]}</span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value={data[`${i}`].incorrect_answers[2]} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios4">
            <span>{data[`${i}`].incorrect_answers[2]}</span>
          </label>
        </div>
	<div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={data[`${i}`].correct_answer} onChange={(e) => setInputs(e.target.value)}/>
          <label class="form-check-label" for="gridRadios1">
            <span>{data[`${i}`].correct_answer}</span>
          </label>
        </div></div>}
        </div>
        <div className="button">
        <button type="button" class="btn1" onClick={()=>{prev()}}>Back</button>
        <button type="button" class="btn1" onClick={()=>{next()}}>Next </button>
        </div>
      </div>:<div><h1>Welcome to Quiz App</h1><br/><p className="lead">Your Score is {score.reduce((a, b) => a + b, 0)} out of 10. </p><br/><br/>
        <center><button id="start" onClick={()=>(reset())}>Restart</button></center></div>
      }
        
            
        </>
    )
}

export default Frame
