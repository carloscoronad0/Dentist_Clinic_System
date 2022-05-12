import express from 'express';
import { getAllMoneyInfo, getMoneyInfo } from '../controllers/MoneyPerDayController.js';

const router = express.Router()

router.get('/', getAllMoneyInfo)
router.get('/:date', getMoneyInfo)

export default router