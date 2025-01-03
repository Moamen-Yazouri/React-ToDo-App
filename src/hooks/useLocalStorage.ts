import { useEffect, useState } from "react"
const useLocalStorage = (state: any, storageKey: string) => {
    const[storedData, setStoredData] = useState<any>();

    useEffect(()=>{
        const strData = localStorage.getItem(storageKey);
        try{
            if(strData) {
                setStoredData(JSON.parse(strData));
            }
            else {
                setStoredData(null)
            }
        }
        catch {
            setStoredData(strData)
        }
    }, []);

    useEffect(() => {
        if(typeof state === 'object') {
            localStorage.setItem(storageKey, JSON.stringify(state));
        }
        else {
            localStorage.setItem(storageKey, state.toString());
        }
    }, [state]);

    return {storedData};
}
export default useLocalStorage; 