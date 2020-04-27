import { Router } from "express";

import * as infoController from "./controllers/info";

const router: Router = Router();

router.get("/", infoController.index);
// Adicione seus Routers aqui apontando para os seus Controllers

export default router;
