const router = require("express").Router();
import GameAccount from "../models/GameAccount";
import UserAccount from "../models/UserAccount";
import { Request, Response, NextFunction } from "express";

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const gameAccounts = await GameAccount.find();
    res.json(gameAccounts);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/search",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, platform, mixPrice, maxPrice } = req.query;

      const query: any = {};
      if (name) {
        query.name = { $regex: name, $options: "i" };
      }
      if (platform) {
        query.game = { $regex: platform, $options: "i" };
      }
      if (mixPrice && !isNaN(Number(mixPrice))) {
        query.price = { $gte: Number(mixPrice) };
      }

      if (maxPrice && !isNaN(Number(maxPrice))) {
        query.price = { ...query.price, $lte: Number(maxPrice) };
      }

      const gameAccounts = await GameAccount.find(query);

      console.log(gameAccounts, "gameAccounts that got");

      res.json(gameAccounts);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const gameAccount = await GameAccount.findById(req.params.id);
    if (gameAccount) {
      res.json(gameAccount);
    } else {
      res.status(404).send("Game account not found");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newGameAccount = await GameAccount.create(req.body);
    const user = await UserAccount.findById(newGameAccount.author);
    if (user?._id) {
      user.accounts.push(String(newGameAccount._id));
      await user.save();
    }

    res.status(201).json(newGameAccount);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedGameAccount = await GameAccount.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedGameAccount) {
      res.json(updatedGameAccount);
    } else {
      res.status(404).send("Game account not found");
    }
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const gameAccount = await GameAccount.findById(req.params.id)
      const deleted = await GameAccount.findByIdAndDelete(req.params.id);
      await UserAccount.findByIdAndUpdate(gameAccount?.author, {
        $pull: { accounts: req.params.id },
      });

      if (deleted) {
        res.status(204).send("Game account deleted successfully");
      } else {
        res.status(404).send("Game account not found");
      }
    } catch (error) {
      next(error);
    }
  }
);

router.get("/search/most-expensive", async (req: Request, res: Response) => {
  try {
    const mostExpensive = await GameAccount.find({ status: "available" })
      .sort({ price: -1 })
      .limit(8);
    res.json(mostExpensive);
  } catch (error) {
    res.status(404).send("No accounts found");
  }
});

router.get("/author/:authorId", async (req: Request, res: Response) => {
  try {
    const gameAccounts = await GameAccount.find({
      author: req.params.authorId,
    });
    res.json(gameAccounts);
  } catch (error) {
    res.status(404).send("No accounts found");
  }
});

router.post("/:id/buy", async (req: Request, res: Response) => {
  try {
    const { buyer } = req.body;

    const gameAccount = await GameAccount.findById(req.params.id);
    const user = await UserAccount.findById(buyer);

    if (gameAccount?._id && user?._id) {
      gameAccount.buyer = buyer;
      gameAccount.status = "sold";
      user.tranzactions.push(String(gameAccount._id));
      await gameAccount.save();
      await user.save();
      res.json(gameAccount);
    }
  } catch (error) {
    res.status(500).json("500 internal server error");
  }
});

module.exports = router;
