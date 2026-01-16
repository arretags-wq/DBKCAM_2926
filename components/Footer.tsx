import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-600 text-sm">
          &copy; 2026 DBK Jiu-Jitsu Camp. Todos os direitos reservados.
        </p>
        <p className="text-slate-700 text-xs mt-2">
          Design by ArreTags Marketing Digital.
        </p>
      </div>
    </footer>
  );
};

export default Footer;