
// You should implement your task here.

module.exports = function towelSort (matrix = []) {

  return matrix.reduce((resultArr, curArr, index) =>  resultArr.concat(index % 2 ===0 ? curArr : curArr.reverse()), []);
  
// [...resultArr,...curArr]

}
