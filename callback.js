//setting up for callback
function doChores(task, callback) {
    console.log(`Doing ${task}`);
    callback();
    //goes to end, then loops back up to fire the callback function
}

//the actual callback function
function Finished() {
    console.log('Finished with chores!');
}

//call the function that then does the callback when done
doChores('dishes', Finished);

const callbackFunction = (callback) => {
    return callback(2, 5);
}

const callback = (arg, arg2) => {
    return arg + arg2;
}

const result = callbackFunction(callback);
//reads callback in arg: takes two arguments and adds them, then returns the number
//told to return this callback function with the resulting arguments given
//runs callback function and returns result
console.log(result);

function countFinished() {
    console.log('Finished counting!');
}

//pass a function, do the countdown on the side, and then when done, fire the callback
setTimeout(countFinished, 10000);
console.log('Start!');

//callbacks are like a to-do list and a waiting list: it will do something, put it on the waiting list, then do the other to-do items. then, when the waiting list is done, it'll fire what's waiting there.