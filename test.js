function anagrams(word, words) {
    var tempA = [];

    var sortAlphabets = function(text) {
        return text.split('').sort().join('');
    };

    var sortedWord = sortAlphabets(word);

    words.forEach(function(wordsA){
        console.log(sortAlphabets(wordsA.toString()), sortedWord);
        if(sortedWord === sortAlphabets(wordsA.toString())){
            tempA.push(wordsA);
        }
    });
    return tempA;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));