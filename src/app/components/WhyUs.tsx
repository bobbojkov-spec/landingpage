import Image from 'next/image';

export default function WhyUs() {
  return (
    <div className="relative w-[1440px] h-[516px]">
      <div className="absolute left-[0px] top-[0px] w-[1440px] h-[516px] bg-[#ffffff]"></div>
      <h1 className="absolute left-[511px] top-[60px] w-[419px] h-[71px] font-productsans text-[55px] leading-[71px] font-[760] text-[#a1603b]">
        Why dangila?
      </h1>
      <p className="absolute left-[400px] top-[141px] w-[640px] h-[60px] font-productsans text-[18px] leading-[30px] font-[400] text-[#4d4d4d]">
        Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed.
      </p>
      <p className="absolute left-[222px] top-[400px] w-[232px] h-[56px] font-productsans text-[16px] leading-[28px] font-[400] text-[#757575]">
        Yourself required no at thoughts delicate landlord it be.
      </p>
      <Image
        src="/images/icon_natural.png"
        alt="Natural"
        width={73}
        height={36}
        className="absolute left-[301px] top-[285px] w-[73px] h-[36px]"
        unoptimized
      />
      <h2 className="absolute left-[297px] top-[361px] w-[82px] h-[24px] font-productsans text-[24px] leading-[24px] font-[500] text-[#1e1e1e]">
        Natural
      </h2>
      <p className="absolute left-[604px] top-[400px] w-[232px] h-[56px] font-productsans text-[16px] leading-[28px] font-[400] text-[#757575]">
        Yourself required no at thoughts delicate landlord it be.
      </p>
      <Image
        src="/images/icon_nosideeffect.png"
        alt="No Side effect"
        width={70}
        height={70}
        className="absolute left-[685px] top-[251px] w-[70px] h-[70px]"
        unoptimized
      />
      <h2 className="absolute left-[641px] top-[361px] w-[158px] h-[24px] font-productsans text-[24px] leading-[24px] font-[500] text-[#1e1e1e]">
        No Side effect
      </h2>
      <p className="absolute left-[986px] top-[400px] w-[232px] h-[56px] font-productsans text-[16px] leading-[28px] font-[400] text-[#757575]">
        Yourself required no at thoughts delicate landlord it be.
      </p>
      <Image
        src="/images/icon_organic.png"
        alt="100% Organic"
        width={58}
        height={70}
        className="absolute left-[1073px] top-[251px] w-[58px] h-[70px]"
        unoptimized
      />
      <h2 className="absolute left-[1023px] top-[361px] w-[158px] h-[24px] font-productsans text-[24px] leading-[24px] font-[500] text-[#1e1e1e]">
        100% Organic
      </h2>
    </div>
  );
}