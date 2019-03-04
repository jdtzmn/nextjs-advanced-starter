"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fastify = require("fastify");
const Next = require("next");
const routes_1 = require("./routes");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev });
app.prepare()
    .then(() => {
    const fastify = Fastify({
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