import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import PersonalAccountManager from './routes/personalAccount.route';
import { ErrorHandler } from './helpers/errorHandler/errorHandler';
import BusinessAccountManager from './routes/businessAccount.route';

class App {
  public app: express.Express;

  constructor(
    private PersonalRouter = PersonalAccountManager,
    private BusinessRouter = BusinessAccountManager,
  ) {
    this.app = express();
    this.config();
    this.app.get('/', (_req: Request, res: Response) => res.json({ ok: true }));
    this.app.use('/personal', this.PersonalRouter);
    this.app.use('/business', this.BusinessRouter);

    this.app.use(this.errorHandler);
  }

  private config():void {
    const accessControl: express.RequestHandler = (
      _req: Request,
      res: Response,
      next: NextFunction,
    ) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: number | string):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

  // eslint-disable-next-line class-methods-use-this
  private errorHandler(
    error: Error & Partial<ErrorHandler>,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): void {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal server error';
    res.status(statusCode).json({ error: message });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { App };
