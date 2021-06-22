const Calculator = ((_) => {
  const add=(a,b)=>{
    return `${a} + ${b} = ${a+b}`;
  }
  const sub=(a,b)=>{
    return `${a} - ${b} = ${a-b}`;
  }
  const multiply=(a,b)=>{
    return `${a} * ${b} = ${a*b}`;
  }
  const divide=(a,b)=>{
    return `${a} / ${b} = ${a/b}`;
  }
  return{
    add: add,
    sub:sub,
    divide: divide,
    multiply: multiply
  }
})();
export default Calculator;
