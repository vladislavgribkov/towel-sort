
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let outArraya = [];
    if(matrix === undefined){
        return [];
      }
    matrix.forEach((element, i)=> {
      if(i%2 === 0){
        outArraya.push(...element.sort((a,b)=>a-b));
      }else{
        outArraya.push(...element.sort((a,b)=>b-a));
      }
    });
    return outArraya;
}
