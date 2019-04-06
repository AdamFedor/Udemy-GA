// Write a recursive function called reverse which accepts a
// string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse (str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

let answer = reverse('abc');
console.log(answer);

// slice removes the characters after what it's told
// Using this approach the first caracter is being removed
// Then it's also adding the first number. But adding after.

// Example of "abc"
// return reverse('bc'){ reverse('c'){ reverse(''){c} } + b } + a
// resulting in c+b+a === 'cba'