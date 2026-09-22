export function monthlySummary(expenses){
    return expenses.reduce((summary,expense)=>{
        const month = expense.date.slice(0, 7);
        if (!summary[month]) {
            summary[month] = 0;
        }
        summary[month]+=expense.amount;

        return summary;
    },{});
}