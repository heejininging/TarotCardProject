
import styled from "./GenderStyle.module.css"
import {Link, Outlet} from "react-router-dom";

const GenderChoice = () => {

    return (
        <>  
            <div className={styled.bg}>
                <div className={styled.container}>
                    <a href="#"><Link to="/main"><img src="img/tarot-pj.png" alt="logo"/></Link></a>
                </div>
                <h1 className={styled.txt}>너의 성별을 알려줘</h1>
                <div className={styled.potal}>
                    <a href="#" className={styled.left}><Link to="/select">Male</Link></a>
                    <a href="#" className={styled.right}><Link to="/select">Female</Link></a>
                </div>
            </div>
        </>
    )
}

export default GenderChoice;