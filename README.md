# Dog Catalog Accessibility Exercise

![Lighthouse Accessibility Score](https://img.shields.io/badge/Accessibility-100%25-brightgreen)

## Project Overview

This project is a front-end-only React application where you can manage a catalog of dogs. The application includes the following pages:

1. **Catalog Page**: Displays cards with dogs. Each card contains the dog’s name and picture.
2. **Manage Page**: Allows you to add new dogs to the catalog.
3. **About Page**: Contains useful links for this exercise.

## Live Demo

You can access the live version of the app using the link below:

- **Netlify Deployment**: [Dog Catalog on Netlify](https://frontend-accessibility.netlify.app/)

## Development Environment
This application was developed and tested on a MacBook. It was also tested using both the **Lighthouse Chrome extension** and **Axe DevTools** to ensure it complies with **WCAG 2.2 accessibility standards.**

If you encounter any platform-specific issues, please consider checking compatibility on your system. Feel free to open an issue in the repository for further assistance.

## Instructions for Building and Running the Application`

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the application**:

   ```bash
   npm start
   ```

3. The app should now be running on [http://localhost:3000](http://localhost:3000).

## Accessibility Guidelines

The primary goal of this exercise is to ensure that the application complies with **WCAG 2.2** standards. Each page has been reviewed for **accessibility issues**, and the following improvements have been implemented:

- **Semantic HTML**: Used appropriate elements (like ```<article>```, ```<button>```, and ```<ul>```) to enhance the meaning and structure of the content.

- **Color Contrast**: Adjusted colors to meet minimum contrast ratios.
- **Alternative Text**: Added meaningful alt attributes to images for better screen reader support.
- **Forms**: Labeled all form elements appropriately.
- **Navigation**: Improved navigation with keyboard accessibility and consistent focus indicators.
- **Font Size and Responsive Design**: Ensured fonts are resizable and mobile-friendly.

For more details on the WCAG guidelines, refer to the following links:

- **Links**: [WCAG 2.2 Links Guideline](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=246%2C104%2C111#link-purpose-in-context)
- **Lists**: [WCAG 2.2 Lists Guideline](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=246#consistent-navigation)
- **Headings**: [WCAG 2.2 Headings Guideline](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=246#headings-and-labels)
- **ARIA**: [WCAG 2.2 ARIA Guideline](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=246#aria)
- **Alternative Text**: [WCAG 2.2 Alternative Text Guideline](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=246#non-text-content)
- **Colors**: [WCAG 2.2 Color Contrast Guideline](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=246#contrast-minimum)
- **Forms**: [WCAG 2.2 Forms Guideline](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=246#labels-or-instructions)
- **Navigation**: [WCAG 2.2 Navigation Guideline](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=246#consistent-navigation)
- **Font Size**: [WCAG 2.2 Font Sizing Guideline](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=246#resize-text)
