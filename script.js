// script.js
window.onload = function(){ 
    // Переменные для хранения чисел и операций
    let a = ''           // Первое число
    let b = ''           // Второе число
    let expressionResult = ''  // Результат вычисления
    let selectedOperation = null  // Выбранная операция

    // Получаем доступ к экрану калькулятора в поле вывода
    const outputElement = document.getElementById("result")

    // Получаем все кнопки с цифрами
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        // Если операция не выбрана, работаем с первым числом
        if (!selectedOperation) {
            // Проверяем, не пытаемся ли мы добавить вторую точку
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit;
            }
            outputElement.innerHTML = a || '0';
        } 
        // Если операция выбрана, работаем со вторым числом
        else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit;
                outputElement.innerHTML = b;        
            }
        }
    }
    
    // Настраиваем обработчики для цифровых кнопок
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        }
    });

    // Настраиваем обработчики для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return;
        selectedOperation = 'x';
    }
    
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return;
        selectedOperation = '+';
    }
    
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return;
        selectedOperation = '-';
    }
    
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return;
        selectedOperation = '/';
    }

    // Очищаем все значения при нажатии на кнопку C
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = null
        expressionResult = ''
        outputElement.innerHTML = 0
    }

    // ФУНКЦИЯ 1: смена знака +/-
    document.getElementById("btn_op_sign").onclick = function() {
        if (!selectedOperation && a !== '') {
            a = (parseFloat(a) * -1).toString();
            outputElement.innerHTML = a;
        } else if (selectedOperation && b !== '') {
            b = (parseFloat(b) * -1).toString();
            outputElement.innerHTML = b;
        }
    }

    // ФУНКЦИЯ 2: вычисление процента
    document.getElementById("btn_op_percent").onclick = function() {
        if (!selectedOperation && a !== '') {
            a = (parseFloat(a) / 100).toString();
            outputElement.innerHTML = a;
        } else if (selectedOperation && a !== '' && b !== '') {
            // Если есть оба числа, вычисляем процент от первого числа
            let percentValue = parseFloat(a) * (parseFloat(b) / 100);
            
            switch(selectedOperation) {
                case '+':
                    expressionResult = parseFloat(a) + percentValue;
                    break;
                case '-':
                    expressionResult = parseFloat(a) - percentValue;
                    break;
                case 'x':
                    expressionResult = parseFloat(a) * (parseFloat(b) / 100);
                    break;
                case '/':
                    expressionResult = parseFloat(a) / (parseFloat(b) / 100);
                    break;
            }
            
            a = expressionResult.toString();
            b = '';
            selectedOperation = null;
            outputElement.innerHTML = a;
        }
    }

    // ФУНКЦИЯ 3: backspace (стирание последней цифры)
    document.getElementById("btn_op_backspace").onclick = function() {
        if (!selectedOperation && a.length > 0) {
            a = a.slice(0, -1);
            outputElement.innerHTML = a || '0';
        } else if (selectedOperation && b.length > 0) {
            b = b.slice(0, -1);
            outputElement.innerHTML = b || '0';
        }
    }

    // ФУНКЦИЯ 4: смена цвета фона
    let isFirstColor = true; // Переменная для запоминания текущего цвета

    document.getElementById("btn_change_color").onclick = function() {
        const color1 = '#1E2027'; // Исходный цвет
        const color2 = '#5b3030ff'; // Второй цвет (можно заменить на любой другой)
        
        if (isFirstColor) {
            document.body.style.backgroundColor = color2;
            isFirstColor = false;
        } else {
            document.body.style.backgroundColor = color1;
            isFirstColor = true;
        }
    }

    // ФУНКЦИЯ 5: квадратный корень
    document.getElementById("btn_op_sqrt").onclick = function() {
        if (!selectedOperation && a !== '') {
            let num = parseFloat(a);
            if (num >= 0) {
                a = Math.sqrt(num).toString();
                outputElement.innerHTML = a;
            } else {
                alert('Нельзя извлечь корень из отрицательного числа');
            }
        } else if (selectedOperation && b !== '') {
            let num = parseFloat(b);
            if (num >= 0) {
                b = Math.sqrt(num).toString();
                outputElement.innerHTML = b;
            } else {
                alert('Нельзя извлечь корень из отрицательного числа');
            }
        }
    }

    // ФУНКЦИЯ 6: возведение в квадрат
    document.getElementById("btn_op_square").onclick = function() {
        if (!selectedOperation && a !== '') {
            a = Math.pow(parseFloat(a), 2).toString();
            outputElement.innerHTML = a;
        } else if (selectedOperation && b !== '') {
            b = Math.pow(parseFloat(b), 2).toString();
            outputElement.innerHTML = b;
        }
    }

    // Вычисляем результат при нажатии на =
    document.getElementById("btn_op_equal").onclick = function() { 
        // Проверяем, что у нас есть оба числа и операция
        if (a === '' || b === '' || !selectedOperation)
            return
            
        // Выполняем выбранную операцию
        switch(selectedOperation) { 
            case 'x':
                expressionResult = parseFloat(a) * parseFloat(b)
                break;
            case '+':
                expressionResult = parseFloat(a) + parseFloat(b)
                break;
            case '-':
                expressionResult = parseFloat(a) - parseFloat(b)
                break;
            case '/':
                if (parseFloat(b) === 0) {
                    alert('Деление на ноль невозможно!');
                    return;
                }
                expressionResult = parseFloat(a) / parseFloat(b)
                break;
            default:
                break;
        }
        
        // Сохраняем результат и очищаем второе число
        a = expressionResult.toString()
        b = ''
        selectedOperation = null

        // Показываем результат на экране
        outputElement.innerHTML = a
    }
};