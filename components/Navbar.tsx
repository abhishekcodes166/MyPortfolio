"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#profiles", label: "Profiles" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-edge bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group font-mono text-sm text-foreground">
          <span className="text-accent">~/</span>
          abhishek
          <span className="text-accent transition-opacity group-hover:opacity-0">_</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-accent-soft hover:text-foreground"
            >
              <span className="mr-1 font-mono text-xs text-accent">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download="Abhishek_Kumar_Jha_Resume.pdf"
            className="ml-3 inline-flex items-center gap-2 rounded-md border border-edge-strong px-3.5 py-1.5 font-mono text-sm text-accent transition-all hover:bg-accent-soft"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button
          className="rounded-md p-2 text-muted hover:text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-edge bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-4 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-muted hover:bg-accent-soft hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                download="Abhishek_Kumar_Jha_Resume.pdf"
                className="mt-2 inline-flex items-center gap-2 rounded-md border border-edge-strong px-3 py-2.5 font-mono text-sm text-accent"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
