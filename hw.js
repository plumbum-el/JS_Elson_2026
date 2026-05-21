// №1 Количество повторяющихся элементов
function countIdentic(arr) {
    const countMap = {}; // ключ - элемент, значение - кол-во повторений
    let duplicates = 0;
    
    // Считаем частоту каждого элемента
    for (let i of arr) {
        countMap[i] = (countMap[i] || 0) + 1;
    }
    
    // Суммируем только те, где частота > 1
    for (let k in countMap) {
        if (countMap[k] > 1) {
            duplicates += countMap[k];
        }
    }
    
    return countMap;
}

console.log(' №1');
console.log(countIdentic([1, 2, 3, 2, 4, 1, 5, 1, 1])); // 5 (1 -> 4, 2 -> 2, 6)
console.log(countIdentic(['a', 'b', 'a', 'c', 'b', 'a'])); // 5 (a -> 3, b->2, 5)
console.log(countIdentic([1, 2, 3, 4])); // 0 (нету)


// №2 Среднее арифметическое массива
function average(arr) {
    if (arr.length === 0) return 0; //ЗОД
    
    const sum = arr.reduce((acc, val) => acc + val, 0); 
    return sum / arr.length;
}

// через цикл
function averageLoop(arr) {
    if (arr.length === 0) return 0;
    
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

console.log('\n №2');
console.log(average([1, 2, 3, 4, 5, 6])); // 3
console.log(averageLoop([10, 20, 30])); // 20
console.log(average([7])); // 7
console.log(averageLoop([])); // 0


// №3 Максимальная последовательность 1
function maxOnesSequence(str) {
    let maxLength = 0;
    let currentLength = 0;
    
    for (let char of str) {
        if (char === '1') {
            currentLength++;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        } else {
            currentLength = 0;
        }
    }
    
    return maxLength;
}

console.log('\n №3');
console.log(maxOnesSequence('1000000111100011111010111101111111111')); // 7
console.log(maxOnesSequence('1110011111000111')); // 5
console.log(maxOnesSequence('00000')); // 0
console.log(maxOnesSequence('1')); // 1
console.log(maxOnesSequence('1010101')); // 1


