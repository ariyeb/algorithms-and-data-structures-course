class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        if (this.values.length === 1) return this.values;

        let valueIndex = this.values.length - 1;
        let parentIndex = Math.floor((valueIndex - 1) / 2);
        while (
            parentIndex >= 0 &&
            this.values[parentIndex] < this.values[valueIndex]
        ) {
            this.values[valueIndex] = this.values[parentIndex];
            this.values[parentIndex] = value;
            valueIndex = parentIndex;
            parentIndex = Math.floor((valueIndex - 1) / 2);
        }

        return this.values;
    }
    // O(log n)

    extractMax() {
        if (this.values.length === 0) return;
        const maxValue = this.values[0];
        const lastElVal = this.values.pop();
        if (this.values.length === 0) return maxValue;
        this.values[0] = lastElVal;
        if (this.values.length === 1) return maxValue;

        let valueIndex, leftChildIndex, leftChildValue, rightChildIndex, rightChildValue;
        const updatePointers = (index) => {
            valueIndex = index;
            leftChildIndex = index * 2 + 1;
            leftChildValue = this.values[leftChildIndex];
            rightChildIndex = index * 2 + 2;
            rightChildValue = this.values[rightChildIndex];
        };

        updatePointers(0);
        while (lastElVal < leftChildValue || lastElVal < rightChildValue) {
            if (leftChildValue > rightChildValue || rightChildValue == undefined) {
                this.values[valueIndex] = this.values[leftChildIndex];
                this.values[leftChildIndex] = lastElVal;
                updatePointers(leftChildIndex);
            } else {
                this.values[valueIndex] = this.values[rightChildIndex];
                this.values[rightChildIndex] = lastElVal;
                updatePointers(rightChildIndex);
            }
        }

        return maxValue;
    }
    // O(log n)
}

const mbh = new MaxBinaryHeap();
mbh.insert(45);
mbh.insert(78);
mbh.insert(5);
mbh.insert(97);
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.values);

// 7
// 10 -> 7 -> 6 -> 4 -> 0;
// extractMax -> O(1)