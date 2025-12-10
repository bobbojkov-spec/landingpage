import Image from 'next/image';

export default function Footer() {
  return (
    <div className="relative w-[1440px] h-[440px]" style={{ marginTop: '-5px' }}>
      <div className="absolute left-[0px] top-[0px] w-[1440px] h-[440px]" style={{ background: 'linear-gradient(180deg, rgba(255, 242, 234, 0) 0%, #FFF2EA 56.3%)' }}></div>
      <div className="absolute left-[1078px] top-[220px] w-[226px] h-[110px]"></div>
      <div className="absolute left-[1230px] top-[287px] w-[70px] h-[40px] bg-[#a1603b] z-10"></div>
      <p className="absolute left-[1250px] top-[300px] w-[33px] h-[14px] font-productsans text-[14px] leading-[14px] font-[400] text-[#ffffff] z-10 uppercase">
        Join
      </p>
      <div className="absolute left-[1078px] top-[284px] w-[227px] h-[46px] border border-gray-300 rounded px-4"></div>
      <p className="absolute left-[1093px] top-[300px] w-[77px] h-[14px] font-productsans text-[14px] leading-[14px] font-[400] text-[#827c7c]">
        Enter e-mail
      </p>
      <p className="absolute left-[1077px] top-[220px] w-[226px] h-[36px] font-productsans text-[14px] leading-[17px] font-[400] text-[#4c4c4c]">
        Receive special offers and  get our latest updates.
      </p>
      <div className="absolute left-[730px] top-[302px] w-[226px] h-[24px]"></div>
      <p className="absolute left-[767px] top-[302px] w-[87px] h-[18px] font-productsans text-[14px] leading-[17px] font-[400] text-[#4c4c4c]">
        +1 789 123456
      </p>
      <Image
        src="/landingpage/images/base_icon_tel.png"
        alt="Phone"
        width={24}
        height={24}
        className="absolute left-[730px] top-[302px] w-[24px] h-[24px]"
        unoptimized
      />
      <Image
        src="/landingpage/images/base_icon_pin.png"
        alt="Location"
        width={24}
        height={24}
        className="absolute left-[730px] top-[221px] w-[24px] h-[24px]"
        unoptimized
      />
      <div className="absolute left-[730px] top-[221px] w-[226px] h-[66px]"></div>
      <p className="absolute left-[767px] top-[221px] w-[190px] h-[36px] font-productsans text-[14px] leading-[17px] font-[400] text-[#4c4c4c]">
        11772 Tabrzi Street NW, Suite 21389, Atlanta, GA 902344
      </p>
      <div className="absolute left-[730px] top-[341px] w-[226px] h-[24px]"></div>
      <p className="absolute left-[766px] top-[341px] w-[92px] h-[22px] font-productsans text-[12px] leading-[22px] font-[400] text-[#a1603b]">
        hello@dangila.co
      </p>
      <Image
        src="/landingpage/images/base_icon_email.png"
        alt="Email"
        width={24}
        height={24}
        className="absolute left-[730px] top-[341px] w-[24px] h-[24px]"
        unoptimized
      />
      <div className="absolute left-[483px] top-[220px] w-[144px] h-[150px]"></div>
      <p className="absolute left-[483px] top-[348px] w-[144px] h-[18px] font-productsans text-[14px] leading-[17px] font-[400] text-[#4c4c4c]">
        About Us
      </p>
      <p className="absolute left-[483px] top-[316px] w-[144px] h-[18px] font-productsans text-[14px] leading-[17px] font-[400] text-[#4c4c4c]">
        Track your order
      </p>
      <p className="absolute left-[483px] top-[284px] w-[144px] h-[18px] font-productsans text-[14px] leading-[17px] font-[400] text-[#4c4c4c]">
        beauty products
      </p>
      <p className="absolute left-[483px] top-[252px] w-[144px] h-[18px] font-productsans text-[14px] leading-[17px] font-[400] text-[#4c4c4c]">
        Skin Products
      </p>
      <p className="absolute left-[483px] top-[220px] w-[66px] h-[18px] font-productsans text-[14px] leading-[17px] font-[400] text-[#4c4c4c]">
        Best Seller
      </p>
      <Image
        src="/landingpage/images/base_socialicons.png"
        alt="Social Media Icons"
        width={100}
        height={20}
        className="absolute left-[135px] top-[306px]"
        unoptimized
      />
      <p className="absolute left-[135px] top-[220px] w-[228px] h-[36px] font-productsans text-[14px] leading-[17px] font-[400] text-[#4c4c4c]">
        Learn To Love Growth And Change And You Will Be A Success. 
      </p>
    </div>
  );
}