// Binary Search Tree


// a BINARY tree is a tree that has ONLY AT MOST TWO children, so we have a left pointer and right pointer
class BinaryTreeNode {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    constructor(root=null){
        this.root = root
    }

    insert(data){
        // Create a new instance of the BinaryTreeNode class using the data from the param
        const newTreeNode = new BinaryTreeNode(data)
        if(!this.root){
            this.root = newTreeNode
        } else {
            let currentNode = this.root
            while(currentNode){
                // check the newTreeNode against the currentNode
                if(newTreeNode.data < currentNode.data){
                    // if currentNode.left is null then assign the newTreeNode to be current.left
                    if(!currentNode.left){
                        currentNode.left = newTreeNode
                        break
                    } else {
                        // reassign currentNode to currentNode.left so we can keep iterating
                        currentNode = currentNode.left
                    }
                } else {
                    // newTreeNode.data is larger than currentNode.data
                    if(!currentNode.right){
                        currentNode.right = newTreeNode
                        break
                    } else {
                        currentNode = currentNode.right
                    }
                }
            }
        }
    }

    search(data){
        let currentNode = this.root
        while(currentNode){
            // if the currentNode's data is equal to data from the param
            if(currentNode.data === data){
                // return that node
                return currentNode
            } else if(data < currentNode.data){
                // else if data is less currentNode's data
                // reassign currentNode to be currentNode.left
                currentNode = currentNode.left
            } else {
                // reassign currentNode to be currentNode.right
                currentNode = currentNode.right
            }
        }
        return null
    }

    insert2(value){
        const newNode = new BinaryTreeNode(value)
        // if there is no root node, assign the newNode to be the root
        if(!this.root){
            this.root = newNode
        } else {
            this.recursiveInsert(this.root, newNode)
        }
    }

    recursiveInsert(node, newNode){
        // compare node's data to newNode's data
        if(newNode.data < node.data){
            // if there is no node.left, assign newNode to be node.left
            if(!node.left){
                node.left = newNode
            } else {
                // Keep traversing to find a home for the newNode
                this.recursiveInsert(node.left, newNode)
            }
        } else {
            // if there is no node.right, assign newNode to be node.right
            if(!node.right){
                node.right = newNode
            } else {
                // Keep traversing to find a home for the newNode
                this.recursiveInsert(node.right, newNode)
            }
        }
    }
}

const firstTreeNode = new BinaryTreeNode(10)
// console.log(firstTreeNode)

const bst = new BinarySearchTree(firstTreeNode)

bst.insert(5)
bst.insert(12)
// bst.insert(7)
// bst.insert(18)
// console.log(bst)


const { inspect } = require('util')


// console.log( bst.search(7) )
// console.log( bst.search(6) )

bst.insert2(7)
// console.log(bst)
console.log( inspect(bst, { "depth": null, "colors": true }) )