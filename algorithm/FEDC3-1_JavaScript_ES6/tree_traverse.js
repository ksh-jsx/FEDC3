const preOrderList = [];
const inOrderList = [];
const postOrderList = [];

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    // level order
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const currentNode = queue.shift();
      console.log(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  preorder(currentNode = this.root) {
    preOrderList.push(currentNode.value);
    if (currentNode.left !== null) this.preorder(currentNode.left);
    if (currentNode.right !== null) this.preorder(currentNode.right);
  }

  inorder(currentNode = this.root) {
    if (currentNode.left !== null) this.inorder(currentNode.left);
    inOrderList.push(currentNode.value);
    if (currentNode.right !== null) this.inorder(currentNode.right);
  }

  postorder(currentNode = this.root) {
    if (currentNode.left !== null) this.postorder(currentNode.left);
    if (currentNode.right !== null) this.postorder(currentNode.right);
    postOrderList.push(currentNode.value);
  }
}

const displayList = (list, name) => {
  console.log(`${name} : ${list.join(" -> ")}`);
};

const tree = new Tree(new Node(0));

tree.root.left = new Node(1);
tree.root.right = new Node(2);

tree.root.left.left = new Node(3);
tree.root.left.right = new Node(4);
tree.root.right.left = new Node(5);
tree.root.right.right = new Node(6);

tree.root.left.left.left = new Node(7);
tree.root.left.left.right = new Node(8);
tree.root.left.right.left = new Node(9);
tree.root.left.right.right = new Node(10);
tree.root.right.left.left = new Node(11);

//tree.display()

tree.preorder();
tree.inorder();
tree.postorder();
displayList(preOrderList, "전위순회");
displayList(inOrderList, "중위순회");
displayList(postOrderList, "후위순회");
