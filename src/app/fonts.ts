import localFont from 'next/font/local';

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
