# Custom Star Rating Directive

You are developing a review section for a product on your e-commerce site. Users should be able to rate products using a star rating system, where they can click on stars to select their rating.

## Requirements

### Custom Star Rating Directive
Create a directive named `starRating` that allows users to select a rating from 1 to 5 stars.

### Two-way Data Binding
The directive should use two-way data binding to reflect the selected rating in the parent controller.

### Dynamic Display
The stars should change color when hovered over or selected, providing visual feedback to the user.

### Accessibility
Ensure the star rating is accessible, including keyboard navigation and screen reader support.

## Implementation Steps

### 1. Define the Directive
Create a directive named `starRating` that can be used as an element or an attribute.

### 2. Star Elements
Use a combination of SVG or Font Awesome icons to create the star shapes. Each star should respond to click and hover events.

### 3. Event Handling
Implement click events to set the rating and hover events to temporarily change the appearance of the stars.

### 4. Styling
Use CSS to style the stars, including hover effects and selected states.

### 5. Accessibility Features
Add ARIA roles and properties to ensure users can navigate and select ratings using the keyboard and that screen readers can announce the ratings properly.

## Example Usage

```html
<div ng-controller="ReviewController">
  <h3>Rate this product:</h3>
  <star-rating ng-model="product.rating"></star-rating>
  <p>Your rating: {{ product.rating }}</p>
</div>
```

## Expected Outcome
- When a user hovers over the stars, they should change color to indicate that they can be selected. Clicking a star should set the rating, and the selected rating should be reflected in the text below. The entire component should be keyboard-navigable and accessible to screen readers.