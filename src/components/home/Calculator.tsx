"use client";

import { useMemo, useState } from "react";

function inr(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export default function Calculator() {
  const [budget, setBudget] = useState(30000);
  const [cpl, setCpl] = useState(300);
  const [rate, setRate] = useState(5);
  const [sale, setSale] = useState(15000);

  const { leads, cust, cpc, chip, chipBad, verdict } = useMemo(() => {
    const leadsCalc = budget / cpl;
    const custCalc = (leadsCalc * rate) / 100;

    if (custCalc < 0.5) {
      return {
        leads: Math.round(leadsCalc),
        cust: custCalc.toFixed(1),
        cpc: null as number | null,
        chip: "Not enough customers",
        chipBad: true,
        verdict:
          "This budget buys less than one customer a month. The fix is usually lead quality and follow-up, not more budget.",
      };
    }

    const cpcCalc = budget / custCalc;

    if (sale <= 0) {
      return {
        leads: Math.round(leadsCalc),
        cust: custCalc.toFixed(1),
        cpc: cpcCalc,
        chip: "Add customer value",
        chipBad: true,
        verdict: "Add what one customer is worth to see if this is profitable.",
      };
    }

    if (sale > cpcCalc) {
      return {
        leads: Math.round(leadsCalc),
        cust: custCalc.toFixed(1),
        cpc: cpcCalc,
        chip: "Profitable",
        chipBad: false,
        verdict: `Each customer brings in ${inr(sale)}. Your ads are paying for themselves.`,
      };
    }

    return {
      leads: Math.round(leadsCalc),
      cust: custCalc.toFixed(1),
      cpc: cpcCalc,
      chip: "Losing money",
      chipBad: true,
      verdict: `Each customer brings in only ${inr(sale)}. Fix follow-up and lead quality before spending more.`,
    };
  }, [budget, cpl, rate, sale]);

  return (
    <div className="calc">
      <div className="inputs">
        <div className="field">
          <label htmlFor="budget">
            Monthly ad budget <output>{inr(budget)}</output>
          </label>
          <input
            id="budget"
            type="range"
            min={10000}
            max={500000}
            step={5000}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="cpl">
            Cost per lead <output>{inr(cpl)}</output>
          </label>
          <input
            id="cpl"
            type="range"
            min={50}
            max={3000}
            step={50}
            value={cpl}
            onChange={(e) => setCpl(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="rate">
            Leads who become customers <output>{rate}%</output>
          </label>
          <input
            id="rate"
            type="range"
            min={1}
            max={20}
            step={1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="sale">What one customer is worth to you</label>
          <input
            id="sale"
            type="number"
            min={0}
            step={500}
            value={sale}
            onChange={(e) => setSale(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="out" aria-live="polite">
        <small>Your cost per customer</small>
        <div className="big">{cpc !== null ? inr(cpc) : "—"}</div>
        <div className="row2">
          <div>
            <b>{leads}</b>
            <span>leads</span>
          </div>
          <div>
            <b>{cust}</b>
            <span>customers</span>
          </div>
        </div>
        <span className={`chip ${chipBad ? "bad" : ""}`}>{chip}</span>
        <p className="verdict">{verdict}</p>
      </div>
    </div>
  );
}
