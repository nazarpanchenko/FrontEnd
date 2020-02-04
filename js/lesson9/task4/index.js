const getPeople = rooms => {
   let result = [];

   rooms = Object.values(rooms).map(nestedArr => {
      for (let obj of nestedArr) {
         for (let key in obj) {
            result.push(obj[key]);
         }
      }
   });

   console.log(result);

   return result;
};

const rooms = {
    room1 : [
       {name : 'room1 name1'},
       {name : 'room1 name2'},
       {name : 'room1 name3'},
       {name : 'room1 name4'}
    ],
    room2 :[
       {name : 'room2 name1'},
       {name : 'room2 name2'},
       {name : 'room2 name3'},
       {name : 'room2 name4'}
    ],
    room3 :[
        {name : 'room3 name1'},
        {name : 'room3 name2'},
        {name : 'room3 name3'},
        {name : 'room3 name4'}
     ]
};

console.log(getPeople(rooms));