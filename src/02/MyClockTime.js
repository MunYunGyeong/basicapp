import styles from './MyClockTime.module.css';
import { useState, useEffect } from 'react';  //1초에 한번씩 분촉 변경되어야 하기 떄문에 useEffect 사용한다ㅛㅕㅜㅏ1024ㅛㅛㅛㅛ

function MyClockTime(){
    // const getTimeString = () => {
    //     return new Date.toLocalTimeString();
    // }
    const [ctime, setCtime] = useState(new Date()); // 초기값 셋팅
//useEffect 에서 디팬던씨가 빈배열 [] 로 들어가면 맨처음 한번만 실해
    useEffect( () => {
        //1초에 한번씩 cTiem 을 갱신시킴
        const tm = setInterval(() => {
            setCtime(new Date());
        }, 1000);  //1초에 한번씩 실행됨
        return(() => {
            clearInterval(tm);
        })
    } , []
    );


    return(
        <div className={styles.c3}>
            {/* 현재 시각 : {new Date().toLocaleTimeString()} */}


            현재 시각 :  {ctime.toLocaleTimeString()}

           
        </div>
    );
};

export default MyClockTime;
