//공공데이타를 가져오는 작업을 수행,컴포넌트가 생성될때 데이타 가져옴
//상태변수 useState, 
import { useState , useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
    //전체 fetch 데이타
    const [tdata, setTdata] = useState();

    // 대분류 fetch / 대분류를 저장하는 state 변수 선언
    const [c1, setC1 ] = useState();

    //선택된 대분류를 저장하는 state 변수 선언
    const [selC1, setSelC1] = useState();

    //중분류 fetch / 중뷴류를 저장하는 state 변수 선언
    const [c2, setC2] = useState();
    //선택된 중분류를 저장하는 state 변수 선언
    const [selC2, setSelC2] = useState();


    //상세정보
    const [info, setInfo] = useState();

    const getFetchData = () => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`;
        url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;
        console.log(url);
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.data) )
            .catch(err => console.error(err)) ;
    
    }

    //컴포넌트 생성시 fetch 를 할때 , 디팬던씨 배열 [] 이 비어있는 거는 한번  사용
    useEffect( () => {
        getFetchData();
    }, []
    
    );
    
    
  //tdata가 변경되었을떄, 디팬던씨 array에  tdata
  useEffect( () => {
    
    if (!tdata) return;

    //대분류를 만들기
    let tm = tdata.map( itme => itme['사고유형대분류']     );

    //18건 중 중복되지 않은 건들만 추출함  / 전개를 할거고 Set 함수 사용
    tm = [... new Set(tm)] ; //집합을 만들ㅇ줌
    setC1(tm); // 대분류 생성
    //버튼이 눌려졌을떄 선택된 대분류 값을 저장 해야 함
  }, [tdata]

  
  );
//중분류 만들기, selC1 대분류 선택된 값
  useEffect( () => {
    //중분류 만들기
    if (!tdata || !c1 || !selC1)  return;

    let tm = tdata.filter(item=>item['사고유형대분류'] == selC1)
                    .map(item => item['사고유형']);
    
    setC2(tm);
  }, [selC1]
  );

  useEffect( () => {
    if (!selC2) return;

    let tm = tdata.filter(item => item['사고유형대분류'] == selC1 
                                && item['사고유형'] == selC2)[0];
    console.log('선택된 항목', tm[0]);

    const infoKey = ['사고건수', '사망자수','중상자수','경상자수', '부상신고자수'] ;

    tm = infoKey.map( item => <div key={item} className="flex"> 
                                <div className=" w-1/2 
                                h-10 flex justify-center items-center
                                bg-lime-600 text-white font-bold"
                                 >
                                    {item}
                                </div>
                                <div className=" w-1/2 h-10 flex justify-center items-center
                                border"
                                >
                                    {parseInt(tm[item]).toLocaleString()}
                                </div>
                            </div>

    
    );
    setInfo(tm);
  }, [selC2]

  );

//{c1 &&  는 c1이 반드시 있어야 TrafficNav 생성이 가능하니 중괄호 {}를 사용하여 수식 적용가능하게 해줌  c1&& &&연산자를 사용하여 c1반드시 있어야 생성되게 함
  return (
    <div className="w-full h-full flex flex-col
                    justify-center items-center">
        { c1 && <TrafficNav 
                title='대분류' 
                c= {c1} 
                sel= {selC1} 
                setSel={setSelC1}
        />
        }

        { c2 && <TrafficNav 
                title='사고유형' 
                c= {c2} 
                sel= {selC2} 
                setSel={setSelC2}
        />
        }
        <div className=" w-full grid grid-cols-1 
                         md:grid-cols-2 lg:grid-cols-5 gap-2">
            {info}
        </div>

    </div>
  )
}
