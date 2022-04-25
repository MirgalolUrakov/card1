const userInfo = [
    {
        photo: "https://avatars.mds.yandex.net/i?id=abb6c9db6228f0dbfc438d35b56e10f6-5480874-images-thumbs&n=13",
        name: "Jasur",
        age: 25
    }, 
    {
        photo: "https://avatars.mds.yandex.net/i?id=ef79ef0462963fa2d87488da8ed94b7b-5887538-images-thumbs&n=13",
        name: "Umar",
        age: 15
    }, 
    { 
        photo: "https://avatars.mds.yandex.net/i?id=650b845f40f40d7bf55b1dea3406b888-4269676-images-thumbs&n=13" ,
        name: "Mirjalol",
        age: 17
    }, 
    {   
        photo: "https://photoshop-kopona.com/uploads/posts/2018-08/1535573561_06.jpg",
        name: "Ibrahim",
        age: 40
    },      

    {
        photo: "https://i.pinimg.com/originals/b2/59/1c/b2591c337e3266a5d1e13e290c595a00.jpg" ,
        name: "Daler",
        age: "33"
    },

    
    
];


const app = document.getElementById('#app');


for(let i = 0; i < userInfo.length; i++){
    const container = document.createElement("div");
   
    const card = ` 
        <div class="card">
            <img src=${userInfo[i].photo} width="50px" height="50px" class="ava" />
            <p>Name: <b>${userInfo[i].name}</b></p>
            <p>Age: <b>${userInfo[i].age}</b></p>
        </div>`

    container.innerHTML = card;
    app.appendChild(container);
}

