import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="relative w-[1220px] h-[579px] bg-[#ffffff] about-us-offset">
      <Image
        src="/images/product_about.png"
        alt="image 2"
        width={581}
        height={529}
        className="absolute left-[589px] top-[50px] w-[581px] h-[529px]"
        unoptimized
      />
      <h1 className="absolute left-[0px] top-[115px] w-[268px] h-[71px] font-productsans text-[55px] leading-[71px] font-[760] text-[#a1603b]">
        About US
      </h1>
      <p className="absolute left-[0px] top-[216px] w-[500px] h-[180px] font-productsans text-[18px] leading-[30px] font-[400] text-[#4d4d4d]">
        And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
      </p>
      <div className="absolute left-[0px] top-[456px] w-[190px] h-[58px] bg-[#a1603b] rounded-[50px]"></div>
      <h2 className="absolute left-[52px] top-[475px] w-[86px] h-[20px] font-productsans text-[20px] leading-[20px] font-[400] text-[#ffffff] tracking-[1px]">
        Buy Now
      </h2>
      <div className="absolute left-[220px] top-[456px] w-[190px] h-[58px] bg-[#383838] rounded-[60px]"></div>
      <h2 className="absolute left-[255px] top-[475px] w-[120px] h-[20px] font-productsans text-[20px] leading-[20px] font-[400] text-[#ffffff] tracking-[1px]">
        View Details
      </h2>
    </div>
  );
}