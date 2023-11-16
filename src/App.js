
import './App.css';
import {useState} from 'react'

function App() {

const [cal,setCal] = useState('');
const [result,setResult] = useState('');
console.log(cal.length);
const ops = ['+', '-', '*' , '/', '.'];

const calScreen = value =>{

  if(
 ops.includes(value) && cal === '' || ops.includes(value) && ops.includes(cal.slice(-1))   
  )
  {return}

  setCal(cal + value);

  if(!ops.includes(value)){
    setResult(eval(cal + value).toString());
  }

}


  const btnCreat = ()=>{
    const btn = [];
    for(let i =1;i<10 ;i++){
      btn.push(
      <button index = {i} onClick={()=>{ calScreen(i)}} >{i}</button>
      )}
      return btn
  }

  const equal = ()=>{
    setCal(eval(cal).toString())
  }
  const del = ()=>{
    if(cal == ""){
      return
    }

    
    let val = cal.slice(0,-1)
    setCal(val)
  }




  return (
    <div>
      
    <div className="calBody">
      <div className = "screen">
    {result ? <span className='smallCal'>({result})</span> : ''} <span className='bigCal'>{cal || '0' }</span>
      </div>
      <div className="operators">
        <button onClick={()=>{calScreen('+')}}>+</button>
        <button onClick={()=>{calScreen('-')}} >-</button>
        <button onClick={()=>{calScreen('/')}} >/</button>
        <button onClick={()=>{calScreen('*')}} >x</button>
        <button onClick={del}>Del</button>

      </div>
      <div className="btn">
       {btnCreat()}
        <button onClick={()=>{calScreen('0')}}  >0</button>
        <button onClick={()=>{calScreen('.')}} >.</button>
        <button onClick={equal}>=</button>

      </div>
    </div>



    </div>
  );
}

export default App;
