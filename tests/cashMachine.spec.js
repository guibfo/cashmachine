import CashMachine from "../src/CashMachine/cashMachine";
import { expect } from "chai";

describe("Validate Amount", function() {
  context("Amount is not a Number", function() {
    it("should throw a 'value is not a number' error", function() {
      const amount = "string";
      const cashMachine = new CashMachine(amount);
      expect(() => cashMachine.validateAmount(amount)).to.throw(
        "The inserted value is not a number"
      );
    });
  });

  context("Invalid amount", function() {
    it("should throw a 'invalid amount' error", function() {
      const amount = Math.floor(Math.random() * 1000000) - 1000000;
      const cashMachine = new CashMachine(amount);
      expect(() => cashMachine.validateAmount(amount)).to.throw(
        "Invalid amount!"
      );
    });
  });

  context("Notes not available", function() {
    it("should throw a 'notes not available' error", function() {
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

describe("Sort Notes", function() {
  context("Amount 10", function() {
    it("should be an array and have values [0, 0, 0, 1]", function() {
      const cashMachine = new CashMachine(10);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 0, 0, 1]);
    });
  });

  context("Amount 20", function() {
    it("should be an array and have values [0, 0, 1, 0]", function() {
      const cashMachine = new CashMachine(20);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 0, 1, 0]);
    });
  });

  context("Amount 30", function() {
    it("should be an array and have values [0, 0, 1, 1]", function() {
      const cashMachine = new CashMachine(30);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 0, 1, 1]);
    });
  });

  context("Amount 40", function() {
    it("should be an array and have values [0, 0, 2, 0]", function() {
      const cashMachine = new CashMachine(40);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 0, 2, 0]);
    });
  });

  context("Amount 50", function() {
    it("should be an array and have values [0, 1, 0, 0]", function() {
      const cashMachine = new CashMachine(50);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 1, 0, 0]);
    });
  });

  context("Amount 60", function() {
    it("should be an array and have values [0, 1, 0, 1]", function() {
      const cashMachine = new CashMachine(60);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 1, 0, 1]);
    });
  });

  context("Amount 70", function() {
    it("should be an array and have values [0, 1, 1, 0]", function() {
      const cashMachine = new CashMachine(70);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 1, 1, 0]);
    });
  });

  context("Amount 80", function() {
    it("should be an array and have values [0, 1, 1, 1]", function() {
      const cashMachine = new CashMachine(80);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 1, 1, 1]);
    });
  });

  context("Amount 90", function() {
    it("should be an array and have values [0, 1, 2, 0]", function() {
      const cashMachine = new CashMachine(90);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([0, 1, 2, 0]);
    });
  });

  context("Amount 100", function() {
    it("should be an array and have values [1, 0, 0, 0]", function() {
      const cashMachine = new CashMachine(100);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([1, 0, 0, 0]);
    });
  });

  context("Amount 180", function() {
    it("should be an array and have values [1, 1, 1, 1]", function() {
      const cashMachine = new CashMachine(180);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([1, 1, 1, 1]);
    });
  });

  context("Amount 200", function() {
    it("should be an array and have values [2, 0, 0, 0]", function() {
      const cashMachine = new CashMachine(200);
      expect(cashMachine.sortNotes())
        .to.be.an("array")
        .and.to.deep.equal([2, 0, 0, 0]);
    });
  });
});
