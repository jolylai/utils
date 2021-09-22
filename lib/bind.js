function bind(func, thisArg) {
    return function (...args) {
        return func.apply(thisArg, args);
    };
}
export default bind;
