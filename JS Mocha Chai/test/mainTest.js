const assert = require('chai').assert;
const main = require('../main.js');

describe("Matrix sum",function () {
   it('Checks if the sum of two matrix are correct', function () {
       var matrix1 = [[1,2,3],[4,5,6],[7,8,9]]; //here, it creates the first matrix, it can be randomize.
       var matrix2 = [[3,2,1],[6,5,4],[9,8,7]]; //here, it creates the second matrix, it can be randomize.
       var matrix = [[4,4,4],[10,10,10],[16,16,16]]; //here, the hypothetical result is created.
       var matrixCheck = main.Frobenius(matrix);
       var sumMatrix = main.Frobenius( main.sumMatrix(matrix1,matrix2));
       assert.equal(sumMatrix,matrixCheck);
   }) ;
});

describe("Matrix subtraction", function () {
    it("Checks if the subtraction is done correctly", function () {
        var matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
        var matrix2 = [[3,2,1],[6,5,4],[9,8,7]];
        var matrix = [[-2,0,2],[-2,0,2],[-2,0,2]];
        var matrixCheck = main.Frobenius(matrix);
        var subMatrix = main.Frobenius(main.subMatrix(matrix1,matrix2));
        assert.equal(subMatrix,matrixCheck);
    });
});

describe("Matrix multiplication", function () {
   it("Checks if the multiplication is done correctly", function () {
       var matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
       var matrix2 = [[1],[2],[3]];
       var hypoResult = main.Frobenius([[14],[32],[50]]); //hypothetical result given the correct multiplication
       var result = main.Frobenius(main.mulMatrix(matrix1,matrix2));
       assert.equal(result,hypoResult);
   });
});

describe("Matrix multiplication", function () {
    it("It is intended to fail.", function () {
        var matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
        var matrix2 = [[1],[3]]; //the length of rows are less, so the requirement is not meet. It will fail.
        assert.throws(main.mulMatrix(matrix1,matrix2)); //catches the error thrown by the function
    });
});

describe("Check return", function () {
    var matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
    var matrix2 = [[3,2,1],[6,5,4],[9,8,7]];
    var result = main.sumMatrix(matrix1,matrix2);
    var matrix = [[4,4,4],[10,10,10],[16,16,16]];
   it("Checks if the result is a matrix",function () {
       assert.typeOf(result,"array"); //checks if the type of the result is like expected
   });
   it("Checks if the first value of the result is also an array", function () {
       assert.typeOf(result[0],"array");
   });

   it("Checks if the result has the same result as the hypothetical result", function () {
       assert.sameDeepOrderedMembers(matrix,result); //checks if the result has the same values as the hypothetical
                                                    // without using the norm of the matrix
   });
});