/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
      let newNode = new Node(val);
      
      this.tail.next = newNode;
      this.tail = newNode();
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
      let newNode = new Node(val);
      
      newNode.next = this.head;
      this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
      let currentNode = this.head;
      
      while(currentNode.next){
          if (!currentNode.next.next){
              currentNode.next = null;
          }
      }
      
      return this.tail;
  }

  /** shift(): return & remove first item. */

  shift() {
      let shift = this.head;
      this.head = this.head.next;
      shift.next = null;
      return shift;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
      let i = 0;
      let val = this.head;
      
      while(i <= idx){
          if (i === idx) return val;
          
          if (val.next) break;
          
          val = val.next;
          
          i = i + 1;
      }
      
      return -1;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
      let i = 0;
      let node = this.head;
      
      while (i <= idx){
          if (i === idx){
              return;
          }
          
          i = i + 1;
          if (!node.next) break;
          node = node.next;
      }
      
      return -1;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
      let node = this.head;
      let newNode = new Node(val);
      let i = 0;
      
      while(i <= idx){
          if (i === idx - 1){
              newNode.next = node.next;
              node.next = newNode;
              return undefined;
          }
          
          i = i + 1;
          node = node.next;
      }
      
      return -1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
      let i = 0;
      let node = this.head;
      
      while(i <= idx){
          if (i === idx - 1){
              let val = node.next;
              node.next = node.next.next;
              return val;
          }
          
          i = i + 1;
          if (!node.next) break;
      }
      
      return -1;
  }

  /** average(): return an average of all values in the list */

  average() {
      let c = 0;
      let node = this.head;
      let sum = 0;
      
      while(node){
          sum = sum + node.val;
          
          c = c + 1;
          node = node.next;
      }
      
      return sum/c;
  }
}

//module.exports = LinkedList;

class DoublyNode{
    constructor(val){
        this.val = val;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(vals){
        this.head = null;
        this.tail = null;
    }
    
    reverse(){
        let node = this.head;
        
        while(node){
            [node.previous, node.next] = [node.next, node.previous];
            node = node.previous;
        }
        
        [this.head, this.tail] = [this.tail, this.head];
    }
    
    
}


//incomplete
function sortList(listA, listB){
    let aNode = listA.head;
    let bNode = listB.head;
    
    let sortedLists = new DoublyLinkedList();
    
    if (aNode < bNode){
        
    }else if (bNode < aNode){
        
    }
    
    return sortedLists;
}