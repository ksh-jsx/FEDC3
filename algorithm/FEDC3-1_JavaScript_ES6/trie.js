class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue.push(...value);
    this.rear += value.size;
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
      return console.log(`${string}: 삽입 불가. 영어만 입력하세요`);
    }

    let currentNode = this.root;
    string += "."; //같은 철자를 포함한 문자가 추가될 경우 구분을 위해 "." 추가

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }

  search(keyword) {
    if (!/[a-zA-Z]/.test(keyword)) {
      return console.log(`${keyword}: 검색 불가. 영어만 입력하세요`);
    }

    let currentNode = this.root;
    const values = []; //검색된 값들
    const queue = new Queue(); // 검색 대상

    for (const char of keyword) {
      //검색어 마지막글자가 보관된 node까지 이동
      if (currentNode.children.has(char)) currentNode = currentNode.children.get(char);
      else {
        return console.log(`${keyword} 검색 결과: 없음`);
      }
    }

    queue.enqueue(currentNode.children);

    while (queue.getSize()) {
      const { value, children } = queue.dequeue()[1];

      if (children.size === 0) {
        values.push(value.slice(0, -1)); //마지막 "." 제거
      }
      queue.enqueue(children);
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
