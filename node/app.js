import express from 'express'
import cors from 'cors'

// conexion a la DB
import db from "./database/db.js"

// enrutador
import appointmentRoutes from "./routes/appointmentRoutes.js"
import cancellationRoutes from "./routes/cancellationRoutes.js"
import clientRoutes from "./routes/clientRoutes.js"
import dentistRoutes from "./routes/dentistRoutes.js"
import moneyPerDayRoutes from "./routes/moneyPerDayRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use('/appointments', appointmentRoutes)
app.use('/cancellations', cancellationRoutes)
app.use('/clients', clientRoutes)
app.use('/dentists', dentistRoutes)
app.use('/moneyinfo', moneyPerDayRoutes)
app.use('/payments', paymentRoutes)

try {
    await db.authenticate()
    console.log("Conexion exitosa a la DB")
} catch (error) {
    console.log(`El error de conexion es: ${error.message}`)
}

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de la clinica dentista')
})

app.listen(8000, () => {
    console.log('Server is UP and running in http://localhost:8000/')
})