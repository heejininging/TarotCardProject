import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss"; // core Swiper
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, {Navigation, Pagination} from "swiper";
import {Link} from "react-router-dom";

import styled from "./GenderStyle.module.css"
import { Fragment, useContext } from "react";
import DataContext from "./ContextAPI";

const Qselect = () =>{

    SwiperCore.use([Navigation, Pagination]);

    const {info, action} = useContext(DataContext);
    const handleClick = (e) => {
        action.setData({data:e.target.lastChild});
    }
    console.log(info);//선택한 값
    return (

        <Fragment>

            <div className={styled.bg}>

                <div className={styled.container}>
                    <span><Link to="/main"><img src="img/tarot-pj.png" alt="logo"/></Link></span>
                </div>
                
                <h1 className={styled.txt}>{`${info.data.data}`}구나! 궁금한 질문을 골라봐</h1>

                <div className={styled.content} onClick={handleClick}>
                    <Link to="/suffle">
                    <Swiper     className={styled.swiperStyle}
                                slidesPerView={3} //한번에 보이는 슬라이드 개수
                                centeredSlides={true} //슬라이드 센터고정
                                loop ={true} //슬라이더 무한반복
                                navigation
                                scrollbar={{ draggable: true }}
                                Pagination={{ clickable: true }} // 점을 클릭했을 때, 클릭한 슬라이드로 이동
                                speed={500} // 슬라이드가 넘어가는 속도를 조정 단위는 ms
                            >
                            <SwiperSlide><span className={styled.selq}>총운</span></SwiperSlide>
                            <SwiperSlide><span className={styled.selq}>애정운</span></SwiperSlide>
                            <SwiperSlide><span className={styled.selq}>금전운</span></SwiperSlide>
                            <SwiperSlide><span className={styled.selq}>학업, 성적운</span></SwiperSlide>
                    </Swiper>
                    </Link>
                </div>

            </div>
        </Fragment>
    )
    
}

export default Qselect;