import Image from 'next/image';

export default function Products() {
  return (
    <div className="relative w-[1440px] h-[360px]" style={{ marginTop: '75px' }}>
      <div className="absolute left-[0px] top-[0px] w-[1440px] h-[360px] bg-[#fafafa]"></div>
      <h1 className="absolute left-[552px] top-[40px] w-[336px] h-[57px] font-sharpsans text-[44px] leading-[57px] font-[760] text-[#a1603b] text-center uppercase whitespace-nowrap tracking-[-1px]">
        Our Products
      </h1>
      <Image
        src="/landingpage/images/product_cream.png"
        alt="Cream"
        width={180}
        height={180}
        className="absolute left-[209px] top-[116px] w-[180px] h-[180px]"
        unoptimized
      />
      <h2 className="absolute left-[264px] top-[281px] w-[70px] h-[28px] font-productsans text-[22px] leading-[27px] font-[500] text-[#333030] text-center">
        Cream
      </h2>
      <Image
        src="/landingpage/images/product_serum.png"
        alt="Serum"
        width={180}
        height={180}
        className="absolute left-[419px] top-[116px] w-[180px] h-[180px]"
        unoptimized
      />
      <h2 className="absolute left-[476px] top-[281px] w-[67px] h-[28px] font-productsans text-[22px] leading-[27px] font-[500] text-[#333030] text-center">
        Serum
      </h2>
      <Image
        src="/landingpage/images/product_lotion.png"
        alt="Lotion"
        width={180}
        height={180}
        className="absolute left-[629px] top-[116px] w-[180px] h-[180px]"
        unoptimized
      />
      <h2 className="absolute left-[687px] top-[281px] w-[65px] h-[28px] font-productsans text-[22px] leading-[27px] font-[500] text-[#333030] text-center">
        Lotion
      </h2>
      <Image
        src="/landingpage/images/product_sunscreen.png"
        alt="Sunscreen"
        width={180}
        height={180}
        className="absolute left-[839px] top-[116px] w-[180px] h-[180px]"
        unoptimized
      />
      <h2 className="absolute left-[875px] top-[281px] w-[108px] h-[28px] font-productsans text-[22px] leading-[27px] font-[500] text-[#333030] text-center">
        Sunscreen
      </h2>
      <Image
        src="/landingpage/images/product_coconutoil.png"
        alt="Coconut Oil"
        width={180}
        height={180}
        className="absolute left-[1051px] top-[116px] w-[180px] h-[180px]"
        unoptimized
      />
      <h2 className="absolute left-[1079px] top-[281px] w-[123px] h-[28px] font-productsans text-[22px] leading-[27px] font-[500] text-[#333030] text-center">
        Coconut Oil
      </h2>
    </div>
  );
}