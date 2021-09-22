function before(n = 0, func) {
    let result;
    return function () {
        if (n-- > 0) {
            result = func.apply(this, arguments);
        }
        return result;
    };
}
export default before;
