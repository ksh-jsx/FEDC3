const list = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySerach(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (array[mid] === findValue) {
      return mid;
    }
    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

//console.log(binarySerach(list, 2876));

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySerachTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;

    while (currentNode !== null) {
      console.log("지금 노드:" + currentNode.value);
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value < value) {
        console.log("오른쪽으로");
        currentNode = currentNode.right;
      } else {
        console.log("왼쪽으로");
        currentNode = currentNode.left;
      }
    }
    return false;
  }
}

const tree = new binarySerachTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);
tree.insert(1);
