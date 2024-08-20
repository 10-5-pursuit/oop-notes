// Linked Lists
// data structure made up of Nodes that have two properties: data & next --  where data is the data the Node contains, and next points to the next Node in the list

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

const firstNode = new Node(1)
const secondNode = new Node(2)
const thirdNode = new Node(3)

// firstNode.next = secondNode
// secondNode.next = thirdNode

// console.log(firstNode)
// console.log(secondNode)



class LinkedList {
    constructor(head=null){
        this.head = head
    }

    insertAtHead(data){
        // Create a new Node that has the data property of "data" from the param
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        } else{
            // Assign this.head to be the "next" property for the newNode
            newNode.next = this.head
            // Reassign this.head to be the newNode
            this.head = newNode
        }
    }

    insertAtBack(data){
        const newNode = new Node(data)
        // if there is no head, assign this.head to be the newNode
        if(!this.head){
            this.head = newNode
        } else {
            // create a var to store the currentNode that we are checking
            let currentNode = this.head
            // while there is a next node after the currentNode
            while(currentNode.next){
                // reassign currentNode to be the next node
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
    }

    search(data){
        // method that returns to us the node that has the piece of data that matches the param

        let currentNode = this.head
        
        // if there is no head, return null
        if(!currentNode){
            return null
        }
        // go through all of the nodes in the list, until we either find the node whose data matches the param or when we've gone through the entire list
        while(currentNode){
            // check if the currentNode's data is equal to data from the param
            if(currentNode.data === data){
                return currentNode
            } else {
                currentNode = currentNode.next
            }
        }
        return null
    }

    clear(){
        this.head = null
    }

    getLast(){
        let currentNode = this.head
        if(!currentNode){
            return null
        }
        // while there is a node after the currentNode then reassign currentNode to be the next node
        while(currentNode.next){
            currentNode = currentNode.next
        }
        return currentNode
    }

    delete(data){
        // take out a node with a specific value(data).
        // We should make the currentNode's previousNode point to the currentNode's next node
        let prevNode = this.head
        let currentNode = this.head

        // if this.head's data === data then reassign this.head to be the next Node
        if(currentNode.data === data){
            this.head = currentNode.next
        }

        // while the currentNode's data isn't equal to the data we are looking for:
        while(currentNode.data !== data){
            // reassign prevNode and currentNode to look at their next nodes respectively
            prevNode = currentNode
            currentNode = currentNode.next
        }
        // reassign prevNode's next to look at the node AFTER the currentNode
        prevNode.next = currentNode.next
    }
}



// const list = new LinkedList(firstNode)
// list.head.next = secondNode
// console.log(list)



const months = [
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  
// let previousNode = new Node("Jan");
// let list = new LinkedList(previousNode);
// months.forEach(month => {
//     // Creating a new instance of the Node class and giving it the data of the current element in the array: months
//     let currentNode = new Node(month);
//     // We set the "next" property of previousNode (value of Jan) to point to the Node that we created on the previous line
//     // January.next -> February
//     previousNode.next = currentNode;
//     // After we've added a "next" property to the Node, we reassign previousNode to point to that "next" Node
//     previousNode = currentNode;
// })


const { inspect } = require('util')

// 'inspect' is a tool inside the util built-in package in Node that allows us to expand deeply nested objects in the console.
// console.log( inspect(list, { depth: null, colors: true } ) )

const node = new Node("January")
const list1 = new LinkedList(node)

// Adding to the front of the list
// list1.insertAtHead("February")
// list1.insertAtHead("March")


list1.insertAtBack("February")
list1.insertAtBack("March")

// console.log(inspect(list1, { depth: null, colors: true }))


// Testing out searching for a specific piece of data
// console.log(list1.search("January"))

// list1.clear()
list1.insertAtBack("April")
// console.log(list1)
// console.log( list1.getLast() )


list1.delete('February')
console.log(list1)
