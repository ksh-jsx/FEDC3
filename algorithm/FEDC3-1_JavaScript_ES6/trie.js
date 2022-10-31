class Node {
  constructor(value = "", isEnd = false) {
    this.value = value;
    this.children = new Map();
    this.endPoint = isEnd;
  }
}

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
    delete this.queue[this.front++];
    return value;
  }

  getSize() {
    return this.rear - this.front;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    if (!/[a-zA-Z]/.test(string)) {
      return console.log(`${string}: 삽입 불가! 영어만 입력하세요`);
    }

    let currentNode = this.root;
    let cnt = 0;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        if (cnt === string.length - 1) {
          currentNode.children.set(char, new Node(currentNode.value + char, true));
        } else {
          currentNode.children.set(char, new Node(currentNode.value + char));
        }
      }
      currentNode = currentNode.children.get(char);
      cnt++;
    }
  }

  search(keyword) {
    if (!/[a-zA-Z]/.test(keyword)) {
      return console.log(`${keyword}: 검색 불가! 영어만 입력하세요`);
    }

    let currentNode = this.root;
    const values = []; //검색된 값들
    const queue = new Queue(); // 검색 대상

    for (const char of keyword) {
      //검색어 마지막글자가 보관된 node까지 이동
      if (currentNode.children.has(char)) {
        currentNode = currentNode.children.get(char);
      } else {
        return console.log(`${keyword} 검색 결과: 없음`);
      }
    }

    queue.enqueue(currentNode);

    while (queue.getSize()) {
      const { value, children, endPoint } = queue.dequeue();

      if (endPoint) {
        values.push(value);
      }

      for (const node of children.values()) {
        queue.enqueue(node);
      }
    }

    return console.log(`${keyword} 검색 결과: ${values}`);
  }
}

const trie = new Trie();

trie.insert("cat");
trie.insert("can");
trie.insert("cans");
trie.insert("cats");
trie.insert("cake");
trie.insert("안녕");
trie.insert("123");
trie.insert("!!");

console.log("----------");

trie.search("ca");
trie.search("cat");
trie.search("cd");
trie.search("ㅁㅁ");
