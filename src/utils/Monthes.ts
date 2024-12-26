const MONTHES: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const returnMonthName = (index: number): string => {
    if(index < MONTHES.length && index >= 0) {
        return MONTHES[index];
    }
    else {
        return "Invalied Month";
    }
}
export default returnMonthName;