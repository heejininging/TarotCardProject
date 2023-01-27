
// import { useEffect, useState } from 'react';
import styled from './Home_J.module.css';

const Home_J = () => {

    // const arr = [
    //     {src : '/img/tarot-pj.png'},
    //     // "연애에 관한 궁금증! 다 해소해줄게!",
    //     {src : '/img/subtitle_J.svg'},
    //     {src : '/img/card_J.gif'}
    // ]

    // const [data, setData] = useState(arr); //state로 arr를 관리

    // const newArr = data.map((item, index) =>
    //     <img key={index} src={item}/>
    // );

    // useEffect( () => {
    //     // setInterval( () => newArr(), 1000);
    // })

    return(
        
        <div>
            <img className={styled.back_J} src="/img/background_J.svg"/> 
            {/* {data} */}
            <img className={styled.logo_J} src="/img/tarot-pj.png"/> 
            <h1 className={styled.text_J}>연애에 관한 궁금증! 다 해소해줄게!</h1>
            <img className={styled.subtitle_J} src="/img/subtitle_J.svg"/> 
            <img className={styled.card_J} src="/img/card_J.gif"/>
            <button className={styled.btn1_J}>타로점 보러가기</button> <br/> 
            <button className={styled.btn2_J}>연애 유형 테스트 하기</button> 
        </div>
    )
}
export default Home_J;