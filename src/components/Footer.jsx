import logo from "../assets/logo.svg";
import socmed from "../assets/Socmed.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center relative z-0 bg-neutral-500 text-white pt-52 pb-[56px] px-6">
      
      <div className="max-w-[1200px] w-full flex flex-row justify-between mb-[64px]">
        
        <div className="grid md:grid-cols-3 gap-[120px]">
          <div>
            <h2 className="text-base font-medium mb-4">Platform</h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Why Fundsphere?</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-base font-medium mb-4">Features</h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Payments</li>
              <li>API</li>
              <li>Ecommerce</li>
              <li>Business</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-base font-medium mb-4">Company</h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>About Us</li>
              <li>Career</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <img src={logo} alt="logo" className="mb-4" />
          <p className="text-xl font-normal text-neutral-300">Sudirman St., 12B, Malang</p>
          <p className="text-xl font-normal text-neutral-300">+1 215-2231-5523</p>
          <p className="text-xl font-normal text-neutral-300">hello@fundsphere.id</p>
        </div>

      </div>

      <div className="w-full max-w-[1200px] border-t border-neutral-300 mb-[32px]"></div>

      <div className="w-full max-w-[1200px] flex flex-row justify-between items-center">
        <p className="text-primary-400 text-sm">© Fundsphere Copyright 2024. All Rights Reserved.</p>
        <img src={socmed} alt="socmed" />
      </div>

    </footer>
  );
}
