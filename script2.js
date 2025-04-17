let boxes = document.querySelectorAll(".box");
let new_game_btn = document.querySelector("#new-button");
let reset_btn = document.querySelector("#reset-button");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; //playerx,playery

const win_patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const drow = () => {
    let count = 0; // count of boxes
    for (let box of boxes) {
        if (box.innerText != "") {
            count++; // increment count if box is not empty
        }
        if (count == 9) {
            msg.innerText = "It's a draw!"; // show message if all boxes are filled
            msg_container.classList.remove("hidden"); // show message container
        }

    }
}



boxes.forEach((box) => {
    box.addEventListener("click", () =>  // on click 
    {


        if (box.innerText == "") // if box is empty
        {
            if (turn0) {
                box.innerText = "0";
                box.style.color = "blue"; // change color of box to blue 
                turn0 = false;
            }
            else {
                box.innerText = "X"
                box.style.color = "red"; // change color of box to red
                turn0 = true;
            }
        }
        box.disabled = true; // disable the box after click

        check_winner();
    })
})
const disable_boxes = () => {
    for (let box of boxes) {
        box.disabled = true; // disable all boxes
    }
}
const enable_boxes = () => {
    for (let box of boxes) {
        box.disabled = false; // disable all boxes
    }
}
const resetbtn = () => {
    for (let box of boxes) {
        box.innerText = ""; // reset all boxes
    }
    msg_container.classList.add("hidden"); // hide the message container
    boxes.forEach((box) => {
        box.style.backgroundColor = ""; // reset all boxes color
    });
    enable_boxes(); // enable all boxes
    turn0 = true; // reset turn

}
const show_winner = (winner) => {

    msg.innerText = ` Congratulation,winner is ${winner} `;
    msg_container.classList.remove("hidden");
    disable_boxes(); // disable all boxes after winner is declared
}

const check_winner = () => {
    for (let pattern of win_patterns) {

        let winner_found = false; // flag to check if winner is found


        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        if (pos1 != "" && pos2 != "" && pos3 != "") // if all boxes are not empty
        {
            if (pos1 === pos2 && pos2 === pos3) // if all boxes are same
            {

                console.log("winner is" + " " + pos1);
                show_winner(pos1); // show winner function call
                boxes[pattern[0]].style.backgroundColor = "green"; // change color of box to green
                boxes[pattern[1]].style.backgroundColor = "green"; // change color of box to green   
                boxes[pattern[2]].style.backgroundColor = "green"; // change color of box to green

                winner_found = true; // set flag to true if winner is found
                break;
            }
            if (!winner_found) {
                let allFilled = true;
                boxes.forEach((box) => {
                    if (box.innerText === "") {
                        allFilled = false;
                    }

                });

                if (allFilled) {
                    drow();
                }


            }
        }
    }
}
new_game_btn.addEventListener("click", resetbtn)
reset_btn.addEventListener("click", resetbtn)