class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
      let r = this.root;
      while(r){
          if (val > r.val){
              if (r.right === null){
                  r.right = new Node(val)
              }else{
                  r = r.right;
              }
          }else if (val < r.val){
              if (r.left === null){
                  r.left = new Node(val);
              }else{
                  r = r.left;
              }
          }else{
              break;
          }
      }
      return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, root=this.root) {
      if (val > root.val){
          if (root.right === null){
              root.right = new Node(val);
          }else{
              this.insertRecursively(val, root.right);
          }
      }else if (val < root.val){
          if (root.left === null){
              root.left = new Node(val);
          }else{
              this.insertRecursively(val, root.left);
          }
      }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
      let r = this.root;
      while(r){
          if (r.val === val) return r;
          
          if (val > r.val){
              r = r.right;
          }else{
              r = r.left;
          }
      }
      
      return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, r=this.root) {
      if (val === r.val) return r;
      
      if (val > r){
          this.findRecursively(val, r.right);
      }else{
          this.findRecursively(val, r.left);
      }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

//module.exports = BinarySearchTree;
