import { setupServer } from "msw/node";
import { handlers } from "./user/handlers";
export const server = setupServer(...handlers);
