const assert = require('chai').assert;
module.exports = { //This section will store all the functions needed in the test section.
    sumMatrix:function(matrix1,matrix2){ //This function will return the sum of two matrix. The result is a matrix.
        //The values of the rows and cols of each matrix is store so it isn't calculated each time it is needed.
        var rows1 = matrix1.length;
        var rows2 = matrix2.length;
        var cols1 = matrix1[0].length;
        var cols2 = matrix2[0].length;
        //the resultant matrix is created
        var matrixResult = [];
        for(var i=0; i<rows1; i++) {
            matrixResult[i] = new Array(cols1);
        }

        //the sum of both matrix is calculated
        for(var i = 0; i <rows1; ++i){
            for(var j = 0; j<cols1; ++j){
                matrixResult[i][j] = matrix1[i][j] + matrix2[i][j]
            }
        }
        return matrixResult

    },
    Frobenius:function (matrix) { //returns the norm of a matrix, true method to compare if two matrix are the same
        var rows = matrix.length;
        var cols = matrix[0].length;
        var result = 0;

        for(var i = 0; i<rows; ++i){
            for(var j = 0; j<cols; ++j){
                result += matrix[i][j]*matrix[i][j];
            }
        }
        result = Math.sqrt(result);
        return result;
    },
    subMatrix:function (matrix1,matrix2) {//subtracts two matrix and returns the resultant matrix.
        var rows1 = matrix1.length;
        var cols1 = matrix1[0].length;

        //the resultant matrix is created
        var matrixResult = [];
        for(var i=0; i<rows1; i++) {
            matrixResult[i] = new Array(cols1);
        }

        //the subtraction of both matrix is calculated
        for(var i = 0; i <rows1; ++i){
            for(var j = 0; j<cols1; ++j){
                matrixResult[i][j] = matrix1[i][j] - matrix2[i][j]
            }
        }
        return matrixResult
    },
    mulMatrix:function (matrix1,matrix2) { //it multiplies two matrix depending on the rules.
        var rows1 = matrix1.length;
        var rows2 = matrix2.length;

        var cols1 = matrix1[0].length;
        var cols2 = matrix2[0].length;

        //Verifies if the rule: mxn and nxz is meet. If not, an error will be risen.
        assert.equal(cols1,rows2,"The rows-columns requirement is not meet.");

        //the resultant matrix is created
        var multiplication = [];
        for(var i=0; i<cols1; i++) {
            multiplication[i] = new Array(cols2);
        }

        //loop that calculates the multiplication
        for(var i = 0; i < rows1; ++i){
            for(var j = 0; j < cols2; ++j){
                var tmp = 0;

                for(var k = 0; k < rows2; ++k){
                    tmp += matrix1[i][k]*matrix2[k][j];

                }
                multiplication[i][j] = tmp;
            }
        }
        return multiplication;
    }
};