export function hello() {
  console.log('hello from b.js');
}

export function goodbye() {
  console.log('goodbye from b.js');
}

export function greetings(saying = 'nada') {
  console.log('greetings from b.js, ' + saying + '!');
}