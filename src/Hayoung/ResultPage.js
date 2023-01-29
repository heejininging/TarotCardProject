
import { useEffect, useState } from "react";
import styled from "./GenderStyle.module.css"
import {Link} from "react-router-dom";


const ResultPage = ()  => {


    //화면에 출력될 데이터 관리용 변수
    const [list, setList] = useState();

    useEffect(()=>{

        fetch("https://raw.githubusercontent.com/921126/react-pj20230125/main/src/Hayoung/TarotData.json")
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
    
            const tarotresult = data.result.map((item, index) => 
                <li key={index} className={styled.rcontent}>{item.content}</li>
            );  
            setList(tarotresult);
    
        }); 
    },[]);

    return (
        <>
        <div className={styled.bg}>
            <div className={styled.container}>
                <span><Link to="/main"><img src="img/tarot-pj.png" alt="logo"/></Link></span>
            </div>

            <img src="img/opencard6.png" alt="tarot" style={{width:"200px" , marginTop:"50px"}}></img>
            <div className={styled.result}>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
        </>
    )

}

export default ResultPage;