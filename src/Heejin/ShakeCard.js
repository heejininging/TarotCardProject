
import { useContext, useEffect, useState } from "react";
import Shake from "./Shake.css";
import 'animate.css';
import styled from "../Hayoung/GenderStyle.module.css";
import {Link} from "react-router-dom";
import DataContext from "../Hayoung/ContextAPI";


const ShakeCard = () => {

    //전역데이터 가져와서 어떤 운세를 골랐는지 띄우기
    const {info, action} = useContext(DataContext);
    console.log(info);
    console.log(info.data);

    // for문으로 랜덤한 20개의 숫자 set배열에 저장하기
    let arr = new Set();
    for (let i = 0; i < 100; i++) {
        let n = Math.floor(Math.random() * 20) + 1;
        if (arr.size !== 20) {
            arr.add(n);
        } else if (arr.size === 20) {
            break;
        }
    }
    // const [cardNum , setCard] = useState(arr);
    // console.log(cardNum);


    // let cardOpen = false;

    //카드 클릭 시 앞면으로 변경되는 함수
    const handleChange = (e) => {
        for (let num = 0; num < 20; num++) {
            if (e.target.dataset.id == num) {
                const dec = `img/opencard${[...arr][num]}.png`;
                e.target.src = dec;
                
                //선택한 이미지의 주소를 context데이터에 추가
                action.setData({data: e.target.src});
                break;
            }
        }
        //클릭하면 그 이미지태그에 클래스 추가
        let tt = e.target.classList.add('zoom');
        console.log(e.target.className);

        // cardOpen = true;

        // 선택결과페이지로 넘어가기 (나쁜자식)
        // if (cardOpen === true) {
        //     // 5초뒤에 화면으로 넘어가게 만들기
        //     setInterval(animation => {
        //         window.location.href = "/choice"
        //     }, 3000)
        // }
    }


    //섞는거 멈추기 버튼 누르면 실행되는 함수
    // const [button, setButton] = useState();
    const CardChoice = () => {
        setComent('카드를 선택하세요.');
        setView(CardRandom);
        setShake('');

        const btn2 = document.getElementById('btn2');
        btn2.style.visibility = "visible";

        //버튼삭제하기
        const btn1 = document.getElementById('btn1');
        btn1.remove();

    }

    //섞이는 카드 표현
    var CardBox = [];
    for (var i = 0; i <= 3; i++) {
        CardBox.push(
            <div className={`img-move${i}`} key={i}>
                <div className={`card-row-${i}`}>
                    <img className="tarot-card" src="img/card.png" alt="image"></img>
                </div>
            </div>
        );
    }
    //섞이는 카드 useState로 화면표현
    const [shake, setShake] = useState(CardBox);


    //멈춰있는 카드들 표현
    var CardRandom = [];
    for (var a = 0; a <= 19; a++) {
        CardRandom.push(
            <div className="card-set" onClick={handleChange} key={a}>
                <img src="img/card.png" alt="image" className="tarot-card" data-id={a}></img>
            </div>
        );
    }
    //멈춰있는 카드 useState로 화면표현
    const [view, setView] = useState();

    const [coment, setComent] = useState(`${info.data.data}을 선택하셨군요! 두구두구`);

    return (
        <div className={styled.bg}>
            <div className={styled.container}>
                <span><Link to="/main"><img src="img/tarot-pj.png" alt="logo" /></Link></span>
            </div>
            <div className={styled.txt}>
                {/* 선택한 운세리스트의 종류 화면에 출력 */}
                <p>{coment}</p>
            </div>
            <div className="items-center">
                <div className="img-float">
                    {shake}
                    {view}
                </div>
            </div>
            <div>
                <button onClick={CardChoice} className="BtnDesign" id="btn1">카드 선택하기</button>
                <button className="BtnDesign" id="btn2"><Link to="/choice">결과페이지이동</Link></button>
            </div>

        </div>
    )
}
export default ShakeCard;