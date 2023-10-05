var maxProfit = (prices) => {
    buy = 0, sell = 1, max_profit = 0;
    while (sell < prices.length) {
        if (prices[sell] < prices[buy]) {
            buy = sell;
        }
        max_profit = Math.max(prices[sell] - prices[buy], max_profit);
        sell++;
    }
    return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));