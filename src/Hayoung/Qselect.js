import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss"; // core Swiper
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, {Navigation, Pagination} from "swiper";

import styled from "./GenderStyle.module.css"

const Qselect = () =>{

    SwiperCore.use([Navigation, Pagination]);

    return (

            
            <div className={styled.bg}>

                <div className={styled.container}>
                    <a href="#"><img src="img/tarot-pj.png" alt="logo"/></a>
                </div>

                <h1 className={styled.txt}>궁금한 질문을 골라봐</h1>

                <div className={styled.content}>
                    <Swiper     className={styled.swiperStyle}
                                slidesPerView={3} //한번에 보이는 슬라이드 개수
                                centeredSlides={true} //슬라이드 센터고정
                                loop ={true} //슬라이더 무한반복
                                navigation
                                scrollbar={{ draggable: true }}
                                Pagination={{ clickable: true }} // 점을 클릭했을 때, 클릭한 슬라이드로 이동
                                speed={500} // 슬라이드가 넘어가는 속도를 조정 단위는 ms
                            >
                            <SwiperSlide><a href="#" className={styled.selq}>총운</a></SwiperSlide>
                            <SwiperSlide><a href="#" className={styled.selq}>애정운</a></SwiperSlide>
                            <SwiperSlide><a href="#" className={styled.selq}>금전운</a></SwiperSlide>
                            <SwiperSlide><a href="#" className={styled.selq}>학업, 성적운</a></SwiperSlide>
                    </Swiper>
                </div>

            </div>
    )
    
}

export default Qselect;