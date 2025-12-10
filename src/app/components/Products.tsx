import Image from 'next/image';

export default function Products() {
  return (
    <div className="relative w-[1440px] h-[360px]">
      <div className="absolute left-[0px] top-[0px] w-[1440px] h-[360px] bg-[#fafafa]"></div>
      <h1 className="absolute left-[552px] top-[40px] w-[336px] h-[57px] font-productsans text-[44px] leading-[57px] font-[760] text-[#a1603b]">
        Our Products
      </h1>
      <Image
        src="/images/product_cream.png"
        alt="Cream"
        width={120}
        height={120}
        className="absolute left-[239px] top-[141px] w-[120px] h-[120px]"
        unoptimized
      />
      <h2 className="absolute left-[264px] top-[281px] w-[70px] h-[28px] font-productsans text-[22px] leading-[27px] font-[500] text-[#333030]">
        Cream
      </h2>
      <Image
        src="/images/product_serum.png"
        alt="Serum"
        width={120}
        height={120}
        className="absolute left-[449px] top-[141px] w-[120px] h-[120px]"
        unoptimized
      />
      <h2 className="absolute left-[476px] top-[281px] w-[67px] h-[28px] font-productsans text-[22px] leading-[27px] font-[500] text-[#333030]">
        Serum
      </h2>
      <Image
        src="/images/product_lotion.png"
        alt="Lotion"
        width={120}
        height={120}
        className="absolute left-[659px] top-[141px] w-[120px] h-[120px]"
        unoptimized
      />
      <h2 className="absolute left-[687px] top-[281px] w-[65px] h-[28px] font-productsans text-[22px] leading-[27px] font-[500] text-[#333030]">
        Lotion
      </h2>
      <Image
        src="/images/product_sunscreen.png"
        alt="Sunscreen"
        width={120}
        height={120}
        className="absolute left-[869px] top-[141px] w-[120px] h-[120px]"
        unoptimized
      />
      <h2 className="absolute left-[875px] top-[281px] w-[108px] h-[28px] font-productsans text-[22px] leading-[27px] font-[500] text-[#333030]">
        Sunscreen
      </h2>
      <Image
        src="/images/product_coconutoil.png"
        alt="Coconut Oil"
        width={120}
        height={120}
        className="absolute left-[1081px] top-[141px] w-[120px] h-[120px]"
        unoptimized
      />
      <h2 className="absolute left-[1079px] top-[281px] w-[123px] h-[28px] font-productsans text-[22px] leading-[27px] font-[500] text-[#333030]">
        Coconut Oil
      </h2>
    </div>
  );
}