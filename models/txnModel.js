module.exports = [
  {
    id: 101, // unique id
    item_name: "Paycheck", //name of the transaction
    amout: 4000, //number with up to two decimals
    date: "Apr 1, 2023", //date in a string
    from: "Work", //who's giving or taking (from or to)
    tag: "Salary", //tag for filtering
    category: "Income" //income or expense
  },
  {
    id: 102,
    item_name: "Rent",
    amout: 2000,
    date: "Apr 2, 2023",
    from: "Landlord",
    tag: "Housing",
    category: "Expense"
  },
  {
    id: 103,
    item_name: "Electricity Bill",
    amout: 60,
    date: "Apr 7, 2023",
    from: "ConEdison",
    tag: "Utility",
    category: "Expense"
  },
  {
    id: 104,
    item_name: "Grocery",
    amout: 200,
    date: "Apr 10, 2023",
    from: "Grocery Stor",
    tag: "Grocery",
    category: "Expense"
  },
  {
    id: 105,
    item_name: "Takout",
    amout: 18.75,
    date: "Apr 11, 2023",
    from: "Restaurant",
    tag: "Food",
    category: "Expense"
  },
  {
    id: 106,
    item_name: "Disney Plus",
    amout: 19.99,
    date: "Apr 14, 2023",
    from: "Disney",
    tag: "Subscription",
    category: "Expense"
  },
  {
    id: 107,
    item_name: "Netflix Premium",
    amout: 19.99,
    date: "Apr 15, 2023",
    from: "Netflix",
    tag: "Subscription",
    category: "Expense"
  },
  {
    id: 108,
    item_name: "Uber Payout",
    amout: 300,
    date: "Apr 20, 2023",
    from: "Uber",
    tag: "Side job",
    category: "Income"
  },
];