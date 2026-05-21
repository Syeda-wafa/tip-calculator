import { useState } from "react";
import "./App.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [activeTip, setActiveTip] = useState(null); // ✅ FIX

  const presetTips = [10, 15, 20];

  // Validation
  const errors = {
    bill:
      bill !== "" && (isNaN(bill) || Number(bill) <= 0)
        ? "Bill must be greater than 0"
        : "",

    people:
      people !== "" && (!Number.isInteger(Number(people)) || Number(people) < 1)
        ? "People must be at least 1"
        : "",

    tip:
      customTip !== "" && (Number(customTip) < 0 || Number(customTip) > 100)
        ? "Tip must be between 0 and 100"
        : "",
  };

  // Final tip value
  const tipPercent = customTip !== "" ? Number(customTip) || 0 : activeTip || 0;

  // Valid checks
  const validBill = !errors.bill && bill !== "";
  const validPeople = !errors.people && people !== "";
  const validTip = !errors.tip;

  let tipAmount = 0;
  let total = 0;
  let perPerson = 0;

  if (validBill && validPeople && validTip) {
    tipAmount = (Number(bill) * tipPercent) / 100;
    total = Number(bill) + tipAmount;
    perPerson = total / Number(people);
  }

  // Reset
  const handleReset = () => {
    setBill("");
    setCustomTip("");
    setPeople("");
    setActiveTip(null); // ✅ all buttons inactive
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Tip Calculator</h1>

        {/* Bill */}
        <div className="input-group">
          <label>Bill Amount (Rs)</label>
          <input
            type="number"
            placeholder="Enter bill amount"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
          {errors.bill && <p className="error">{errors.bill}</p>}
        </div>

        {/* Tip */}
        <div className="input-group">
          <label>Select Tip %</label>

          <div className="tip-buttons">
            {presetTips.map((value) => (
              <button
                key={value}
                className={
                  activeTip === value && customTip === "" ? "active" : ""
                }
                onClick={() => {
                  setActiveTip(value);
                  setCustomTip("");
                }}
              >
                {value}%
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Custom Tip %"
            value={customTip}
            onChange={(e) => {
              setCustomTip(e.target.value);
              setActiveTip(null); // optional: custom overrides preset
            }}
          />

          {errors.tip && <p className="error">{errors.tip}</p>}
        </div>

        {/* People */}
        <div className="input-group">
          <label>Number of People</label>
          <input
            type="number"
            placeholder="Enter number of people"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
          {errors.people && <p className="error">{errors.people}</p>}
        </div>

        {/* Results */}
        <div className="results">
          <div className="result-box">
            <span>Tip Amount</span>
            <h2>Rs {tipAmount.toFixed(2)}</h2>
          </div>

          <div className="result-box">
            <span>Grand Total</span>
            <h2>Rs {total.toFixed(2)}</h2>
          </div>

          <div className="result-box">
            <span>Per Person</span>
            <h2>Rs {perPerson.toFixed(2)}</h2>
          </div>
        </div>

        {/* Reset */}
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
