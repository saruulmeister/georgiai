import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-slate-900 text-white py-16 px-6"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12 items-start">
          {/* Brand + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-semibold text-white">Georgi AI</span>
            </div>

            <p className="text-slate-400 max-w-sm text-sm">
              AI-native OS for VC/PE. Automate operations, gain insights,
              and scale efficiently.
            </p>
          </div>

          {/* Social icons */}
          <div className="md:justify-self-end">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Twitter/X"
                data-testid="link-footer-twitter"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-8 border-t border-slate-800 text-center md:text-left text-slate-500 text-sm">
          © {new Date().getFullYear()} Georgi AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
