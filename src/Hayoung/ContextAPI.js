
import { createContext, useState } from "react";

//1. 초기값 설정
const DataContext = createContext({
    state : {data:''},
    action : {
        setData : () => {}
    }
})

//2. Provider 정의 -  구조분해할당은 반드시 children
const DataProvider = ({children}) => {

    const [data, setData] = useState({data:''});

    const value = {
        info: data,
        action: {setData}
    }

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    )
}

//3. 컨슈머, 프로바이더 반환
const DataConsumer = DataContext.Consumer;
export {DataProvider, DataConsumer};

//4. 기본 export
export default DataContext;
