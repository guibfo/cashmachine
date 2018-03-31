import CashMachine from "../src/CashMachine/cashMachine";
import { expect } from "chai";

describe("Validate Amount", () => {
  context("Amount is not a Number", () => {
    it("should throw a 'value is not a number' error", () => {
      const amount = "string";
      const cashMachine = new CashMachine(amount);
      expect(() => cashMachine.validateAmount(amount)).to.throw(
        "The inserted value is not a number"
      );
    });
  });

  context("Invalid amount", () => {
    it("should throw a 'invalid amount' error", () => {
      const amount = Math.floor(Math.random() * 1000000) - 1000000;
      const cashMachine = new CashMachine(amount);
      expect(() => cashMachine.validateAmount(amount)).to.throw(
        "Invalid amount!"
      );
    });
  });

  context("Notes not available", () => {
    it("should throw a 'notes not available' error", () => {
      const amount = Math.floor(Math.random() * 1000000);
      const cashMachine = new CashMachine(amount);
      if (amount % 10 !== 0) {
        expect(() => cashMachine.validateAmount(amount)).to.throw(
          "Notes not available!"
        );
      }
    });
  });
});

describe("Sort Notes", () => {
  context("Amount 10", () => {
    it("should be an array and have values [0, 0, 0, 1]", () => {
      const cashMachine = new CashMachine(10);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 0, 0, 1]);
    });
  });

  context("Amount 20", () => {
    it("should be an array and have values [0, 0, 1, 0]", () => {
      const cashMachine = new CashMachine(20);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 0, 1, 0]);
    });
  });

  context("Amount 30", () => {
    it("should be an array and have values [0, 0, 1, 1]", () => {
      const cashMachine = new CashMachine(30);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 0, 1, 1]);
    });
  });

  context("Amount 40", () => {
    it("should be an array and have values [0, 0, 2, 0]", () => {
      const cashMachine = new CashMachine(40);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 0, 2, 0]);
    });
  });

  context("Amount 50", () => {
    it("should be an array and have values [0, 1, 0, 0]", () => {
      const cashMachine = new CashMachine(50);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 1, 0, 0]);
    });
  });

  context("Amount 60", () => {
    it("should be an array and have values [0, 1, 0, 1]", () => {
      const cashMachine = new CashMachine(60);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 1, 0, 1]);
    });
  });

  context("Amount 70", () => {
    it("should be an array and have values [0, 1, 1, 0]", () => {
      const cashMachine = new CashMachine(70);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 1, 1, 0]);
    });
  });

  context("Amount 80", () => {
    it("should be an array and have values [0, 1, 1, 1]", () => {
      const cashMachine = new CashMachine(80);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 1, 1, 1]);
    });
  });

  context("Amount 90", () => {
    it("should be an array and have values [0, 1, 2, 0]", () => {
      const cashMachine = new CashMachine(90);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 1, 2, 0]);
    });
  });

  context("Amount 100", () => {
    it("should be an array and have values [1, 0, 0, 0]", () => {
      const cashMachine = new CashMachine(100);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([1, 0, 0, 0]);
    });
  });

  context("Amount 180", () => {
    it("should be an array and have values [1, 1, 1, 1]", () => {
      const cashMachine = new CashMachine(180);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([1, 1, 1, 1]);
    });
  });

  context("Amount 200", () => {
    it("should be an array and have values [2, 0, 0, 0]", () => {
      const cashMachine = new CashMachine(200);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([2, 0, 0, 0]);
    });
  });
});
