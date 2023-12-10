import { setupWorker } from "msw/browser";
import { handlers } from "./user/handlers";

export const worker = setupWorker(...handlers);
