data =[{
    'img1': 'aset/pace yunus1.jpg',
    'img2' : 'aset/pace yunus1.jpg',
    'title' : 'pace',
    'subtitle' :'pace bergoyang',
    'desc' : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo nihil a nesciunt doloremque sed!"
},{
    'img1': 'aset/pace yunus1.jpg',
    'img2' :'aset/pace yunus1.jpg',
    'title' : 'pace',
    'subtitle' :'pace bergoyang',
    'desc' : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo nihil a nesciunt doloremque sed!"
}];

var container = document.querySelector('.container-project');
data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>
    <button class="read-more">Read More</button>
</div>`

}); 

