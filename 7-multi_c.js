const x = parseInt(process.argv[2]);
if (isNaN(x)) {
console.log('Missing number of occurences');
} else {
for (let i = 0; i < x; i++) {
console.log('Cis fun');
}
}
