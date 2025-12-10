# Dangila Landing Page

A beautiful, responsive landing page built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd landingpage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
landingpage/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Header.tsx
│       │   ├── Hero.tsx
│       │   ├── Stats.tsx
│       │   ├── Why.tsx
│       │   ├── About.tsx
│       │   ├── Products.tsx
│       │   ├── Testimonials.tsx
│       │   ├── Brands.tsx
│       │   ├── Newsletter.tsx
│       │   └── Footer.tsx
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── public/
│   └── images/          # Place product images here
├── tailwind.config.js
├── postcss.config.mjs
├── tsconfig.json
├── next.config.ts
└── package.json
```

## 🎨 Design System

### Colors
- **Cream Light**: `#F6EDE5` - Main background
- **Beige Hero**: `#E5CCB8` - Hero background
- **Brown Primary**: `#A0673F` - Headings, accents
- **Brown Dark**: `#4A3427` - Body text
- **Brown Button**: `#B87445` - Primary button
- **Brown Button Dark**: `#8C5E32` - Button hover
- **Gray Light**: `#8F8B88` - Paragraphs
- **White**: `#FFFFFF` - Sections, cards

### Typography
- **H1 (Hero)**: Serif (Cormorant Garamond), 80-88px, weight 700
- **H2 (Sections)**: Serif (Cormorant Garamond), 36-40px, weight 600
- **Stat Numbers**: Sans (Inter), 46-48px, weight 700
- **Body Text**: Sans (Inter), 15-16px, weight 400
- **Buttons**: Sans (Inter), 16px, weight 600
- **Product Labels**: Sans (Inter), 14-16px, weight 500

### Spacing
- Hero top padding: `pt-28` (112px)
- Section padding: `py-24` (96px)
- Card padding: `p-8` (32px)

## 📦 Components

### Header
- Logo on the left
- Center navigation menu (Products, Story, Manufacturing, Packaging, Team)
- Right icons (search, account, cart)

### Hero Section
- Two-column layout (40% text, 60% image)
- H1 "dangila" title
- Subheading and description
- Buy Now button with price

### Stats Section
- 4 equal columns with numbers and labels
- Displays: Happy Customers, Followers, Shops, Satisfaction Rate

### Why Dangila Section
- 3 feature icons horizontally
- Natural, No Side Effect, 100% Organic

### About Us Section
- Two-column layout
- Left: Title, paragraphs, buttons
- Right: Product photo with decorative element

### Our Products Section
- 5 round icon buttons
- Cream, Serum, Lotion, Sunscreen, Coconut Oil

### Testimonials Section
- 2 testimonial cards
- Quote, author, and role

### Brand Logos Row
- Centered brand names
- Psychology Today, Wellimmune, Kerry, Albion, Traacs

### Newsletter CTA
- Two-column layout
- Left: Product image
- Right: Email subscription form

### Footer
- Four columns: Motivational text, Links, Address, Newsletter
- Bottom copyright bar

## 🖼️ Adding Images

Place your product images in the `public/images/` directory:

- `hero-product.png` - Hero section product image
- `about-product.png` - About section product image
- `newsletter-product.png` - Newsletter section product image
- `avatar1.jpg` - First testimonial avatar
- `avatar2.jpg` - Second testimonial avatar

Then uncomment the `<Image>` components in the respective component files.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1199px
- **Desktop**: >= 1200px

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Google Fonts** - Cormorant Garamond (serif) & Inter (sans-serif)

## 📝 Notes

- All components use Tailwind utility classes for styling
- Images use Next.js `Image` component for optimization
- Custom colors and fonts are configured in `tailwind.config.js`
- Typography system is defined in `globals.css`
- All spacing follows the design system specifications

## 🔧 Customization

To customize colors, fonts, or spacing:
1. Update `tailwind.config.js` for colors and theme extensions
2. Update `globals.css` for typography system
3. Modify individual components as needed

---

Built with ❤️ using Next.js and Tailwind CSS
