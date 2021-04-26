
let now = moment().format('ha');
now = "12pm"
localStorage.setItem("person", "bob");

let bob = localStorage.getItem("person");

console.log(bob);


const data = [
    {
        time: "9am",
        text: "breakfast",
    },
    {
        time: "10am",
        text: "breakfast",
    },{
        time: "11am",
        text: "breakfast",
    },{
        time: "12pm",
        text: "breakfast",
    },{
        time: "1pm",
        text: "breakfast",
    },{
        time: "2pm",
        text: "breakfast",
    },{
        time: "3pm",
        text: "breakfast",
    },{
        time: "4pm",
        text: "breakfast",
    },{
        time: "5pm",
        text: "breakfast",
    },
]


function populateScheduler() {
    let isAfterNow = false;
    for(let i = 0; i < data.length; i++){
        let slot = data[i];
        console.log(slot);

        let time = slot.time;
        let text = slot.text;
        let row = document.getElementById(time);
        let textarea = row.querySelector("textarea");
        console.log(textarea);
        textarea.value = text;

        if (now == row.id) {
            textarea.classList.add("present");
            isAfterNow = true;
        } else if (isAfterNow) {
            textarea.classList.add("future");
        } else {
            textarea.classList.add("past");
        }

        let saveBtn = row.querySelector(".saveBtn");
        saveBtn.addEventListener("click", function(){
            console.log(textarea.value);

            slot.text = textarea.value;
        })
    } 
}


