export default function Home() {
  const faqs = [
    {
      q: "Do I need to know how to code?",
      a: "No. FlowBot's visual builder lets you drag, drop, and connect action blocks. It generates the automation script for you."
    },
    {
      q: "What kinds of tasks can I automate?",
      a: "Form filling, web scraping, login flows, UI testing, data extraction, and repetitive click-through workflows."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel your subscription at any time with no questions asked. You keep access until the end of your billing period."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Browser Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Build browser automation<br />
          <span className="text-[#58a6ff]">without writing a single line of code</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          FlowBot's visual workflow builder lets QA testers, ops teams, and small business owners automate repetitive browser tasks — click, type, extract — in minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Automating — $35/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[["Click","Simulate any click on any element"],["Type","Fill forms and inputs automatically"],["Extract","Scrape and export structured data"]].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-bold text-lg mb-1">{title}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$35</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {["Unlimited workflows","Visual drag-and-drop builder","Puppeteer script export","Form fill, click & extract blocks","Priority email support"].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} FlowBot. All rights reserved.
      </footer>
    </main>
  );
}
