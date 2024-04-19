const arrProducts = [
    {
    name: 'name1',
    price: 2000,
    manufactorer: 'manufactorer1'
    },
    {
    name: 'name2',
    price: 20000,
    manufactorer: 'manufactorer3'
    },
    {
    name: 'name3',
    price: 300,
    manufactorer: 'manufactorer2'
    },
    {
    name: 'name4',
    price: 3000,
    manufactorer: 'manufactorer3'
    },
    {
    name: 'name5',
    price: 200,
    manufactorer: 'manufactorer2'
    },
    {
    name: 'name6',
    price: 10000,
    manufactorer: 'manufactorer4'
    },
]

const arrProductFiltred = arrProducts.filter(item => {
    return item.price > 5000
});

console.log('All products:');
arrProducts.forEach(product => {
    console.log('Name: ' + product.name + ', Price: ' + product.price + ', Manufacturer: ' + product.manufactorer);
});

console.log("-----------------------------------------------------------------");

console.log("All products, that have a price tag greater than 5000:");
arrProductFiltred.forEach(product => {
    console.log('Name: ' + product.name + ', Price: ' + product.price + ', Manufacturer: ' + product.manufactorer);
});