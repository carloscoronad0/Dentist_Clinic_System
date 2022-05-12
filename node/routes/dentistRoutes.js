import express from 'express';
import { getAllDentists, getDentist, createDentist, updateDentist, deleteDentist } from '../controllers/DentistController.js';

const router = express.Router()

router.get('/', getAllDentists)
router.get('/:id', getDentist)
router.post('/', createDentist)
router.put('/:id', updateDentist)
router.delete('/:id', deleteDentist)

export default router