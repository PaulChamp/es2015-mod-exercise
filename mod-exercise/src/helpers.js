const choice = (items) => {
    return items[Math.floor(items.length * Math.random())];
};


const remove = (items, item) => {
    for (let i=0; i < items.length; i++){
        if(items[i] === item){
            items.splice(i,1);

            return item;
        }
    }
    return undefined;
};

export {choice , remove};