/*eslint-disable */
import react, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','우동 맛집','여자 코트 추천']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '개발공부 글';

  function 함수(){
    console.log(1);
  }
  () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
  };

  

  return (
   <div className="App">
      <div className="black-nav"> 
        <div style={{ color:'white',fontSize:'30px'}}>개발 Blog</div>       
      </div>
      <div className ="list">
        <h3> { 글제목[0] } <span onClick={함수()}>👍</span>  </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className ="list"> 
        <h3> { 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className ="list"> 
        <h3> { 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>  
   </div>
   
  );
}

export default App;
