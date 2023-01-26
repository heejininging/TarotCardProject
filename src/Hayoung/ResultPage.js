
import axios from "axios";

const ResultPage = ()  => {

    const handleClick = () =>{

        axios.get("TarotResult.json").
        then(console.log("성공!")).
        catch("실패ㅜ");

        fetch("TarotResult.json").then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            console.log(data.resultNo);

        });

        
        

    }

    return (
        <>
        <button onClick={handleClick}>결과보기</button>
        </>
    )

}

export default ResultPage;