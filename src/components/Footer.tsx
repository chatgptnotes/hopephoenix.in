export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center font-bold text-[10px]">
            HP
          </div>
          <span className="text-sm text-gray-500">
            HopePhoenix &copy; {new Date().getFullYear()} — All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="https://drmhope.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
            DrM Hope
          </a>
          <a href="https://bettroi.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
            Bettroi
          </a>
          <a href="mailto:info@drmhope.com" className="hover:text-orange-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
