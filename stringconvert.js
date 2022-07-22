var arr = "aBCcDdz";
console.log(arr);

temp = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt()<=122)
    temp = temp + arr[i].toUpperCase();
  else
    temp = temp + arr[i].toLowerCase();
}
console.log(temp);