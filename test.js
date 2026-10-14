function Arr() {
  const arr = [];
  return arr;
}

// add element at end
Arr.prototype.push = function (element) {
  Arr[Arr.length] = element;
  Arr[Arr.length]++;
  return Arr;
};

// remove element from end
Arr.prototype.pop = function () {
  Arr.length = Arr.length - 1;
  return Arr;
};

// removes element from beginning
Arr.prototype.shift = function () {
  for (let i = 0; i < Arr.length - 1; i++) {
    Arr[i] = Arr[i + 1];
  }
  delete Arr[Arr.length - 1];
  return Arr;
};

// add element to beginning
Arr.prototype.unshift = function (element) {
  for (let i = 0; i < Arr.length - 1; i++) {
    Arr[i + 1] = Arr[0];
  }
  Arr[0] = element;
  return Arr;
};

const obj = new Arr();
obj.push(3);
obj.push(4);
obj.pop();
obj.push(5);

obj.unshift(9);
obj.shift();
console.log(obj);
