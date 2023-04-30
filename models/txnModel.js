module.exports = [
  {
    id: 101, // unique id
    item_name: "paycheck", //name of the transaction
    amount: 8000, //number with up to two decimals
    date: "2023-04-01", //date in a string
    from_to: "uber", //who's giving or taking (from or to)
    category: "salary", //transaction category
    note: "", //note, if there's any
    type: "deposit" //deposit or withdrawal
  },
  {
    id: 102,
    item_name: "rent",
    amount: 2500,
    date: "2023-04-02",
    from_to: "landlord",
    category: "housing",
    note: "",
    type: "withdrawal"
  },
  {
    id: 103,
    item_name: "car insurance",
    amount: 200,
    date: "2023-04-14",
    from_to: "Geico",
    category: "insurance",
    note: "",
    type: "withdrawal"
  },
  {
    id: 104,
    item_name: "electricity bill",
    amount: 80,
    date: "2023-04-07",
    from_to: "conedison",
    category: "utility",
    note: "",
    type: "withdrawal"
  },
  {
    id: 105,
    item_name: "streaming service",
    amount: 20,
    date: "2023-04-15",
    from_to: "netflix",
    category: "subscription",
    note: "premium",
    type: "withdrawal"
  },
];