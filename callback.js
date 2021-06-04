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

const callbackFunction = (addMe) => {
    return addMe(2, 5);
}

const callback = (arg, arg2) => {
    return arg + arg2;
}

const result = callbackFunction(callback);
console.log(result);