function array(arr) {
    return arr.map((name, index) => {
        return `The person ${index + 1} is ${name}`;
    });
}

const names = ['Sunny', 'Emily', 'Frank', 'Alison'];
var output=array(names);
console.log(output);

/*output
The person 1 is Sunny
The person 2 is Emily
The person 3 is Frank
The person 4 is Alison
*/
