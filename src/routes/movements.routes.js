import { Router } from 'express'; 
import { movementController } from '../controllers/movement.controller.js'

const router = Router();

router.get('/movimientos', movementController.getAllMovements);

router.get('/movimientos/deudas', movementController.getAllDeudas);

router.get('/movimientos/prestamos', movementController.getAllPrestamos);

export default router;