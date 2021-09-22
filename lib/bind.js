function bind(func, thisArg, partials) {
    return function (...args) {
        return func.apply(thisArg, args);
    };
}
export default bind;
