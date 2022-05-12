import express from 'express';
import { getAllPayments, getPayment, createPayment, updatePayment, deletePayment } from '../controllers/PaymentController.js';

const router = express.Router()

router.get('/', getAllPayments)
router.get('/:id', getPayment)
router.post('/', createPayment)
router.put('/:id', updatePayment)
router.delete('/:id', deletePayment)

export default router