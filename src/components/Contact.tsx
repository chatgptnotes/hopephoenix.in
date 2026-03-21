export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative text-center">
        <span className="text-sm text-orange-400 font-medium tracking-widest uppercase">
          Get in Touch
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
          Let&apos;s Build{" "}
          <span className="gradient-text">Together</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Whether you need a healthcare platform, industrial automation system,
          or enterprise AI solution — we&apos;re ready to help.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:info@drmhope.com"
            className="glass-card rounded-2xl p-6 text-center group"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
              Email Us
            </div>
            <div className="text-xs text-gray-500 mt-1">info@drmhope.com</div>
          </a>

          <a
            href="https://drmhope.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 text-center group"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
              DrM Hope
            </div>
            <div className="text-xs text-gray-500 mt-1">drmhope.com</div>
          </a>

          <a
            href="https://bettroi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 text-center group"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
              Bettroi FZE
            </div>
            <div className="text-xs text-gray-500 mt-1">bettroi.com</div>
          </a>
        </div>

        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-lg font-semibold mb-1">Offices</h3>
          <div className="grid sm:grid-cols-2 gap-6 mt-4 text-left">
            <div>
              <div className="text-sm font-semibold text-orange-400 mb-1">India — Nagpur</div>
              <p className="text-sm text-gray-400">
                701 Casa Royal Apartment, Mohan Nagar,
                <br />
                Nagpur, Maharashtra 440001
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-blue-400 mb-1">UAE — Free Zone</div>
              <p className="text-sm text-gray-400">
                Bettroi FZE
                <br />
                UAE Free Zone Establishment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
