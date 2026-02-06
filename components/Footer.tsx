import React from 'react';
import { Youtube, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6 md:px-12 mt-20 bg-[#0A0E0F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">CBD SUTRA</span>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Revenue engine for 7-8 figure CBD brands. Built by CBD people, for CBD people.
            </p>
          </div>
          
          <div>
            <p className="font-bold mb-4 text-white">Quick Links</p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#results" className="hover:text-[#D1FE17] transition-colors">Results</a></li>
              <li><a href="#process" className="hover:text-[#D1FE17] transition-colors">Process</a></li>
              <li><a href="#creatives" className="hover:text-[#D1FE17] transition-colors">Work</a></li>
              <li><a href="#testimonials" className="hover:text-[#D1FE17] transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-4 text-white">Contact</p>
             <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                    <Mail size={16} className="text-[#D1FE17]" />
                    <a href="mailto:hello@cbdsutra.com" className="hover:text-[#D1FE17]">hello@cbdsutra.com</a>
                </li>
                <li className="flex items-center gap-2">
                    <Phone size={16} className="text-[#D1FE17]" />
                    <a href="tel:+19898980982" className="hover:text-[#D1FE17]">+1 (989) 898-0982</a>
                </li>
             </ul>
          </div>

          <div>
            <p className="font-bold mb-4 text-white">Follow Us</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D1FE17] hover:text-[#0F1113] transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D1FE17] hover:text-[#0F1113] transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D1FE17] hover:text-[#0F1113] transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            Copyright © 2026 CBD Sutra. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
             <a href="#" className="hover:text-[#D1FE17]">Privacy Policy</a>
             <a href="#" className="hover:text-[#D1FE17]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};