// https://www.jetbrains.com/help/webstorm/specific-javascript-refactorings.html
function MyFunction(a, b) {
    const c = a + b;
    return (c * c);
}

const result = MyFunction(4, 6);
document.write(result);
