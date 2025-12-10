import Image from 'next/image';

export default function Header() {
  return (
    <div className="relative w-[1440px] h-[990px] overflow-visible">
      <div className="absolute left-[0px] top-[0px] w-[1440px] h-[990px] bg-[#ddc0ae]"></div>
      <Image
        src="/landingpage/images/header_image.png"
        alt="22865904_22 1"
        width={1092}
        height={728}
        className="absolute left-[469px] top-[152px] w-[1092px] h-[728px]"
        unoptimized
      />
      <Image
        src="/landingpage/images/headerimage_blur.png"
        alt="header blur"
        width={1082}
        height={363}
        className="absolute left-[358px] top-[591px] w-[1082px] h-[363px]"
        unoptimized
      />
      <h1 className="absolute left-[1375px] top-[254px] w-[352px] h-[703px] font-sharpsans text-[272px] leading-[352px] font-[500] text-[#383838] tracking-[-21.76px] opacity-[0.05]" style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}>
        faceoil
      </h1>
      <div className="absolute left-[0px] top-[816px] w-[78px] h-[174px] bg-[#383838]"></div>
      <div className="absolute left-[30px] top-[842px] w-[18px] h-[103px] bg-[#383838]"></div>
      <p className="absolute left-[30px] top-[931px] w-[18px] h-[14px] font-sharpsans text-[14px] leading-[17px] font-[500] text-[#ffffff]">
        fb
      </p>
      <p className="absolute left-[30px] top-[886px] w-[18px] h-[13px] font-sharpsans text-[14px] leading-[17px] font-[500] text-[#ffffff]">
        pi
      </p>
      <p className="absolute left-[30px] top-[842px] w-[18px] h-[12px] font-sharpsans text-[14px] leading-[17px] font-[500] text-[#ffffff]">
        in
      </p>
      <div className="absolute left-[135px] top-[626px] w-[250px] h-[65px] bg-[#a1603b] rounded-[50px]"></div>
      <div className="absolute left-[270px] top-[648px] w-[1px] h-[24px] bg-[#d9d9d9] opacity-[0.30000001192092896]"></div>
      <h2 className="absolute left-[174px] top-[649px] w-[83px] h-[20px] font-circular text-[20px] leading-[20px] font-[500] text-[#ffffff]">
        Buy Now
      </h2>
      <h2 className="absolute left-[285px] top-[649px] w-[64px] h-[20px] font-sharpsans text-[20px] leading-[20px] font-[500] text-[#ffffff]">
        $49.99
      </h2>
      <p className="absolute left-[135px] top-[478px] w-[483px] h-[104px] font-productsans text-[16px] leading-[26px] font-[400] text-[#4f4f4f]">
        Provide deluxe hydration for those with dry or age-related skin concerns. They add intense moisture to dehydrated or mature skin, alleviating uneven, sun-damaged textures to promote natural radiance.
      </p>
      <h2 className="absolute left-[135px] top-[448px] w-[199px] h-[20px] font-productsans text-[20px] leading-[20px] font-[700] text-[#a1603b]">
        Natural Inner Beauty
      </h2>
      <h1 className="absolute left-[135px] top-[265px] w-[459px] h-[152px] font-productsans text-[152px] leading-[152px] font-[700] text-[#a1603b] tracking-[-8px]">
        dangila
      </h1>
      <h2 className="absolute left-[29px] top-[52px] w-[108px] h-[18px] font-circular text-[32px] leading-[18px] font-[500] text-[#4f4f4f]">
        dangila
      </h2>
      <p className="absolute left-[129px] top-[42px] w-[19px] h-[15px] font-circular text-[12px] leading-[15px] font-[500] text-[#4f4f4f] rotate-[1.6081230200044232e-16deg]">
        TM
      </p>
      <p className="absolute left-[400px] top-[40px] w-[74px] h-[23px] font-productsans text-[18px] leading-[22px] font-[400] text-[#000000]">
        Products
      </p>
      <div className="absolute left-[401px] top-[69px] w-[72px] h-[2px] bg-[#a1603b]"></div>
      <p className="absolute left-[516px] top-[40px] w-[43px] h-[23px] font-productsans text-[18px] leading-[22px] font-[400] text-[#000000]">
        Story
      </p>
      <p className="absolute left-[601px] top-[40px] w-[120px] h-[23px] font-productsans text-[18px] leading-[22px] font-[400] text-[#000000]">
        Manufacturing
      </p>
      <p className="absolute left-[763px] top-[40px] w-[84px] h-[23px] font-productsans text-[18px] leading-[22px] font-[400] text-[#000000]">
        Packaging
      </p>
      <p className="absolute left-[889px] top-[40px] w-[44px] h-[23px] font-productsans text-[18px] leading-[22px] font-[400] text-[#000000]">
        Team
      </p>
      <Image
        src="/landingpage/images/icon_search.png"
        alt="search"
        width={24}
        height={24}
        className="absolute left-[1270px] top-[44px] w-[24px] h-[24px]"
        unoptimized
      />
      <Image
        src="/landingpage/images/icon_basket.png"
        alt="basket"
        width={24}
        height={24}
        className="absolute left-[1319px] top-[44px] w-[24px] h-[24px]"
        unoptimized
      />
      <Image
        src="/landingpage/images/icon_person.png"
        alt="person"
        width={24}
        height={24}
        className="absolute left-[1368px] top-[44px] w-[24px] h-[24px]"
        unoptimized
      />
    </div>
  );
}