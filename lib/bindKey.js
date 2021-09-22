function bindKey(object, key) {
    const func = object[key];
    if (typeof func !== "function") {
        throw new Error("must be function");
    }
    return func.bind(object);
}
export default bindKey;
