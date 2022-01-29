const list = {
    'create a new practice task': 'In Progress',
    'make a bed'                : 'Done',
    'write a post'              : 'To Do',  
}


function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = 'To Do';
}

function deleteTask(task) {
    delete list[task];
}

function showList() {
    
    console.log('Todo:');
    let countTaskTodo = 0;
    for (let task in list) {
        if(list[task] === 'To Do') {           
            console.log(`'${task}'`);
            countTaskTodo++;
        }                       
    }
    if (countTaskTodo === 0) 
        console.log('-');                

    console.log('In Progress:');
    let countTaskInProgress = 0;
    for (let task in list) {
        if(list[task] === 'In Progress') {
            countTaskInProgress++;
            console.log(`'${task}'`);
        }       
    }
    if(countTaskInProgress === 0)
        console.log('-');

    console.log('Done:');
    let countTaskDone = 0;
    for (let task in list) {
        if(list[task] === 'Done') {
            countTaskDone++;
            console.log(`'${task}'`);
        }        
    }
    if(countTaskDone === 0)
        console.log('-');

}

addTask('read english');
changeStatus('create a new practice task', 'Done');
addTask('take a walk');
deleteTask('make a bed');
showList();






   