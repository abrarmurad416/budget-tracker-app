const incomeColors = [
    "#0D2419",
    "#133D24",
    "#1C532B",
    "#237037",
    "#2E9F45",
    "#39C24F",
    "#43D05A",
    "#4EEB64",
    "#5EFF7C",
    "#89FFA8",
];
const expenseColors = [
    "#910D19",
    "#9C1324",
    "#A91C2B",
    "#B42337",
    "#BF2E45",
    "#C9394F",
    "#D3435A",
    "#DE4E64",
    "#EA5E7C",
    "#FF8FB1",
];

export const incomeCategories = [
    { type: "Business", amount: 0, color: incomeColors[0] },
    { type: "Investments", amount: 0, color: incomeColors[1] },
    { type: "Passive Income", amount: 0, color: incomeColors[2] },
    { type: "Deposits", amount: 0, color: incomeColors[3] },
    { type: "Honorarium", amount: 0, color: incomeColors[4] },
    { type: "Bonuses", amount: 0, color: incomeColors[5] },
    { type: "Salary", amount: 0, color: incomeColors[6] },
    { type: "Savings", amount: 0, color: incomeColors[7] },
    { type: "Rental income", amount: 0, color: incomeColors[8] },
    { type: "Other", amount: 0, color: incomeColors[9] },
];

export const expenseCategories = [
    { type: "Bills", amount: 0, color: expenseColors[0] },
    { type: "Car", amount: 0, color: expenseColors[1] },
    { type: "Clothes", amount: 0, color: expenseColors[2] },
    { type: "Travel", amount: 0, color: expenseColors[3] },
    { type: "Food", amount: 0, color: expenseColors[4] },
    { type: "Shopping", amount: 0, color: expenseColors[5] },
    { type: "House", amount: 0, color: expenseColors[6] },
    { type: "Entertainment", amount: 0, color: expenseColors[7] },
    { type: "Phone", amount: 0, color: expenseColors[8] },
    { type: "Other", amount: 0, color: expenseColors[9] },
];

export const resetCategories = () => {
    incomeCategories.forEach((c) => (c.amount = 0));
    expenseCategories.forEach((c) => (c.amount = 0));
};
