/**
 * File: array_stack.js
 * Created Time: 2022-12-09
 * Author: S-N-O-R-L-A-X (snorlax.xu@outlook.com)
 */


/* 基于数组实现的栈 */
class ArrayStack {
    stack;
    constructor() {
        this.stack = [];
    }
    /* 获取栈的长度 */
    get size() {
        return this.stack.length;
    }

    /* 判断栈是否为空 */
    empty() {
        return this.stack.length === 0;
    }

    /* 入栈 */
    push(num) {
        this.stack.push(num);
    }

    /* 出栈 */
    pop() {
        if (this.empty()) throw "栈为空";
        return this.stack.pop();
    }

    /* 访问栈顶元素 */
    top() {
        if (this.empty()) throw "栈为空";
        return this.stack[this.stack.length - 1];
    }

    /* 访问索引 index 处元素 */
    get(index) {
        if (index >= this.size) throw "索引越界";
        return this.stack[index];
    }

    /* 返回 Array */
    toArray() {
        return this.stack;
    }
};


/* Driver Code */

/* 初始化栈 */
const stack = new ArrayStack();

/* 元素入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);
console.log("栈 stack = ");
console.log(stack.toArray());

/* 访问栈顶元素 */
const top = stack.top();
console.log("栈顶元素 top = " + top);

/* 访问索引 index 处元素 */
const num = stack.get(3);
console.log("栈索引 3 处的元素为 num = " + num);

/* 元素出栈 */
const pop = stack.pop();
console.log("出栈元素 pop = " + pop + "，出栈后 stack = ");
console.log(stack.toArray());

/* 获取栈的长度 */
const size = stack.size;
console.log("栈的长度 size = " + size);

/* 判断是否为空 */
const empty = stack.empty();
console.log("栈是否为空 = " + empty);
