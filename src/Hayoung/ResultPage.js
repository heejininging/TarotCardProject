
import { useContext,useEffect,useState } from "react";
import TarotData from "./TarotData.json";
import styled from "./GenderStyle.module.css"
import {Link} from "react-router-dom";
import DataContext from "./ContextAPI";



const ResultPage = ()  => {

    const {info, action} = useContext(DataContext);
    const test = TarotData.result;
    /* console.log(test); */
    
    
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
            console.log(info.data);
        }); 
    },[])
    console.log(info);

    return (
        <>
        <div className={styled.bg}>
            <div className={styled.container}>
                <a href="#"><Link to="/main"><img src="img/tarot-pj.png" alt="logo"/></Link></a>
            </div>

            {/* 여기의 src에다가 선택한 이미지src주소를 넣어주기~~~!!!! */}
            <img src={`img/opencard${info.data}.png`} alt="tarot" style={{width:"200px" , marginTop:"50px"}}></img>
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