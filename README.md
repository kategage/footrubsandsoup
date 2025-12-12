# Foot Rubs and Soup 🦶🍜

A simple, delightful website dedicated to life's greatest comforts: warm soup and soothing foot rubs.

Live at: **[footrubsandsoup.com](https://footrubsandsoup.com)**

## What is this?

This is a split-screen interactive website where clicking either side takes you to a random resource:

- **Soup side** → Random soup recipe from a curated list
- **Foot Rubs side** → Random foot massage tutorial, spa finder, or relaxation resource

It's a fun, affectionate way to share comfort and care.

## How it works

The site uses plain HTML, CSS, and JavaScript—no frameworks, no build tools, just simple static files served via GitHub Pages.

When you click a button, the JavaScript randomly selects a URL from an array and redirects you there.

## Repository Structure

```
/
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # All JavaScript (link arrays + random selection)
├── images/
│   ├── soup.png        # Soup background image
│   ├── footrub.PNG     # Foot rub background image
│   └── preview.png     # Social media preview image (1200×630px recommended)
├── favicon.png         # Site favicon
├── favicon.ico         # Optional .ico version
├── CNAME               # Custom domain config for GitHub Pages
└── README.md           # This file
```

## How to Update

### Change the recipe or resource links

Edit `script.js`:

- **Soup recipes**: Update the `soupRecipes` array
- **Foot rub resources**: Update the `footRubResources` array

Example:

```js
const soupRecipes = [
  'https://example.com/soup-recipe-1',
  'https://example.com/soup-recipe-2',
  // Add or remove URLs here
];
```

### Change the background images

1. Add new images to the `images/` folder
2. Update `style.css`:
   - `.soup-side { background-image: url('your-image.jpg'); }`
   - `.footrub-side { background-image: url('images/your-image.png'); }`

### Update the social preview image

Replace `images/preview.png` with a new image (recommended size: 1200×630px). This image appears when you share the site on social media.

### Change the site description

Edit the `<meta>` tags in `index.html` (lines with `og:description` and `twitter:description`).

## Hosting

This site is hosted on **GitHub Pages** from the `main` branch root directory.

To deploy changes:

1. Commit your changes to the `main` branch
2. Push to GitHub
3. GitHub Pages will automatically rebuild and deploy

The custom domain `footrubsandsoup.com` is configured via the `CNAME` file and DNS settings.

## Files You Need to Add

The following files are referenced but need to be created:

- **`favicon.png`** – A simple foot emoji icon (32×32 or 64×64px)
- **`favicon.ico`** – Optional .ico version for older browsers
- **`images/preview.png`** – Social media preview image (1200×630px recommended)

You can create these using:
- Favicon generators like [favicon.io](https://favicon.io/)
- Image editors or online tools
- Emoji-to-image converters for the foot emoji (🦶)

## Tech Stack

- Plain HTML5
- Plain CSS3
- Plain JavaScript (ES6)
- GitHub Pages for hosting

No frameworks, no dependencies, no build process. Just simple, maintainable code.

---

Made with ❤️ for cozy comfort
