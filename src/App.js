/*eslint-disable */
import react, {useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App(){
  //여기 있는 state는 건들지말고 복사본으로 변경함수를 이용해서 변경하는게 좋음
  let [글제목, 글제목변경] = useState(['남자코트 추천','우동 맛집','여자 코트 추천']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '개발공부 글';

  function 제목바꾸기(){
    let newArray = [...글제목]; //딥카피
    newArray = newArray.sort();
    글제목변경(newArray);
  }

  /** 제목바꾸기 - 함수이름에 ()를 붙이면 안눌러도 실행이 되니까 ()를 빼야함 */
  return (
   <div className="App">
      <div className="black-nav"> 
        <div style={{ color:'white',fontSize:'30px'}}>개발 Blog</div>       
      </div>
      
      <button onClick={제목바꾸기}>버튼</button> 
      
      <div className ="list">
        <h3> { 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1)}}>👍</span>{ 따봉 }</h3>
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
      
      <Modal/>

   </div>
   
  );
}

function Modal(){ //컴포넌트 만들기(대문자로시작) //html관리가 편해짐 
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
