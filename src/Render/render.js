const markupWithdrawal = (notes, amount) => {
  return `
    <div class="amount">You withdrew a total of $${amount}</div>
    <div class="notes notes--hundreds">
      <span class="notes--number">x ${notes[0]}</span>
    </div>
    <div class="notes notes--fifties">
      <span class="notes--number">x ${notes[1]}</span>
    </div>
    <div class="notes notes--twenties">
      <span class="notes--number">x ${notes[2]}</span>
    </div>
    <div class="notes notes--tens">
      <span class="notes--number">x ${notes[3]}</span>
    </div>
  `;
};

const renderWithDrawal = (notes, amount) => {
  withdrew.innerHTML = markupWithdrawal(notes, amount);
};

export default renderWithDrawal;
