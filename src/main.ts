import { methodize } from './methodizing .ts';

function reverse(str: string): string {
  return str.split('').reverse().join('');
}

methodize(String, reverse);

console.log('MONTEVIDEO'.reverse(true));
