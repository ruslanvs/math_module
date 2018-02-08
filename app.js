var mathlib = require('./mathlib')();
console.log( mathlib.add( 1, 2 ) );
console.log( mathlib.multiply( 1, 2 ) );
console.log( mathlib.square( 2 ) );

for( let i = 0; i < 1000; i++ ){
    r = mathlib.random( 100, 200 )
    console.log( r );
}