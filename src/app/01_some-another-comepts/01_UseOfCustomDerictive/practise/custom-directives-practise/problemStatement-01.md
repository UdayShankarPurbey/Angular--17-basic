# Custom Tooltip Directive

You are building a web application that displays a list of products. Each product has various details, and you want to provide users with more information about specific terms without cluttering the UI.

## Requirements

### Custom Tooltip Directive
Create a directive that shows a tooltip when users hover over certain keywords in the product description. The tooltip should display additional information relevant to the keyword.

### Dynamic Content
The content of the tooltip should be dynamic and can be passed as an attribute to the directive.

### Styling
The tooltip should be styled to match the application’s design. It should appear above the keyword and fade in and out smoothly.

### Accessibility
Ensure the tooltip is accessible, including keyboard navigation and screen reader support.

## Implementation Steps

### 1. Define the Directive
Create a directive named `tooltip` that accepts an attribute for the tooltip text.

### 2. Hover Functionality
Use mouse events to show and hide the tooltip when the user hovers over the specified keywords.

### 3. Positioning
Use CSS to position the tooltip correctly above the hovered keyword.

### 4. Styling
Add styles for the tooltip, including background color, border, padding, and transitions for the fade-in/out effect.

### 5. Accessibility Features
Ensure that users can navigate to the keywords using the keyboard, and provide ARIA attributes for screen readers.

## Example Usage
```html
<div ng-controller="ProductController">
  <p>
    This product is made from <span tooltip="A material known for its durability and strength.">kevlar</span> and is designed for <span tooltip="High-impact activities requiring protection.">high-impact</span> sports.
  </p>
</div>
```


## Expected Outcome
- When a user hovers over the words "kevlar" or "high-impact," a tooltip should appear displaying the respective explanations without interfering with the rest of the content. The tooltip should disappear when the mouse moves away, and it should be usable with keyboard navigation.