var expect = chai.expect;

describe('array and loop tests', function(){

	describe('Question 1', function(){
		it('should equal specified values', function(){
			expect(q1[0]).to.equal(1);
			expect(q1[1]).to.equal(2);
			expect(q1[2]).to.equal("Henry");
			expect(q1[3]).to.equal(true);
			expect(q1[4]).to.equal(21);
		});
	});

	describe('Question 2', function(){
		it('should equal first item in q1', function(){
			expect(q2).to.equal(1);
		});
	});

	describe('Question 3', function(){
		it('should equal second item in q1', function(){
			expect(q3).to.equal(2);
		});
	});

	describe('Question 4', function(){
		it('should equal third item in q1', function(){
			expect(q4).to.equal("Henry");
		});
	});

	describe('Question 5', function(){
		it('should equal last item in q1', function(){
			expect(q5).to.equal(21);
		});
	});

	describe('Question 6', function(){
		it('should equal the specified values', function(){
			expect(q6[0]).to.equal(2);
			expect(q6[1]).to.equal(3);
			expect(q6[2]).to.equal(4);
			expect(q6[3]).to.equal(45);
			expect(q6[4]).to.equal(67);
			expect(q6[5]).to.equal(101);
		});
	});

	describe('Question 7', function(){
		it('should equal the length of q6', function(){
			expect(q7).to.equal(6);
		});
	});

	describe('Question 8', function(){
		it('should equal the third item in q6', function(){
			expect(q8).to.equal(4);
		});
	});

	describe('Question 9', function(){
		it('should equal the first item in q6', function(){
			expect(q9).to.equal(2);
		});
	});

	describe('Question 10', function(){
		it('should equal specified value', function(){
			expect(q10).to.equal(213);
		});
	});

	describe('Question 11', function(){
		it('should equal q6', function(){			
			expect(q11[6]).to.equal(213);
		});
	});

	describe('Question 12', function(){
		it('should equal all numbers from 0 to 100', function(){
			for(var i = 0; i < 101; i++){
				expect(q12[i]).to.equal(i);
			}
		});
	});

	describe('Question 13', function(){
		it('should have 100 elements', function(){
			expect(q13.length).to.equal(101);
		});
		it('should equal all the numbers from 1 to 101', function(){
			for(var i = 1; i < 102; i++){
				expect(q13[i-1]).to.equal(i);
			}
		});
	});

	describe('Question 14', function(){
		it('should equal all even numbers from 2 to 100', function(){
			for(var i = 0, n = 2; n < 102; i++, n+=2){
				expect(q14[i]).to.equal(n);
			}
		});
	});

	describe('Question 15', function(){
		it('should equal the sum of q13 elements', function(){
			expect(q15).to.equal(5151);
		});
	});

	describe('Question 16', function(){
		it('should equal the sum of all q14 numbers that are evenly divisible by 4', function(){
			expect(q16).to.equal(1300);
		});
	});
});
