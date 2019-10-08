var should = chai.should()

describe('Test fizzbuzz function', function () {
  it('should return "Fizz" if input can be divided by 3', function () {
    let result = fizzBuzz(9)
    let expectAns = 'Fizz'
    result.should.be.equal(expectAns)
  })
  it('should return "Buzz" if input can be divided by 5', function () {
    let result = fizzBuzz(10)
    let expectAns = 'Buzz'
    result.should.be.equal(expectAns)
  })
  it('should return "FizzBuzz" if input can be divided by 15', function () {
    let result = fizzBuzz(30)
    let expectAns = 'FizzBuzz'
    result.should.be.equal(expectAns)
  })
  it('should return input if input cannot be divided by 3, 5, 15', function () {
    let result = fizzBuzz(8)
    let expectAns = 8
    result.should.be.equal(expectAns)
  })
})