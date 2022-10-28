class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  getSize() {
    return this.rear - this.front;
  }

  getQueue() {
    return this.queue;
  }
}
/*
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.getQueue());
console.log(queue.dequeue());
queue.enqueue(8);
console.log(queue.getQueue());
console.log(queue.getSize());
console.log(queue.dequeue());
*/

class Node {
  constructor(value, index) {
    this.value = value;
    this.location = index;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue, index) {
    const newNode = new Node(newValue, index);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    const value = this.head.value;
    const location = this.head.location;
    this.head = this.head.next;
    this.size--;
    return [value, location];
  }

  peek() {
    return this.head.value;
  }

  getSize() {
    return this.size;
  }
}

const solution = (priorities, location) => {
  let cnt = 0;
  const queue = new LinkedListQueue();
  priorities.map((x, i) => queue.enqueue(x, i));
  priorities.sort((a, b) => b - a);

  while (queue.getSize()) {
    const max = priorities[cnt];
    const target = queue.dequeue();

    if (max > target[0]) queue.enqueue(target[0], target[1]);
    else {
      cnt++;
      if (location === target[1]) return cnt;
    }
  }
};

solution([2, 1, 3, 2], 2);
/*
const queue = new LinkedListQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("삭제된 값: " + queue.dequeue());
queue.enqueue(8);
console.log(queue.getMaxValue());
console.log("크기: " + queue.getSize());
console.log("큐 첫번째 값: " + queue.peek());
*/
