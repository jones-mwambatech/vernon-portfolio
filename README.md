# VERNON — Software Engineer Portfolio

A responsive four-page portfolio built with HTML5, CSS3, Bootstrap 5, vanilla JavaScript and Font Awesome.

## Run it
Open `index.html` in a browser, or use VS Code Live Server.

## Important customizations
1. Open `js/main.js` and WhatsApp is configured as `2609759983355` (Zambia international format, digits only).
2. Replace sample project titles, descriptions and images in `projects.html` and `index.html`.
3. Replace the portrait placeholder in `about.html`.
4. Replace `#` social profile links and `hello@Vernonmusit@gmail.com` with real contact details.
5. Update the sample skills in the orbit in `about.html` to match the technologies Vernon actually uses.

The contact form opens WhatsApp with the visitor's details and message pre-filled. The visitor must press Send in WhatsApp. No backend is required.

Images and fonts are loaded from Unsplash and Google Fonts/CDNs, so an internet connection is needed for those assets.

## Theme switch
A moon/sun button in the navbar switches between dark and light themes. The preference is saved in the browser and shared across all four pages.

## Rotating technology orbit
The technology badges now travel around the center on two rotating tracks. Hovering over the orbit pauses the rings and badges.

## Resume and certificates
The About page has a credentials area with view and download links. Add the real PDF files in `assets/`:
- `resume.pdf`
- `certificate-1.pdf`

The project intentionally does not fabricate personal documents. You can add more certificate cards by duplicating the certificate card markup in `about.html` and changing the PDF filename.

## Project links and details
Each project card includes a live-site link and a details dialog. Replace the sample `https://example.com/...` URLs in `projects.html` with the real deployed project URLs. Update each details dialog with accurate project objectives, features and technologies before publishing.
