const map = new Map();

map.set("a", "A");
console.log(map.get("a"));

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let primeNum = 31;
        for (let i = 0; i < Math.min(100, key.length); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * primeNum + value) % this.keyMap.length;
        }
        return Math.abs(total);
    }

    set(key, value) {

    }
}