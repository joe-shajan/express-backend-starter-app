"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv = tslib_1.__importStar(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const validateEnv_1 = tslib_1.__importDefault(require("./utils/validateEnv"));
dotenv.config();
(0, validateEnv_1.default)();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
/**
 * after installing packages install win-node-env if you are using windows
 *
 * npm install -g win-node-env
 */
//# sourceMappingURL=index.js.map