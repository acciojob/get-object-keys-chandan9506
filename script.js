//your JS code here. If required.
let student = {
	"name":"Chandan",
}
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Test the implementation
console.log(student.getKeys()); // Output: ["name"]