import * as express from 'express';
import PersonalAccountManager from './routes/personalAccount.route';

class App {
  public app: express.Express;

  constructor(
    private PersonalRouter = PersonalAccountManager,
  ) {
    this.app = express();
    this.config();
    this.app.get('/', (req, res) => res.json({ ok: false }));
    this.app.use('/personal', this.PersonalRouter);
  }

  private config():void {
    const accessControl: express.RequestHandler = (req, res, next) => {
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
}

// eslint-disable-next-line import/prefer-default-export
export { App };
