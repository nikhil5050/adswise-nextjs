/** Answer-first block: a question heading and a self-contained answer that search and AI engines can quote. */
export default function QuickAnswer({ question, answer, points }: { question: string; answer: string; points?: string[] }) {
  return (
    <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl text-ink md:text-4xl">{question}</h2>
        <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">{answer}</p>
        {points && points.length > 0 && (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="border-l-2 border-growth pl-4 text-sm text-muted">
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
