function printMatrix(matrix) {
// output a matrix as a string
  outputstring = ""

  for (i = 0; i < matrix.length; i++){
    for (j = 0; j < matrix[i].length; j++){
      outputstring += matrix[i][j] + " ";
    }
    outputstring += "<br>";
  }

  return outputstring;
}

function printVector(vector) {
// output a matrix as a string
  outputstring = ""

    for (j = 0; j < vector.length; j++){
      outputstring += vector[j] + " ";
    }
  return outputstring;
}

function addMatrix(matrix1,matrix2){
  //Add two matrices of same size
  matrix = [];

  for (i = 0; i < matrix1.length; i++){
    var row = [];
    for (j = 0; j < matrix1[i].length; j++){
      row.push(matrix1[i][j] + matrix2[i][j]);
    }
    matrix.push(row);
  }

  return matrix
}

function dotproduct(vector1, vector2){
//return dot product of two same length vectors
  var product = 0;

  for (k = 0; k < vector1.length; k++){
    product += (vector1[k]*vector2[k])
  }
  return product;
}

function addVector(vector1, vector2){
//return sum of two same length vectors
  var vector = [];

  for (i = 0; i < vector1.length; i++){

    vector.push(vector1[i] + vector2[i])
  }
  return vector;
}

function transpose(matrix1){
//return transpose of a matrix
  var matrix = [];

  for (i = 0; i < matrix1.length; i++){
    var row = [];
    for (j = 0; j < matrix1[i].length; j++){
      row.push(matrix1[j][i]);
    }
    matrix.push(row);
  }
  return matrix;
}

function matrixProduct(matrix1, matrix2){
  // return product of matrices
  var matrix = [];
  var matrix2transpose = transpose(matrix2);

  for (i = 0; i < matrix1.length; i++){
    var row = [];

    for (j = 0; j < matrix1.length; j++){
      dotprod = dotproduct(matrix1[i],matrix2transpose[j]);
      row.push(dotprod);
    }

    matrix.push(row);
  }
  return matrix;
}


function outputButton(){


var r1c1 = document.getElementById("r1c1");
var r1c2 = document.getElementById("r1c2");
var r2c1 = document.getElementById("r2c1");
var r2c2 = document.getElementById("r2c2");


var v1 = [parseFloat(r1c1.value),parseFloat(r1c2.value)];
var v2 = [parseFloat(r2c1.value),parseFloat(r2c2.value)];
var p1v = printVector(v1);
var p2v = printVector(v2);
var v = dotproduct(v1,v2);
var vectorsum = addVector(v1,v2);
var psum = printVector(vectorsum);

document.getElementById("vector").innerHTML =  "<table><tr> <th>Vector 1</th>  <th>Vector 2</th>  <th>Sum</th> <th>Dot Product</th></tr>  <tr><td>" +p1v + "</td>  <td>" +p2v + "</td> <td>" +psum + "</td><td>" +v + "</td></tr></table>"
}


function matrixOutputButton(){


var m1r1c1 = document.getElementById("m1r1c1");
var m1r1c2 = document.getElementById("m1r1c2");
var m1r2c1 = document.getElementById("m1r2c1");
var m1r2c2 = document.getElementById("m1r2c2");
var m2r1c1 = document.getElementById("m2r1c1");
var m2r1c2 = document.getElementById("m2r1c2");
var m21r2c1 = document.getElementById("m2r2c1");
var m2r2c2 = document.getElementById("m2r2c2");


var m1v1 = [parseFloat(m1r1c1.value),parseFloat(m1r1c2.value)];
var m1v2 = [parseFloat(m1r2c1.value),parseFloat(m1r2c2.value)];
var m2v1 = [parseFloat(m2r1c1.value),parseFloat(m2r1c2.value)];
var m2v2 = [parseFloat(m2r2c1.value),parseFloat(m2r2c2.value)];

var m1 = new Array(m1v1, m1v2);
var m2 = new Array(m2v1, m2v2);
var m = addMatrix(m1,m2);

var p1 = printMatrix(m1);
var p2 = printMatrix(m2);
var p = printMatrix(m);



var trans = printMatrix(transpose(m1));
var prod = printMatrix(matrixProduct(m1,m2));


//document.getElementById("test").innerHTML = "Matrix 1 is: <br>" + p1 + "<br>" + "Matrix 2 is: <br>" + p2 + "<br>" + "Sum is: <br>" + p + "<br> Tranpose of Matrix 1 is: <br>" + trans + "<br> Product is: <br>" + prod;
document.getElementById("test").innerHTML = "<table>   <tr> <th>Matrix 1</th> <th>Matrix 2</th> <th>Sum</th> <th>Transpose Matrix 1</th> <th>Product</th> </tr><tr><td>" +p1 +"</td><td>" +p2 +"</td><td>" +p +"</td><td>" +trans +"</td><td>" +prod +"</td></tr></table>"

}
