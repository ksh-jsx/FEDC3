class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;
    for (const char of string + ".") {
      //같은 철자를 포함한 문자가 추가될 경우 구분을 위해 "." 추가
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }

  search(keyword) {
    let currentNode = this.root;
    const values = []; //검색된 값들
    const queue = []; // 검색 대상

    for (const char of keyword) {
      //검색어 마지막글자가 보관된 node까지 이동
      if (currentNode.children.has(char))
        currentNode = currentNode.children.get(char);
      else return console.log("결과 없음");
    }

    queue.push(...currentNode.children);

    while (queue.length) {
      const { value, children } = queue.shift()[1];

      if (children.size === 0) values.push(value.slice(0, -1)); //마지막 "." 제거
      queue.push(...children);
    }
    return console.log(`${keyword} 검색결과: ${values}`);
  }
}

const trie = new Trie();
trie.insert("cans");
trie.insert("cat");
trie.insert("can");
trie.insert("cats");
trie.insert("cake");

trie.search("ca");
trie.search("cat");
trie.search("cd");
