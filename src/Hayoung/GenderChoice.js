
import styled from "./GenderStyle.module.css"
import {Link, Outlet} from "react-router-dom";
import { Fragment, useContext} from "react";
import DataContext from "./ContextAPI";

const GenderChoice = () => {

    const {info, action} = useContext(DataContext);

    const handleClick = (e)=>{
        action.setData({data:e.target.lastChild});
        console.log(info); //text
    } 
    
    return (

        <Fragment>
            <div className={styled.bg}>
                <div className={styled.container}>
                    <span><Link to="/main"><img src="img/tarot-pj.png" alt="logo"/></Link></span>
                </div>
                <h1 className={styled.txt}>너의 성별을 알려줘</h1>
                <div className={styled.potal}>
                    <span className={styled.left} onClick={handleClick} ><Link to="/select">남자</Link></span>
                    <span className={styled.right} onClick={handleClick}><Link to="/select">여자</Link></span>
                </div>
                <Outlet/>
            </div>
        </Fragment>

    )
}

export default GenderChoice;