//import logo from './logo.svg';
import './App.css';
import { RiHomeHeartFill } from 'react-icons/ri';
//import Lotto from './05/Lotto';

// import MyList from './04/MyList';
// import MyDiv1 from './03/MyDiv1';
//import Hello from './01/Hello';
// import MyClock from './02/MyClock';
import Traffic from './06/Traffic';
// 직접 만들 컴포넌트들이 모인 루트 컴포넌트 ( 애플리케이션의 구조와 라우팅을 정의하는데 사용, 핵심로직과 스타일 정의, index.js에서 App.js를 사용하기 위해서 export 키워드 사용)
//Hello 컴포넌트는 사용자 정의 테그가 됨,  <Hello /> 사용 가능
//return 안에서는 한개의 태그가 반환되어야 함. 여러개의 요소를 반환하고 싶다면 fragment <fragment><fragment/>를 사용
// return안에서 p 태그가 여러개 사용히려면 <div> <p>2.1</p><p>2.2<p>  </div>
// for 속성은 htmlFor로 사용함. class은 classnameㅇ 로 사용
//jsx 내부에서는 조건문을 사용할 수 없어 삼항 연자자를 사용한다.
// jsx인 아래 return{  내부에서 조건을 사용을 할수 없어 삼항 연산자를 사용하여 값을 리턴 한다.  (name === 'PNU')? <h1>{name}님 안녕하세요. </h1>: <h1Hello</h1>};
function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      {/* <header className="App-header">
        <MyClock />
      </header> */}
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200">
          <p>리액트 기초</p>
          <p>RiHomeHeartFill</p>
      </header>
      <main className="grow w-full flex justify-center items-center overflow-y-auto">
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <MyClock /> */}
        < Traffic />
      </main>
      <footer className="flex justify-center items-center h-20 bg-black text-slate-100">
        ＠ Mun Yun Gyeong

      </footer>

    </div>
  );
  
}

export default App;
