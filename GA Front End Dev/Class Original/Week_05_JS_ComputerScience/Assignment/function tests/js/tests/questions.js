var expect = chai.expect;

describe('Function Tests', function(){

	describe('1. giveMeFive test', function(){
		it('should return 5', function(){
			expect(giveMeFive()).to.equal(5);
		});
	});

	describe('2. addTogether test', function(){
		it('should add two numbers together', function(){
			expect(addTogether(1, 2)).to.equal(3);
			expect(addTogether(3, 9)).to.equal(12);
			expect(addTogether(6, 12)).to.equal(18);
			expect(addTogether(1000, 397.2)).to.equal(1397.2);
		});
	});

	describe('3. isOdd test', function(){
		it('should return true if a number is odd', function(){
			expect(isOdd(3)).to.be.true;
			expect(isOdd(65)).to.be.true;
			expect(isOdd(125)).to.be.true;
			expect(isOdd(2003)).to.be.true;
		});	
		it('should return false if a number is even', function(){
			expect(isOdd(2)).to.be.false;
			expect(isOdd(64)).to.be.false;
			expect(isOdd(128)).to.be.false;
			expect(isOdd(2000)).to.be.false;
		});
	});

	describe('4. isEven test', function(){
		it('should return true if a number is even', function(){
			expect(isEven(2)).to.be.true;
			expect(isEven(64)).to.be.true;
			expect(isEven(128)).to.be.true;
			expect(isEven(2000)).to.be.true;
		});
		it('should return false if a number is odd', function(){
			expect(isEven(3)).to.be.false;
			expect(isEven(65)).to.be.false;
			expect(isEven(125)).to.be.false;
			expect(isEven(2003)).to.be.false;
		});	
	});

	describe('5. max test', function(){
		it('should return the larger of two numbers', function(){
			expect(max(1, 2)).to.equal(2);
			expect(max(2, 4)).to.equal(4);
			expect(max(4, 4)).to.equal(4);
			expect(max(4, 4.001)).to.equal(4.001);
		});
	});

	describe('6. min test', function(){
		it('should return the smaller of two numbers', function(){
			expect(min(1, 2)).to.equal(1);
			expect(min(2, 1)).to.equal(1);
			expect(min(100, 1000.7)).to.equal(100);
			expect(min(1000.7, 100)).to.equal(100);
		});
	});

	describe('7. clamp test', function(){
		it('should return the smaller value if the initial value is too small', function(){
		 	expect(clamp(50, 60, 100)).to.equal(60);
		});
		it('should return the larger value if the initial value is too large', function(){
			expect(clamp(120, 50, 100)).to.equal(100);
		});
		it('should return the value itself if the value is neither too small nor large', function(){
			expect(clamp(10, 0, 15)).to.equal(10);
		});
	});


	describe('8. average test', function(){
		it('should give me the average of an array', function(){
			expect(average([2, 3, 4, 5])).to.equal(3.5);
			expect(average([7, 8, 2.2, 100])).to.equal(29.3);
		});
		it('should account for empty elements in an array', function(){
			expect(average([2, 3, 4,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5])).to.equal(3.5);
			expect(average([7, 8, 2.2,undefined,undefined,undefined,undefined,undefined,undefined,undefined,100,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,"string"], 100)).to.equal(29.3);
		});
	});

	describe('9. disagree test', function(){
		it('should return true when false', function(){
			expect(disagree(true)).to.be.false;
		});
		it('should return false when true', function(){
			expect(disagree(false)).to.be.true;
		});
	});

	describe('BONUS: fizzBuzz test', function(){
		it('should return fizz if the number is divisible by 3', function(){
			expect(fizzBuzz(9)).to.equal('fizz');
			expect(fizzBuzz(12)).to.equal('fizz');
			expect(fizzBuzz(18)).to.equal('fizz');
			expect(fizzBuzz(21)).to.equal('fizz');
		});
		it('should return buzz if the number is divisible by 5', function(){
			expect(fizzBuzz(25)).to.equal('buzz');
			expect(fizzBuzz(50)).to.equal('buzz');
			expect(fizzBuzz(200)).to.equal('buzz');
			expect(fizzBuzz(10)).to.equal('buzz');
		});
		it('should return fizzbuzz if the number is divisible by 3 and 5', function(){
			expect(fizzBuzz(15)).to.equal('fizzbuzz');
			expect(fizzBuzz(30)).to.equal('fizzbuzz');
			expect(fizzBuzz(60)).to.equal('fizzbuzz');
			expect(fizzBuzz(120)).to.equal('fizzbuzz');
		});
	})
});
