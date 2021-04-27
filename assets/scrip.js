
let now = moment().format('ha');




localStorage.setItem("person", "bob");
let bob = localStorage.getItem("person");
console.log(bob);


const data = [
    {
        time: "9am",
        text: "",
    },
    {
        time: "10am",
        text: "",
    },{
        time: "11am",
        text: "",
    },{
        time: "12pm",
        text: "",
    },{
        time: "1pm",
        text: "",
    },{
        time: "2pm",
        text: "",
    },{
        time: "3pm",
        text: "",
    },{
        time: "4pm",
        text: "",
    },{
        time: "5pm",
        text: "",
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
        textarea.value = localStorage.getItem(time);

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
            localStorage.setItem(time, textarea.value);

            slot.text = textarea.value;
        });
    } 
}





populateScheduler();


