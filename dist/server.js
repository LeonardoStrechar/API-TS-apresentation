"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const zod_1 = require("zod");
const route = (0, express_2.Router)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const TypesSchema = zod_1.z.object({
    num1: zod_1.z.number(),
    num2: zod_1.z.number()
});
route.post('/types', (req, res) => {
    const result = TypesSchema.safeParse({
        num1: req.body.num1,
        num2: req.body.num2
    });
    //  if(result.success){
    console.log(result);
    //  }
});
app.use(route);
app.listen(3001, () => 'server running on port 3001');
