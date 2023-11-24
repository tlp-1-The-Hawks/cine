import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import fileUpload from "express-fileupload";
import { environments } from './config/environments.js';
import { startDb } from './config/associations.js';
import { hallrouter } from './routes/hall.routes.js';
import { type_emissionRouter } from './routes/type_emission.routes.js';
import { cinemaRouter } from './routes/cinema.routes.js';
import { commentRouter } from './routes/comment.routes.js';
import { authRouter } from './routes/auth.routes.js';
import { infoMovierouter } from './routes/infomovie.routes.js';
import { genrerouter } from './routes/genre.routes.js';
import { bookingRouter } from './routes/booking.routes.js';
import { provinceRouter } from './routes/provinces.routes.js';
import { movieRouter } from './routes/movies.routes.js';
import { seatingRouter } from './routes/seating.routes.js';
import { locationRouter } from './routes/location.routes.js';
import { requestCineRouter } from './routes/requestcine.routes.js';
import { handleErrors } from './middlewares/handleError.js';
import { createLogs } from './helpers/createLogs.js';
import paymentsRoutes from './routes/payment.routes.js';
import { Server as SocketServer } from 'socket.io';
import { createServer } from 'http';
import __dirname from './helpers/__dirname.js';


const app = express();
const httpServer = createServer(app);
const io = new SocketServer(httpServer);

app.use(express.json());
app.use(cors());
app.use(
  morgan('combined', {
    stream: {
      write: (message) => {
        const logDirectory = __dirname;
        createLogs(message, logDirectory, 'logs');
      },
    },
  })
);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(fileUpload());

app.use('/api', cinemaRouter);
app.use('/api', commentRouter);
app.use('/api', movieRouter)
app.use('/api', hallrouter);
app.use('/api', infoMovierouter);
app.use('/api', genrerouter);
app.use('/api', bookingRouter)
app.use('/api', type_emissionRouter)
app.use('/api', paymentsRoutes)
app.use('/api', provinceRouter)
app.use('/api', requestCineRouter)
app.use('/api', locationRouter)
app.use('/api', seatingRouter)
app.use('/auth', authRouter);
app.use(handleErrors);

io.on('connection', (socket) => {
  console.log('Cliente conectado', socket.id);

  socket.emit('message', 'Bienvenido al chat');

  socket.on('new-message', (data) => {
    console.log(data);
    io.emit('new-message', data);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado', socket.id);
  });
});

httpServer.listen(environments.PORT, () => {
  console.log(`Server on http://localhost:${environments.PORT}`);
  startDb();
});




