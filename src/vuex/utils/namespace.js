function mapValues (obj, f) {
    const res = {};
    Object.keys(obj).forEach(key => {
        res[key] = f(obj[key], key)
    });
    return res
}

export default (module, types) => {
    let newObj = {};

    mapValues(types, (names, type) => {
        newObj[type] = {};
        types[type].forEach(name=> {
            var newKey = module + '/' + name;
            newObj[type][name] = newKey;
        });
    });
    return newObj;
}