module.exports = [
  {
    id: 101, // unique id
    item_name: "paycheck", //name of the transaction
    amount: 8000, //number with up to two decimals
    date: "2023-04-01", //date in a string
    from_to: "uber", //who's giving or taking (from or to)
    tag: "salary", //tag for filtering
    note: "",
    category: "income" //income or expense
  },
  {
    id: 102,
    item_name: "rent",
    amount: 2500,
    date: "2023-04-02",
    from_to: "landlord",
    tag: "housing",
    note: "",
    category: "expense"
  },
  {
    id: 103,
    item_name: "car insurance",
    amount: 200,
    date: "2023-04-14",
    from_to: "Geico",
    tag: "insurance",
    note: "",
    category: "expense"
  },
  {
    id: 104,
    item_name: "electricity bill",
    amount: 80,
    date: "2023-04-07",
    from_to: "conedison",
    tag: "utility",
    note: "",
    category: "expense"
  },
  {
    id: 105,
    item_name: "netflix",
    amount: 20,
    date: "2023-04-15",
    from_to: "netflix",
    tag: "subscription",
    note: "premium",
    category: "expense"
  },
];