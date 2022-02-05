const list = {
    'create a new practice task': 'In Progress',
    'make a bed'                : 'Done',
    'write a post'              : 'To Do',                  
}
  
const STATUS = {    
    TO_DO       : 'To Do',
    IN_PROGRESS : 'In Progress',
    DONE        : 'Done',
}
const DEFAULT_STATUS = STATUS.TO_DO;

function changeStatus(task, status) {
    if(list[task]) {
        list[task] = status;
    }
}

function addTask(task) {
    if(!list[task]) {
        list[task] = DEFAULT_STATUS;
    }
}

function deleteTask(task) {
    delete list[task];
}

function showList() {

    const statusList = {
        [STATUS.TO_DO]       : '',
        [STATUS.IN_PROGRESS] : '',
        [STATUS.DONE]        : '',
    }
    let result = '';

    for (let key in list) {
        statusList[list[key]] += ` "${key}"\n`;
    }

    for (let key in statusList) {
        result += `${key}\n${statusList[key] || ' -\n'}`;
    }

    return  result;     
}

addTask('read english');
changeStatus('create a new practice task', 'Done');
addTask('take a walk');
changeStatus('write a post', 'In Progress');
deleteTask('make a bed'); 
deleteTask('create a new practice task') ;
console.log(showList());