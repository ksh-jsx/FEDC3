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

  preorder(currentNode = this.root, preOrderList = []) {
    if (!currentNode) {
      return;
    }

    preOrderList.push(currentNode.value);
    this.preorder(currentNode.left, preOrderList);
    this.preorder(currentNode.right, preOrderList);

    return preOrderList;
  }

  inorder(currentNode = this.root, inOrderList = []) {
    if (!currentNode) {
      return;
    }

    this.inorder(currentNode.left, inOrderList);
    inOrderList.push(currentNode.value);
    this.inorder(currentNode.right, inOrderList);

    return inOrderList;
  }

  postorder(currentNode = this.root, postOrderList = []) {
    if (!currentNode) {
      return;
    }

    this.postorder(currentNode.left, postOrderList);
    this.postorder(currentNode.right, postOrderList);
    postOrderList.push(currentNode.value);

    return postOrderList;
  }
}

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

const displayList = (list, name) => {
  console.log(`${name} : ${list.join(" -> ")}`);
};

displayList(tree.preorder(), "전위순회");
displayList(tree.inorder(), "중위순회");
displayList(tree.postorder(), "후위순회");
