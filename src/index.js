module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map((item, index) => item = item.join(''));
console.log(bracketsConfig+' '+str);
if (str.length % 2 == 0) {
  for (let i = 0; i<bracketsConfig.length; i++){
    if (str.includes(bracketsConfig[i])) {
      str = str.replace(bracketsConfig[i], '');
      i=i-3;
      console.log(str);
    }
  }
  if (str==='') {
    return true;
  }
  else {
    return false;
  }
}
else {
  return false;
}
}