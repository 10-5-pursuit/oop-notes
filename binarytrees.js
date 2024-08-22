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
}

const firstTreeNode = new BinaryTreeNode(10)
// console.log(firstTreeNode)

const bst = new BinarySearchTree(firstTreeNode)

bst.insert(5)
bst.insert(12)
bst.insert(7)
bst.insert(18)
// console.log(bst)


const { inspect } = require('util')

// console.log( inspect(bst, { "depth": null, "colors": true }) )

console.log( bst.search(7) )
console.log( bst.search(6) )

