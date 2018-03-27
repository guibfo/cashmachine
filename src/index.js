import CashMachine from "./CashMachine/cashMachine";
import renderWithDrawal from "./Render/render";
import tenNote from "./assets/images/ten-note.png";
import twentyNote from "./assets/images/twenty-note.png";
import fiftyNote from "./assets/images/fifty-note.png";
import hundredNote from "./assets/images/hundred-note.png";

const input = document.getElementById("amount");
const submit = document.getElementById("withdraw");
const withdrew = document.getElementById("withdrew");

submit.addEventListener("click", function() {
  let cashMachine = new CashMachine(input.value);
  if(cashMachine.sortNotes()) {
    renderWithDrawal(cashMachine.sortNotes(), input.value);
  }
  input.value = "";
});
