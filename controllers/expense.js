const express = require("express");
const Expense = require("../models/expenseSchema");
const router = express.Router();

router.get("/get", async (req, res) => {
  console.log("✅✅✅");
  const data = await Expense.find();
  console.log("data", data);
  res.json({
    data: data,
  });
});

router.post("/create", async (req, res) => {
  const createExpense = await Expense.create({
    description: req.body.description,
    amount: req.body.amount,
    category: req.body.category,
  });
  console.log("expense", createExpense);
  if (createExpense) {
    res.status(200).json({
      message: "Expense created sucessfully",
    });
  } else {
    res.status(400);
  }
});

router.delete("/delete", async (req, res) => {
  const findExpense = await Expense.findOne(req.body.id);
  if (findExpense) {
    const deleteExpense = await Expense.remove();
  }
  res.status(200).json({
    message: "Expense deleted sucessfully",
  });
});

module.exports = router;
