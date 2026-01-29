# Implementation Plan - REBELIVE E-commerce Transformation

Transform the "REBELIVE" landing page into "REBELIVE", a full-service e-commerce platform for premium soft drinks.

## User Requirements
- Variety of products section.
- Add to Cart functionality.
- Home page and product listing ("Items").
- Full E-commerce experience.

## Proposed Changes

### 1. Brand Identity & Design System
- **Brand name**: REBELIVE.
- **Color Palette**: Shift from REBELIVE's primary blue/yellow to a more energetic palette (e.g., Deep Purple, Neon Green, or Vibrant Orange).
- **Typography**: Maintain the premium Alpino font but update the usage.

### 2. State Management (Cart)
- Use `zustand` to create a `useCart` store.
- Actions: `addItem`, `removeItem`, `updateQuantity`, `clearCart`, `toggleCartDrawer`.

### 3. New Components
- `Header`: Updated with "Shop" link and an animated `CartIcon` (with item count).
- `CartDrawer`: A sliding right-side drawer showing cart contents and a "Checkout" button.
- `ProductCard`: A premium card for the product grid, showing the flavor, price, and a quick "Add to Cart" button.
- `ShopSection`: A new section/page to showcase the variety of products.

### 4. Application Structure
- **Global Layout**: Ensure the `CartDrawer` is accessible globally.
- **Home Page**: Enhance the Hero and Carousel slices to be more product-focused.
- **Shop Page**: Create `/shop` page for filtering and viewing all products.

### 5. Integration with 3D Assets
- Maintain the Three.js `SodaCan` component.
- Ensure the "Add to Cart" action can trigger a small animation on the 3D can.

## Detailed Task List

- [ ] Create `useCart` store (`src/hooks/useCart.ts`).
- [ ] Implement `CartDrawer` component.
- [ ] Update `Header.tsx` with navigation and cart shortcut.
- [ ] Create `ProductCard` component.
- [ ] Develop `FeaturedProducts` section for the homepage.
- [ ] Create a dedicated `/shop` page using the `ProductCard` grid.
- [ ] Update brand text and styling across all existing Slices.
- [ ] Add "Add to Cart" buttons to the `Carousel` and `Hero` sections.
