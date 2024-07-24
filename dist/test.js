"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rimraf_1 = __importDefault(require("rimraf"));
const path_1 = __importDefault(require("path"));
const testDir = path_1.default.join(__dirname, 'test-directory');
rimraf_1.default.sync(testDir); // Test if rimraf.sync works
console.log('Directory removed if it exists');
