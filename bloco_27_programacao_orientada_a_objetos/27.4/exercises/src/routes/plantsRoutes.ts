import { Router } from 'express';
import PlantController from '../controllers/PlantController';
import PlantService from '../services/PlantService';

const plantService = new PlantService();
const plantController = new PlantController(plantService);

const router = Router();

router.get('/', plantController.getAll);
router.get('/:id', plantController.getOne);
router.get('/sunny/:id', plantController.getSunnyById);
router.post('/', plantController.create);
router.put('/:id', plantController.update);
router.delete('/:id', plantController.delete);

export default router;
