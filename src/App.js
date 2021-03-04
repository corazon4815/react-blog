/*eslint-disable */
import React, {useState, Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';



function App(){
  //여기 있는 state는 건들지말고 복사본으로 변경함수를 이용해서 변경하는게 좋음
  let [글제목, 글제목변경] = useState(['남자코트 추천','우동 맛집','여자 코트 추천']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false); //스위치로 담음
  let [누른제목, 누른제목변경] = useState(0);
  
  let [입력값, 입력값변경] = useState(''); 
  
  
  function 반복된UI(){
    let 어레이 = [];
    for (let i =0; i<3; i++){
      어레이.push(<div>안녕</div>);
    }
    return 어레이;
  }
  
  function 제목바꾸기(){
    let newArray = [...글제목]; //딥카피
    newArray = newArray.sort();
    글제목변경(newArray);
  }

  function 모달(){
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
      
      {/* <button onClick={제목바꾸기}>버튼</button>  */}
      
      {/*<div className ="list">
        <h3> { 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span>{ 따봉 }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className ="list"> 
        <h3> { 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className ="list"> 
        <h3 onClick={()=>{ modal변경(true)} }> { 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
  </div>  */}
      
      {
        글제목.map((글, i)=>{
          return (
          <div className="list">
            <h3 onClick={ ()=>{누른제목변경(i)} }> { 글 }
            <span onClick={()=>{ 따봉변경(따봉 + 1) }}>👍</span>{ 따봉 }
            </h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>
          )
        })
      } 

{/* { 반복된UI()} */}

{/* <button onClick={ ()=>{누른제목변경(0)} }>버튼1</button>
    <button onClick={ ()=>{누른제목변경(1)} }>버튼2</button>
    <button onClick={ ()=>{누른제목변경(2)} }>버튼3</button>*/}

{/**입력값}
<input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}  
{/**onChange,onInput : 뭔가 입력이 될때, 값이 바뀔때마다 */}
{/**사용자가 입력한 값 : e.target.value */}

<div className="publish">
  <input onChange={ (e)=>{입력값변경(e.target.value)} }/>
  <button onClick={ ()=>{
    let arrayCopy = [...글제목];
    arrayCopy.unshift(입력값);
    글제목변경(arrayCopy);
    } }>저장</button>
</div>
<Profile></Profile>

<br/><br/>
<button onClick={()=>{modal변경(!modal)}}>
                               모달열고닫기</button>

      {/*누른제목이라는 state를 누른제목1이라는 이름으로 보내겠다*/}
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}/> 
        : null
      }

   </div>
  );
}
//props로 자식에게 state전해주는법 
//🎈1. <자식컴포넌트 작명={state명} /> 
//🎈2. 자식컴포넌트에서 props파라미터 입력 후 사용


//컴포넌트 만들기(대문자로시작) //html관리가 편해짐 
function Modal(props){ //이 props에는 부모에게 전달받은 state 모든게 들어있음
  return (
    <div className="modal" key={i}>
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
//react 구문법 : 클래스문법
//class : 변수와 함수를 보관하는 덩어리
class Profile extends React.Component {
  constructor(){
    super();
    this.state = {name:'Kim', age:30}
    //this.changeName = this.changeName.bind(this);
  }
  
  // changeName(){
  //   this.setState({name:'Park'})
  // }

  changeName = () => {
    this.setState({name:'Park'})
  }
   


  render(){
    return(
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name}입니다</p>
        {/* <button onClick={()=>{this.setState({name:'Park'})}}>이름변경 버튼</button> */}
        {/**setStatestate : 변경함수와 다르게 변경할 state만 넣음*/}
        {/* <button onClick={this.changeName.bind(this)}>버튼</button> */}
        <button onClick={this.changeName}>버튼</button>
      </div>
    )
  }
}


export default App;
