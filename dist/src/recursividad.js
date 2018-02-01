"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = fibonacci;
function fibonacci(num) {
	if (num == 1) return 0;
	if (num == 2) return 1;

	return fibonacci(num - 1) + fibonacci(num - 2);
}