import { winningLottoCountPrice, number } from "../constants.js";
export default class Calculator {

    static divide(num1, num2) {
        return num1/num2;
    }

    static sum(statisticsCountMap) {
        const total = Array.from(statisticsCountMap).reduce((total, [key, value]) => {
            const prizeInfo = winningLottoCountPrice.find(item => item.count === key);
            if (prizeInfo) {
                total += parseInt(prizeInfo.price.replace(/,/g, "")) * value;
            }
            return total;
        }, number.DEFAULT_COUNT);

        return total;
    }

    static earningsRate(userMoney, earnMoney) {
        return ((earnMoney/userMoney) * number.HUNDRED).toFixed(number.ROUND_NUMBER);
    }
}