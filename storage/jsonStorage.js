import { expenses } from "../data/expense";

export function expenseToJson(Expense){
    return JSON.stringify(Expense,null,2);
}

export function expensesFromJSON(json){ 
    return JSON.parse(json);
}