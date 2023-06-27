# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### Screenshots

![375px](src/screenshots/375px.png)
![1440px](src/screenshots/1440px.png)

### Links

- [Live solution](https://klonnister.github.io/FAQ-accordion-card/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

I learned that I can add classes to the img element when using picture:

```html
<picture>
  <source media="(max-width: 1023px)" srcset="src/images/illustration-woman-online-mobile.svg">
  <source media="(min-width: 1023px)" srcset="src/images/illustration-woman-online-desktop.svg">
  <img src="src/images/illustration-woman-online-mobile.svg" alt="" class="woman-img">
</picture>
```

Gotta keep in mind that I should remove the max-width property to images when it's supposed to be bigger than its parent.

```css
img {
  max-width: 100%;
  height: auto;	
}

.img-box {
  max-width: none;
}
```

Added transitions with classes:

```css
.arrow {
  transition: transform 0.25s;
  }

.rotate {
  transform: rotate(180deg);
}
```

I also practiced adding shadows to elements that aren't text:

```css
box-shadow: 0rem 4rem 4.80rem -4.80rem black;
```

## Author

- Frontend Mentor - [Klonnister](https://www.frontendmentor.io/profile/Klonnister)
- Instagram - [dennis_herrera_f](https://www.instagram.com/dennis_herrera_f/)