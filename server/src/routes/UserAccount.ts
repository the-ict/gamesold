const router = require("express").Router();
import UserAccount from "../models/UserAccount";
import { Request, Response, NextFunction } from "express";

// findind a user account by user id on the database
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userAccount = await UserAccount.findById(req.params.id);
    if (userAccount) {
      res.json(userAccount);
    } else {
      res.status(404).send("User account not found");
    }
  } catch (error) {
    next(error);
  }
});

// get all user accounts
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userAccounts = await UserAccount.find();
    res.json(userAccounts);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/save",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, accountId } = req.body;
      const userAccount = await UserAccount.findById(userId);

      if (!userAccount) {
        return res.status(404).send("User account not found");
      }

      if (!userAccount.savedAccounts.includes(accountId)) {
        userAccount.savedAccounts.push(accountId);
        await userAccount.save();
      }

      res.status(200).json(userAccount);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/unsave",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, accountId } = req.body;
      const userAccount = await UserAccount.findById(userId);

      if (!userAccount) {
        return res.status(404).send("User account not found");
      }

      const index = userAccount.savedAccounts.indexOf(accountId);
      if (index !== -1) {
        userAccount.savedAccounts.splice(index, 1);
        await userAccount.save();
      }

      res.status(200).json(userAccount);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
