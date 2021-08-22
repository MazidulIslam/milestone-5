const products = [
    'Dell hardcore i29 200GB laptop',
    'yellow laptop with black camera',
    'Dell iphone 1TB camera flashlight phone',
    'Dell 1X59 Lenevo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'purple color phone with Laptop'
];

const searching = 'Laptop';

// indexOf
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
        
}
// console.log(output);

// starts with 
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

// hints with 
for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);