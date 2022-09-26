function A(initialValue) {
  this.value = initialValue;
  this.listener = null; // listener will be called everytime A's value chnages

  this.getValue = () => {
    return this.value;
  };

  this.setValue = (updatedValue) => {
    this.value = updatedValue;
    console.log(`A's updated value is ${this.value}`);
    this.listener && this.listener(this.value);
  };

  this.setListener = (callback) => {
    this.listener = callback;
  };

  // will be called whenever B'value changes
  this.onBChange = (bValue) => {
    console.log(`Listening in A -> B's value changed to ${bValue}`);
  };
}

function B(initialValue) {
  this.value = initialValue;
  this.listener = null;

  this.getValue = () => {
    return this.value;
  };

  this.setValue = (updatedValue) => {
    this.value = updatedValue;
    console.log(`B's updated value is ${this.value}`);
    this.listener && this.listener(this.value);
  };

  this.setListener = (callback) => {
    this.listener = callback;
  };

  this.onAChange = (aValue) => {
    console.log(`Listening in B -> A's value changed to ${aValue}`);
  };
}

const a = new A(7);
const b = new B(5);

/////////////////////
a.setListener(b.onAChange);
b.setListener(a.onBChange);

////////////////////////////////
console.log("A's current value", a.getValue());
a.setValue(10);

//////////////////////////////
console.log("B's current value", b.getValue());
b.setValue(12);
