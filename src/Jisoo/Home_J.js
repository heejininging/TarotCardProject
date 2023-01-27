// import { useEffect, useState } from 'react';
import styled from '../Jisoo/Home_J.module.css';
import {Link, Outlet} from "react-router-dom";

const Home_J = () => {

    return(
        
        <div>
            <img className={styled.back_J} src="/img/background_J.svg"/> 
            <img className={styled.logo_J} src="/img/tarot-pj.png"/> 
            <h1 className={styled.text_J}>연애에 관한 궁금증! 다 해소해줄게!</h1>
            <img className={styled.card_J} src="/img/card_J.gif"/>
            <button className={styled.btn1_J}><Link to="/gender">타로점 보러가기</Link></button> <br/> 
            <button className={styled.btn2_J}><Link to="/gender">연애 유형 테스트 하기</Link></button> 
        </div>
    )
}
export default Home_J;