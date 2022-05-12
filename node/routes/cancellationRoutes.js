import express from 'express';
import { getAllCancellations, getCancellation, createCancellation, updateCancellation, deleteCancellation } from '../controllers/CancellationController.js';

const router = express.Router()

router.get('/', getAllCancellations)
router.get('/:id', getCancellation)
router.post('/', createCancellation)
router.put('/:id', updateCancellation)
router.delete('/:id', deleteCancellation)

export default router