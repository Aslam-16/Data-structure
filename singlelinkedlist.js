
// Node is a one point of all list contains the data and next value references as a block
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

//Main Single link list it should contain head, tail and its properties
class Singlelinkedlist {
    constructor() {
        this.head=null
        this.tail=null
        this.length=0
    }
    //Adding elements to the list [PUSH]
    push(val){
        //create the NODE and push it
        let newNode=new Node(val)                                   //HEAD
        //if there is no node, assign the newnode as head and tail  NODE ->| VALUE | NEXT |
        if(!this.head){                                           //TAIL
            this.head=newNode
            this.tail=this.head
        }
        // if there is a head, then make the tails next reference to the newnode and
        // make the newnode as a new tail to continue chaining the list
        else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }
    //deletes the last node[tail] and make the prev node next as null and make it as tail
    pop(){
        if(!this.head) return undefined
        let current=this.head
        let prev=current
        while(current.next){
            prev=current
            current=current.next
        }
        prev.next=null
        this.tail=prev
        this.length--
        if(this.length==0){
            this.head=null
            this.tail=null
            
        }
        return this
        

    }
    //removing the first node and making the second node as head
    shift(){
        if (!this.head) return undefined
        else{
            let newhead=this.head.next
            this.head=newhead
            this.length--;
        }
        if (this.length == 0) {
            this.head = null
            this.tail = null

        }
    }

    //adds the node at the start, makes the head as its next and the added node is the new head
    unshift(val){
        let newNode=new Node(val)
        if(this.length==0){
            this.head=newNode //node=0,next=null
            this.tail=newNode //node=0,next=null
        }
        else{
            newNode.next=this.head // newnode=2,next= new node=1,next=node=0,next=null
            this.head=newNode       //head=new ''
        }
        this.length++
        return this 
    }
    //no index is available in single-link list, so to get a particular element, we'll use count and length to get it.
    get(index){
        let c=0
        let current=this.head
        //if(this.length==0) return null
        while(c!=index){
            current=current.next
            c++
        }
        return current

    }
    //change the value of a index
    set(index,val){
        let current=this.get(index)
        if(this.head){
        current.value=val
            return this
        }
        else return undefined
        

        
    }
    //insert a node at middle, we need to chnage the prev next, and set the new node next as the current node
    insert(index, val) {
        if(index<0 || index>=this.length) return undefined
        else{
        let newNode =new Node(val)
        if (index == 0) {
            this.unshift(val)
        }
        else if(index==this.length-1){
            this.push(val)
        }
        else{
            let prev=this.get(index-1)
            let curr = this.get(index)
            newNode.next=curr
            prev.next=newNode
        }
            this.length++
        return this

    }
    
    
}
    //remove the node, then take the removing element next and place it in the prev node next
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        else {
            if (index == 0) {
                this.shift()
            }
            else if (index == this.length - 1) {
                this.pop()
            }
            else{
                
                let prev = this.get(index - 1)
                let curr = this.get(index+1)
                prev.next = curr
                console.log('hiii',prev,curr)
            }
            this.length--;
            return this
        }
    }                              //          p->null
    //reversing the whole linked list 0,1,2,3    ->     3,2,1,0   node=c.next;c.next=prev; prev=curr;
    reverse(){//                      p c n
        let node=this.head
        this.head=this.tail
        this.tail=node
        let curr;
        let prev=null
        let c=0
        while(c!=this.length){
            curr=node.next//null                       5,4,3,2,1,0,null
            node.next=prev//4
            prev=node//5
            node=curr//null
            c++
           

        }
        return this
    }
}                                                                   //null->0   2->node 2->1 prev=2
                                                                    //
let sll=new Singlelinkedlist()

sll.push(0)
sll.push(1)
sll.push(2)
sll.push(3)
sll.push(4)
sll.push(5)
//sll.set(2,11)
//sll.remove(1)

console.log(sll.reverse())