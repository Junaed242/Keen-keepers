import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a2f] text-white">
      {/* Main Footer Content */}
      <div className="mx-10 md:mx-20 py-10 flex flex-col items-center text-center gap-4">
        <h2 className="font-display text-4xl font-bold">KeenKeeper</h2>
        <p className="text-white/70 text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <p className="text-white/60 text-sm">Social Links</p>
        <div className="flex gap-3">
          <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
            <FaYoutube size={16} />
          </a>
          <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
            <FaFacebook size={16} />
          </a>
          <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
            <FaXTwitter size={16} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-4">
        <div className="mx-10 md:mx-20 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/50 text-xs">
          <span>© 2026 KeenKeeper. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}