
import { useState } from "react";
import TarotData from "./TarotData.json";
import styled from "./GenderStyle.module.css"


const ResultPage = ()  => {

    const test = TarotData.result;
    /* console.log(test); */


    const [list, setList] = useState();

    fetch("https://raw.githubusercontent.com/921126/react-pj20230125/hayoung/src/Hayoung/TarotResult.json")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{

        const tarotresult = data.result.map((item, index) => 
            <li key={index} className={styled.rcontent}>{item.content}</li>
        );  
        setList(tarotresult);

    }); 

    return (
        <>
        <div className={styled.bg}>

            <div className={styled.container}>
                <a href="#"><img src="img/tarot-pj.png" alt="logo"/></a>
            </div>

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