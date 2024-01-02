var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    val = Math.min(val, this.min.length === 0 ? val : this.min.at(-1));
    this.min.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.min.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min.at(-1);
};