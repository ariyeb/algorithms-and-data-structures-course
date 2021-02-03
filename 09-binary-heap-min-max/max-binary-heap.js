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



    extractMax() {
        if (this.values.length === 0) return;
        const maxValue = this.values[0];
        const lastElVal = this.values.pop();
        if (this.values.length === 0) return maxValue;
        this.values[0] = lastElVal;
        if (this.values.length === 1) return maxValue;

        let valueIndex, leftChildindex, leftChildValue, rightChildIndex, rightChildValue;
        const updatePointers = (index) => {
            valueIndex = index;
            leftChildindex = index * 2 + 1;
            leftChildValue = this.values[leftChildindex];
            rightChildIndex = index * 2 + 2;
            rightChildValue = this.values[rightChildIndex];
        };

        updatePointers(0);
        while (lastElVal < leftChildValue || lastElVal < rightChildValue) {
            if (leftChildindex < this.values.length && leftChildValue > rightChildValue) {
                this.values[valueIndex] = this.values[leftChildindex];
                this.values[leftChildindex] = lastElVal;
                updatePointers(leftChildindex);
            } else if (rightChildIndex < this.values.length) {
                this.values[valueIndex] = this.values[rightChildIndex];
                this.values[rightChildIndex] = lastElVal;
                updatePointers(rightChildIndex);
            } else break;
        }

        // while (lastElVal < leftChildValue || lastElVal < rightChildValue) {
        //     if (leftChildValue > rightChildValue) {
        //         this.values[valueIndex] = this.values[leftChiledIndex];
        //         this.values[leftChiledIndex] = lastElVal;
        //         updatePointers(leftChiledIndex);
        //     } else {
        //         this.values[valueIndex] = this.values[rightChildIndex];
        //         this.values[rightChildIndex] = lastElVal;
        //         updatePointers(rightChildIndex);
        //     }
        // }

        return maxValue;
    }
}

const mbh = new MaxBinaryHeap();
mbh.insert(45);
mbh.insert(78);
mbh.insert(5);
mbh.insert(97);
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.values);