class CashMachine {
  constructor(amount) {
    this.amount = amount;
    this.notes = [100, 50, 20, 10];
  }

  sortNotes() {
    let amount = this.amount;
    this.validateAmount(amount);
    const notes = this.notes;
    let result = new Array();
    let withdraw = notes.map(notes => {
      let numNotes = parseInt(amount / notes);
      result.push(numNotes);
      amount = amount - numNotes * notes;
    });
    return result;
  }

  validateAmount(amount) {
    //In case someone bypasses the HTML Number input validation
    if (isNaN(amount)) {
      throw new Error("The inserted value is not a number");
    } else if (amount < 0) {
      throw new Error("Invalid amount!");
    } else if (amount % 10 !== 0) {
      throw new Error("Notes not available!");
    }
  }
}

export default CashMachine;
