import Image from 'next/image';

export default function CTA() {
  return (
    <div className="relative w-[1240px] h-[491px] cta-offset" style={{ marginTop: '155px' }}>
      <div className="absolute left-[0px] top-[0px] w-[1240px] h-[491px] bg-[#ffffff]"></div>
      <Image
        src="/landingpage/images/newsletter.png"
        alt="newsletter"
        width={589}
        height={497}
        className="absolute left-[0px] top-[-5px] w-[589px] h-[497px]"
        unoptimized
      />
      <h1 className="absolute left-[620px] top-[144px] w-[467px] h-[58px] font-sharpsans text-[46px] leading-[57px] font-[760] text-[#a1603b] whitespace-nowrap tracking-[-1px]">
        Subscribe Newsletter
      </h1>
      <h2 className="absolute left-[620px] top-[212px] w-[359px] h-[25px] font-productsans text-[20px] leading-[25px] font-[400] text-[#555353]">
        Enter your email below for daily updates
      </h2>
      <div className="absolute left-[620px] top-[282px] w-[620px] h-[65px] bg-[#ffffff] rounded-[50px] border border-gray-300"></div>
      <p className="absolute left-[640px] top-[303px] w-[135px] h-[23px] font-productsans text-[18px] leading-[22px] font-[400] text-[#979797]">
        Enter your email.
      </p>
      <div className="absolute left-[1040px] top-[289px] w-[192px] h-[51px] bg-[#a1603b] rounded-[50px]" style={{ boxShadow: '0px 1.85px 3.15px rgba(56, 56, 56, 0.024), 0px 8.15px 6.52px rgba(56, 56, 56, 0.039), 0px 20px 13px rgba(56, 56, 56, 0.05), 0px 38.52px 25.48px rgba(56, 56, 56, 0.061), 0px 64.81px 46.85px rgba(56, 56, 56, 0.076), 0px 100px 80px rgba(56, 56, 56, 0.1)' }}></div>
      <p className="absolute left-[1079px] top-[305px] w-[123px] h-[18px] font-productsans text-[18px] leading-[18px] font-[500] text-[#ffffff] tracking-[0.72px] uppercase">
        Get Started
      </p>
    </div>
  );
}