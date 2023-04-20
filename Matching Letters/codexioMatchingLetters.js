function elf(firstWord, secondWord){
    
    let str1 = firstWord.split("");
    let str2 = secondWord.split("");

    let result = 0;

    let [shorterWord, longerWord] = checkWords(firstWord, secondWord);

    for(let char of shorterWord){
        if(longerWord.includes(char)){
            let indexOfstr1 = str1.indexOf(char);
            let indexOfstr2 = str2.indexOf(char);

            str1.splice(indexOfstr1, 1);
            str2.splice(indexOfstr2, 1);
        };
    };

    result = str1.length + str2.length;
    return result;
};

function checkWords(a, b) {
    return a.length <= b.length ? [a, b] : [b, a];
};

elf('codewars', 'hackerrank');
