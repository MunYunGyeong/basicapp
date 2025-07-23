import TailButton from '../ui/TailButton'
import Ball from './Ball';
import { useState } from 'react';

export default function Lotto() {

  const [tags, setTags] = useState();


//로또 번호 생성 버튼이 이벤트 발생
    const handleOk = () => {
    let arr = [];
   //배열에 버튼이 눌러질때마다 7개의 중복되지 않은 숫자 들어감
      while(arr.length < 7){
        let n = Math.floor(Math.random() * 45 ) + 1; // 1~ 45까지 숫자가 나옴
        if (!arr.includes(n)) { //arr배열안에 n값이 있으면 true, 없으면 false , 중복되지 않으려면 false로
          arr.push(n);

        }
      }
//앞에 있는 6개 숫자, bouns 숫자 분리
      let bonus = arr.splice(-1); // 맨마지막 값을 꺼내오면 됨
      arr.sort((a,b) => (a-b) );//콜백 함수를 이용하여 정렬 arr.sort((a,b) => (a-b));
      
      console.log(arr, bonus);
      
      let tm = arr.concat(bonus);  // arr에 bonus값 합치기
      console.log(tm);

      tm = tm.map( item => <Ball n={item} key={`b${item}`}/>);// map을 이용하여 item이 반복하면서 ball를 만든다 / 수식이 들어가야 해서 백틱 문자 사용(``)

      tm.splice(6, 0, <span className="text-3xl ms-2" key="sp">+</span>); //splice 함수 안에 태그 사용가능
      setTags(tm);
      
    }
// 아래 ball객체에 실제 ball이 보여야 하고 클릭시 마다 숫자가 바뀌어야 하기에 useState import 해야 함
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="m-10">
          {tags}
        </div>
        <div>
          <TailButton caption="로또번호 생성" bcolor="blue" handleClick={handleOk} />
        </div>
    </div>
  )
}
