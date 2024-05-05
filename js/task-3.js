class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        const maxValueLength = this.#value.length + str.length;
        this.#value = this.#value.padEnd(maxValueLength, str);
    }

    padStart(str) {
        const maxValueLength = this.#value.length + str.length;
        this.#value = this.#value.padStart(maxValueLength, str);
    }

    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="