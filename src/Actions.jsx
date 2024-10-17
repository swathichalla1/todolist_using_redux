export function ADD(todo){
    return {
        type:"ADD",
        payload:todo
    }
}

export function EDIT(todo){
    return {
        type:"EDIT",
        payload:todo
    }
}

export function DELETE(id){
    return {
        type:"DELETE",
        payload:id
    }
}