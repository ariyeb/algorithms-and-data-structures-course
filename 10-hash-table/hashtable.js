// const map = new Map();

// map.set("a", "A");
// console.log(map.get("a"));

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
        const index = this._hash(key);
        if (this.keyMap[index] == undefined) this.keyMap[index] = [[key, value]];
        else this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        if (this.keyMap[index] == undefined) return;

        for (let [k, v] of this.keyMap[index]) {
            if (k === key) return v;
        }
    }

    keys() {
        const keys = [];

        this.keyMap.forEach(container => {
            for (let [k] of container) {
                keys.push(k);
            }
        });

        return keys;
    }

    values() {
        const values = [];

        this.keyMap.forEach(container => {
            for (let [k, v] of container) {
                values.push(v);
            }
        });

        return values;
    }
}

const ht = new HashTable();
ht.set("a", "A");
ht.set("b", "B");
console.log(ht.get("b"));
console.log(ht.get("c"));
console.log(ht.keys());
console.log(ht.values());