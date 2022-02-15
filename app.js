// array is a list of items
var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]








for (let i =0; i<warriors.length; i++){
    let ele = document.createElement("div")
    let nameEle = document.createElement("h1")
    let damageEle = document.createElement("h3")
    let healthEle = document.createElement("h3")
    let warriorEle = document.createElement("h3")


        nameEle.innerHTML=warriors[i].name
        damageEle.innerHTML=warriors[i].damage;
        healthEle.innerHTML=warriors[i].health;
        warriorEle.innerHTML=warriors[i].warrior



    if (warriors[i].damage>=2 && warriors[i].health>=10 && warriors[i].warrior){





        nameEle.innerHTML = nameEle.innerHTML.replace('a', '<span style="color: red">a</span>' )



        ele.appendChild(nameEle);
        ele.appendChild(damageEle);
        ele.appendChild(healthEle);
        ele.appendChild(warriorEle);

    }




    document.body.appendChild(ele);}




//Class example stuff
// let list = [
//     {
//         name:"Luke",
//         age: 27,
//         cool: false
//     },
//     {
//         name:"Luke",
//         age: 27,
//         cool: false
//     },
//     {
//         name:"Luke",
//         age: 27,
//         cool: false
//     }
// ];


// for loop to render items

