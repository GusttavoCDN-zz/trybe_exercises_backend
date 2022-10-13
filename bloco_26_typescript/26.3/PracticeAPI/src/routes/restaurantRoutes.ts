import { Router } from "express";
import restaurantController from "../controllers/RestaurantController";

const router = Router();

router.get("/", restaurantController.getAll);
router.get("/:id", restaurantController.getOne);
router.post("/", restaurantController.create);
router.put("/:id", restaurantController.update);
router.delete("/:id", restaurantController.delete);

export default router;