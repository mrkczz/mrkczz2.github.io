class Lesson {

    constructor(id, title, category, day, img, desc){
        this.id = id;
        this.title = title;
        this.category = category;
        this.day = day;
        this.img = img;
        this.desc = desc;
    }
}

const yoga1 = new Lesson(1, "Gentle Hatha Yoga", "yoga", "Monday", "images/yoga1.jpg",
"Gentle yoga is performed at a slower pace, with less intense positions, and usually includes extended time for meditation, yogic breath work, and relaxation.");

const yoga2 = new Lesson(2, "Vinyasa Yoga", "yoga", "Tuesday", "images/yoga2.jpg",
"Vinyasa is a style of yoga characterised by stringing postures together so that you move from one to another, seamlessly, using breath.");

const yoga3 = new Lesson(3, "Restorative Yoga", "yoga", "wednesday", "images/yoga3.jpg",
"Restorative yoga is a restful practice that is all about slowing down and opening your body through passive stretching");

const yoga4 = new Lesson(4, "Iyengar Yoga", "yoga", "Thursday", "images/yoga4.jpg",
"Iyengar Yoga is a form of yoga as exercise that has an emphasis on detail, precision and alignment in the performance of yoga postures");

const yoga5 = new Lesson(5, " Reformer Pilates Yoga", "yoga", "Friday", "images/pilate1.jpg",
"Pilates exercises done with some special types of machines are known as reformer Pilates.");

const yoga6 = new Lesson(6, "Clinical Pilate Yoga", "yoga", "Saturday", "images/pilate2.jpg",
"Clinical Pilates is a therapeutic exercise offered by some qualified physiotherapists as a part of treatment for various injuries and health conditions.");

const yoga7 = new Lesson(7, "Classical Pilates Yoga", "yoga", "Sunday", "images/pilate3.jpg ",
"Classic Pilates is the original form of Pilates that is based on a sequence of exercises");

const yoga8 = new Lesson (8, "Winsor Pilates Yoga", "yoga", "Monday", "images/yoga5.jpg",
"Developed by Mari Winsor, Winsor Pilates emphasizes breathing coordination and targets the “band of energy");


const lessons = [];


lessons.push(yoga1);
lessons.push(yoga2);
lessons.push(yoga3);
lessons.push(yoga4);
lessons.push(yoga5);
lessons.push(yoga6);
lessons.push(yoga7);
lessons.push(yoga8);

console.log(lessons.length);

lessons.map((item)=>{
    console.log(`item ${item.id}`);
})


const sectionCenter = document.querySelector("#section-center");

function loadContent(){
    let displayItem = lessons.map( (item) => {
        return `
        <article class="item">
        <img src=${item.img} alt=${item.title} id=${item.id} class="photo"/>    
        <div class="item-info">
        <div class="item-header">
        <h4>${item.title}</h4>
        <h4 class="day"><i class="fa-regular fa-calendar-days"></i>${item.day}</h4>
        </div>
            <p class="item-text">
            ${item.desc}
            </p>

        </div>
        <div id="result"></div>
        </article>
        `;
    });
    displayItem = displayItem.join("");
    console.log(displayItem);
    sectionCenter.innerHTML = displayItem;
    sectionCenter.addEventListener('click', clickHandler);

};

function clickHandler(e){
    console.log(e.currentTarget);
    console.log(e.target);
    if (e.currentTarget != e.target){
        const targetID = e.target.id;
        console.log(targetID);

        const item = lessons.find( i => i.id == targetID);
        console.log( item.title );

        if (typeof item !== 'undefined'){
            alert(item.desc);
        }
    }
}

window.addEventListener("DOMContentLoaded", loadContent, false);