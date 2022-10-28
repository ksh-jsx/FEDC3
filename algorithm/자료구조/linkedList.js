class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      if (currNode.next !== null) currNode = currNode.next;
      else return null;
    }
    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  insert(node, newValue) {
    if (node === null) {
      return console.log("해당 위치를 찾을 수 없습니다");
    }
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
    this.size++;
  }

  remove(value) {
    let prevNode = this.head;
    if (prevNode.value === value) this.head = prevNode.next;
    else {
      while (prevNode.next.value !== value) {
        if (prevNode.next !== null) prevNode = prevNode.next;
        else return;
      }
      if (prevNode.next !== null) {
        prevNode.next = prevNode.next.next;
      }
    }

    this.size--;
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }

  getSize() {
    return this.size;
  }
}

class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      if (currNode.next !== null) currNode = currNode.next;
      else return null;
    }
    return currNode;
  }

  append(newValue) {
    const newNode = new DoubleNode(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const tmp = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.prev = tmp;
    }
    this.size++;
  }

  insert(node, newValue) {
    if (node === null) {
      return console.log("해당 위치를 찾을 수 없습니다");
    }
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
    this.size++;
  }

  remove(value) {
    let prevNode = this.head;
    if (prevNode.value === value) this.head = prevNode.next;
    else {
      while (prevNode.next.value !== value) {
        if (prevNode.next !== null) prevNode = prevNode.next;
        else return;
      }
      if (prevNode.next !== null) {
        prevNode.next = prevNode.next.next;
      }
    }

    this.size--;
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }

  getSize() {
    return this.size;
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();

console.log(linkedList.find(4));
linkedList.remove(2);
linkedList.display();

linkedList.insert(linkedList.find(2), 10);
linkedList.display();

console.log(linkedList.getSize());

const linkedList2 = new DoublyLinkedList();
linkedList2.append(1);
linkedList2.append(2);
linkedList2.append(3);
console.log(linkedList2.find(2));
