import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

// Circular Std Family
export const circularStd = localFont({
  src: [
    { path: '../../fonts/CircularStd-Book.ttf', weight: '400', style: 'normal' },
    { path: '../../fonts/CircularStd-BookItalic.ttf', weight: '400', style: 'italic' },
    { path: '../../fonts/CircularStd-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../fonts/CircularStd-MediumItalic.ttf', weight: '500', style: 'italic' },
    { path: '../../fonts/CircularStd-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../../fonts/CircularStd-BoldItalic.ttf', weight: '700', style: 'italic' },
    { path: '../../fonts/CircularStd-Black.ttf', weight: '900', style: 'normal' },
    { path: '../../fonts/CircularStd-BlackItalic.ttf', weight: '900', style: 'italic' }
  ],
  variable: '--font-circular'
});

// Product Sans (Google Sans)
export const productSans = localFont({
  src: [
    { path: '../../fonts/ProductSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../fonts/ProductSans-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../../fonts/ProductSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../fonts/ProductSans-MediumItalic.ttf', weight: '500', style: 'italic' },
    { path: '../../fonts/ProductSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../../fonts/ProductSans-BoldItalic.ttf', weight: '700', style: 'italic' },
    { path: '../../fonts/ProductSans-Black.ttf', weight: '900', style: 'normal' },
    { path: '../../fonts/ProductSans-BlackItalic.ttf', weight: '900', style: 'italic' }
  ],
  variable: '--font-productsans'
});

// Sharp Sans No1 Family
export const sharpSans = localFont({
  src: [
    { path: '../../fonts/Sharp Sans Thin.otf', weight: '100', style: 'normal' },
    { path: '../../fonts/Sharp Sans Thin Italic.otf', weight: '100', style: 'italic' },
    { path: '../../fonts/Sharp Sans Light.otf', weight: '300', style: 'normal' },
    { path: '../../fonts/Sharp Sans Light Italic.otf', weight: '300', style: 'italic' },
    { path: '../../fonts/Sharp Sans.otf', weight: '400', style: 'normal' },
    { path: '../../fonts/Sharp Sans Italic.otf', weight: '400', style: 'italic' },
    { path: '../../fonts/Sharp Sans Medium.otf', weight: '500', style: 'normal' },
    { path: '../../fonts/Sharp Sans Medium.otf', weight: '760', style: 'normal' }, // Custom weight for design
    { path: '../../fonts/Sharp Sans Medium Italic.otf', weight: '500', style: 'italic' },
    { path: '../../fonts/Sharp Sans Semibold.otf', weight: '600', style: 'normal' },
    { path: '../../fonts/Sharp Sans Semibold Italic.otf', weight: '600', style: 'italic' },
    { path: '../../fonts/SharpSansBold.otf', weight: '700', style: 'normal' },
    { path: '../../fonts/Sharp Sans Bold Italic.otf', weight: '700', style: 'italic' },
    { path: '../../fonts/Sharp Sans Extrabold.otf', weight: '800', style: 'normal' },
    { path: '../../fonts/Sharp Sans ExtraBold Italic.otf', weight: '800', style: 'italic' }
  ],
  variable: '--font-sharpsans'
});

// Montserrat Family (from Google Fonts)
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat'
});
