function isValid(s) {
  // Стек для хранения открывающих скобок
  const stack = [];

  // Карта соответствий: закрывающая -> открывающая
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Если открывающая — добавляем в стек
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    // Если закрывающая — проверяем
    else if (char in pairs) {
      // Если стек пуст или скобка не совпадает — ошибка
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
    // Если символ не скобка — игнорируем (хотя в задаче только скобки)
  }

  // Всё правильно, если стек пуст
  return stack.length === 0;
}

// Примеры:
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true
console.log(isValid(""));          // true (пустая строка)