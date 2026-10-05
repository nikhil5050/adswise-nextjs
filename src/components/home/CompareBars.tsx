type Row = {
  title: string;
  afterLabel: string;
  afterVal: string;
  afterPct: number;
  beforeLabel: string;
  beforeVal: string;
  beforePct: number;
};

const rows: Row[] = [
  {
    title: "Site visits per month",
    afterLabel: "With Adswise",
    afterVal: "38",
    afterPct: 92,
    beforeLabel: "Before",
    beforeVal: "12",
    beforePct: 29,
  },
  {
    title: "Cost per site visit",
    afterLabel: "With Adswise",
    afterVal: "₹2,600",
    afterPct: 48,
    beforeLabel: "Before",
    beforeVal: "₹4,400",
    beforePct: 84,
  },
];

export default function CompareBars() {
  return (
    <div className="compare-bars">
      {rows.map((r) => (
        <div className="cb" key={r.title}>
          <h3>{r.title}</h3>
          <div className="row">
            <div className="bar after">
              <b style={{ width: `${r.afterPct}%` }} />
            </div>
            <div className="val">
              <span>{r.afterLabel}</span>
              <div>{r.afterVal}</div>
            </div>
          </div>
          <div className="row">
            <div className="bar before">
              <b style={{ width: `${r.beforePct}%` }} />
            </div>
            <div className="val">
              <span>{r.beforeLabel}</span>
              <div>{r.beforeVal}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
