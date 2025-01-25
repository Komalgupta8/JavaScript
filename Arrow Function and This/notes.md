## Java execution context

1-Global execution context
2-Function exe context
3-eval exe con

## js me code execute kaise hota hai (2 phases)

## <-------------------code------------------------>
let val1=12
let val2=3

function add(num1 , num2){
    let total=num1+num2
    return total
}

let result1=add(val1 , val2)
let result2=add(2,3)

## <----------------------code------------------------>

# ----------------first cycle-----------------
1-Global exe -->which is locate in this

2-Memory Creation Phase(Creation Phase) ---> jo bhi variables likhte hai unke liye place allocate hoti hai 
## sare var ko lekar unko undifined krke memory allocate kr dete hai

val1=undefined
val2=undefined
add=definition
result1=undefined
result2=undefined

# --------------sec cycle-----------------
3-Execution Phase---->

val1=12
val2=3
ADDNUM--->result1--->

add  = new variable env + execution thread ---> ye jo new baar baar bnta h ye delete bhi ho jata h kaam hi jane ke baad
                        
                        |
                        |
        ________________|____________________                      
       |                                     |
# Memory Phase                       Execution Phase
                                                                        
val1=undefined                       num1=12
val2=undefined                       num2=3
total=undefined                      total=15  # ye jo total h ye global execution me return ho jayega

##### result1 = 15

now result2--------->

## same chalega sb and , result2=5

##### jitni baar fun call hogi utni baar memory exe phase se staring hogi







