"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const next_1 = __importDefault(require("next"));
const routes_1 = __importDefault(require("./routes"));
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dev });
app.prepare()
    .then(() => {
    const fastify = fastify_1.default({
        logger: dev
    });
    fastify.use(routes_1.default.getRequestHandler(app));
    fastify.listen(port, (err, address) => {
        if (err)
            throw err;
        console.log(`> Ready on ${address}`);
    });
});
//# sourceMappingURL=index.js.map