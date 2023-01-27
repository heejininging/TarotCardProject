
// import { useEffect, useState } from 'react';
import styled from '../Jisoo/Home_J.module.css';
import {Link, Outlet} from "react-router-dom";

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
            <img className={styled.back_J} src="img/background_J.svg" alt="one"/> 
            {/* {data} */}
            <img className={styled.logo_J} src="img/tarot-pj.png" alt="two"/> 
            <h1 className={styled.text_J}>연애에 관한 궁금증! 다 해소해줄게!</h1>
            <img className={styled.subtitle_J} src="/img/subtitle_J.svg" alt="three"/> 
            <img className={styled.card_J} src="img/card_J.gif" alt="four"/>
            <button className={styled.btn1_J}><Link to="/gender">타로점 보러가기</Link></button> <br/> 
            <button className={styled.btn2_J}><Link to="/gender">연애 유형 테스트 하기</Link></button> 
            <Outlet />
        </div>
        
    )
}
export default Home_J;