class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}

let node = new Node(4)
node.next = 13

// console.log(node)

const isPal = (head) => {
    let slow = head, fast = head
    
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    let halfLL = reverse(slow)
    let copyHalf = halfLL

    while(head != null && halfLL != null){
        if(head != halfLL){
            break;
        }

        head = head.next
        halfLL = halfLL.next
    }

    reverse(copyHalf)

    if(head == null || halfLL == null){
        return true
    }

    return false
}

function reverse(head){
    let prev = null
    while(head != null){
        let next = head.next
        head.next = head
        prev = head
        next = prev 
    }
    
    return prev
}