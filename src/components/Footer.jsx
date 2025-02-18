import logo from '../assets/logo.svg';
import socmed from '../assets/Socmed.svg';

export default function footer() {
  return (
    <footer className="relative z-0 flex flex-col items-center bg-neutral-500 px-6 pb-[56px] pt-52 text-white lg:pt-60">
      <div className="mb-[64px] flex w-full max-w-[1200px] flex-col justify-between lg:flex-row">
        <div className="grid grid-cols-2 gap-[64px] md:grid-cols-3 lg:gap-[120px]">
          <div>
            <h2 className="mb-4 text-base font-medium">Platform</h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Why Fundsphere?</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-base font-medium">Features</h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Payments</li>
              <li>API</li>
              <li>Ecommerce</li>
              <li>Business</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-base font-medium">Company</h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>About Us</li>
              <li>Career</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="order-first mb-[64px] flex flex-col items-start lg:order-none lg:mb-0">
          <img src={logo} alt="logo" className="mb-4" />
          <p className="text-xl font-normal text-neutral-300">Sudirman St., 12B, Malang</p>
          <p className="text-xl font-normal text-neutral-300">+1 215-2231-5523</p>
          <p className="text-xl font-normal text-neutral-300">hello@fundsphere.id</p>
        </div>
      </div>

      <div className="mb-[32px] w-full max-w-[1200px] border-t border-neutral-300"></div>

      <div className="flex w-full max-w-[1200px] flex-col items-center justify-between gap-[16px] lg:flex-row">
        <p className="text-center text-sm text-primary-400">© Fundsphere Copyright 2024. All Rights Reserved.</p>
        <img src={socmed} alt="socmed" />
      </div>
    </footer>
  );
}
