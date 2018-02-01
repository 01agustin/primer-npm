
const expect = require('chai').expect
const fibonacci = require('..').default


describe('#recursividad',function () {

it('si pasas 1 devuelve 0',function(){
	const fibo = fibonacci(1)
	expect(fibo).to.equal(0)
})

it('si es 2 devuelve 1',function(){
	const fibo = fibonacci(2)
	expect(fibo).to.equal(1)
})

it('si es 3 devuelve 1',function(){
	const fibo = fibonacci(3)
	expect(fibo).to.equal(1)
})

it('si es 4 devuelve 2',function(){
	const fibo = fibonacci(4)
	expect(fibo).to.equal(2)
})
})