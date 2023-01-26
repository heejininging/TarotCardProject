
import styled from "./GenderStyle.module.css"

const GenderChoice = () => {

    return (
        <>  
            <div className={styled.bg}>
                <div className={styled.container}>
                    <a href="#"><img src="img/tarot-pj.png" alt="logo"/></a>
                </div>
                <h1 className={styled.txt}>너의 성별을 알려줘</h1>
                <div className={styled.potal}>
                    <a href="#" className={styled.left}>Male</a>
                    <a href="#" className={styled.right}>Female</a>
                </div>
            </div>
        </>
    )
}

export default GenderChoice;