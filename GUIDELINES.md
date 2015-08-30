NOTE: This project is under development and these guidelines might change in the future.

Aim:
- To provide styles for most commonly used web components

Styles:
- DON'T use properties/styles like `transition`, `animation`, `box-shadow`, `text-shadow`, `border-radius`, `outline`, gradients
  - `.input`'s `border-radius` is set to 0 to remove default `border-radius` on `select`
  - `.input`'s `outline` is set to 0 as `:focus` styles are provided
- Minimize use of properties like `background-color`, `color`, `border-color`
- Minimize number of colors. Colors used should be in grayscale or primary color (`colors.primary`)
- Minimize number of styles on an element
- Avoid using tag selectors
  - `.nav` works with `ul` only so using `li` and `a` tags is fine to minimize markup
- DON'T directly style common classes like `.active`, `.disabled`, `.primary`, `.success`, `.error`, `.heading`, `.divider` etc. Always use them together with their target elements like `.primary.button`. If styles are common for two different elements like `.small.button` and `.small.input` then change the class name to specify its usage and apply the common styles to it. For example change the name of `.small` to `.size-small` and apply styles on it directly.
- Reduce specificity

Code:
- Minimize number of variables and try to use ones already present (might change in the future to provide more customization options)
- camelCase variable names (might switch to SCSS like variable naming convention in future)

Classes:
- Minimize number of classes and keep class names short and descriptive
- Try to divide classes into multiple resuable classes
- Class names should have a minimum length of 3 characters
- Minimize hyphens but don't avoid when needed
- Multiple words must be separated by hyphens (try to use alternative one word synonyms to avoid hyphens)
- Use Bootstrap like naming convention for classes having multiple words or hyphens
- Avoid single letter words like `.s-r`
  - Classes like `.scroll-x`, `.scroll-y` are fine
- Avoid alias classes
  - `.column`, `.columns` are provided for syntactic sugar
