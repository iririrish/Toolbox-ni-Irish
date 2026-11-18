# Toolbox ni Irish — Online Utility Hub

Image compressor, PDF tools, and more. Everything runs in your browser, so your files are never uploaded anywhere.

## Standing instruction

> create a read me everytime you create new edits to the website

Every time the website is edited, this README is updated with a new entry in the Changelog below.

## How to host on GitHub Pages

1. Create a new repository on GitHub.
2. Upload `index.html` and `README.md` to the root of the repo.
3. Go to **Settings → Pages**.
4. Set the source to **Deploy from a branch**, then choose `main` and `/(root)`.
5. After a minute, the site is live at `https://<username>.github.io/<repo>/`.

## Tools

### Working now

| Category | Tools |
|----------|-------|
| Image | Image Compressor, Image Resizer, Image Converter (PNG/JPG/WEBP), Image Rotator and Flipper, Image to PDF, Background Remover |
| PDF | PDF Merger, PDF Splitter / Page Extractor, PDF Page Rotator, PDF to JPG/PNG, PDF to Text, PDF Scanner |
| Text | Word Counter, Case Converter, OCR (image or scanned PDF to text) |

### Planned (shown as "soon" on the site)

- **Image:** Cropper, Color Picker, Metadata Viewer, Favicon Generator, QR Code from Image, Blur or Pixelate, Add Watermark, Border and Rounded Corners
- **PDF:** Page Numbers, Watermarks, Password Protection, PDF Unlocker, Text to PDF, PDF Compare, PDF Signature, PDF Form Filler, PDF Compressor

## Site features

- Dark / light mode (preference is remembered)
- Favorites (star any tool)
- Global search with `Ctrl + K`
- Recently used tools
- Drag and drop files
- Batch processing for image tools
- Keyboard shortcuts: `Ctrl + K` search, `Ctrl + Enter` run the open tool, `Esc` close

## Tech notes

- Single static file: `index.html` (HTML, CSS, and JavaScript together).
- Libraries loaded from cdnjs: [pdf-lib](https://pdf-lib.js.org/) (merge, split, rotate PDFs) and [jsPDF](https://github.com/parallax/jsPDF) (Image to PDF, PDF Scanner).
- Loaded only when a tool needs them: [pdf.js](https://mozilla.github.io/pdf.js/) (PDF to JPG/PNG, PDF to Text, OCR on PDFs) and [Tesseract.js](https://tesseract.projectnaptha.com/) (OCR).
- Background Remover uses [@imgly/background-removal](https://github.com/imgly/background-removal-js), loaded from jsDelivr. Its AI model (about 40–80 MB) downloads on first use, then the browser caches it. Images are still processed on your device.
- OCR downloads language data on first use. These tools need an internet connection the first time.
- Favorites, recent tools, and theme are saved in the browser's `localStorage`.

## Changelog

### v1.3.1 — Dark mode text fix
- Fixed text boxes showing black text on a dark background in dark mode. This affected Case Converter, Word Counter, and the text preview in PDF to Text and OCR. Text is now light in dark mode and dark in light mode.
- Placeholder text ("Type or paste text…") now uses a softer color that is readable in both modes.
- Dropdown menus and scrollbars now follow the current theme.

### v1.3 — Previews for most tools
- **Text results** (PDF to Text, OCR) now show the extracted text in a box on the page, with a **Copy text** button. Download still works.
- **PDF results** (Merger, Splitter, Page Rotator, Image to PDF, PDF Scanner) now show page thumbnails (first 12 pages, first 6 files). Each result also has an **Open** link to view the full PDF in a new tab.
- **PDF Merger** shows "3 files → 12 pages" and color-codes each thumbnail by the file it came from, so you can see where each file landed.
- Image tools keep their image previews from v1.2.
- PDF previews load pdf.js from cdnjs, so they need internet the first time.

### v1.2 — Previews and Copy button
- Removed the model download hint from the Background Remover.
- Added a **preview** for image results. After you run an image tool, each result shows a thumbnail (with a checkerboard behind it so transparent areas are visible).
- Added a **Copy** button to Background Remover results. It copies the image to your clipboard as a PNG, so you can paste it straight into chats, docs, or design apps. Download still works as before.

### v1.1.1 — Background Remover fix
- Fixed the error "Expected void, received string" in Background Remover. The progress callback was returning a value, which the AI library rejects. It now returns nothing.

### v1.1 — Background Remover, PDF to JPG, PDF to Text, OCR, Scanner
- Added **Background Remover** (AI, transparent or white background).
- Added **PDF to JPG/PNG** (one image per page, choose scale).
- Added **PDF to Text** (extracts text from PDFs that have real text).
- Added **OCR** (reads text from photos and scanned PDFs; English, Tagalog, Spanish, French, German).
- Added **PDF Scanner** (photos of paper to a cleaned-up PDF; color, grayscale, or black and white).
- Tools now show progress on the Run button, and some show a short hint (for example, model download size).
- Added hero chips for Remove background, PDF → JPG, and OCR.
- Removed these tools from the "soon" list. There are now 15 working tools.

### v1.0 — Initial release
- Created the site layout: header, hero with drop card and format chips, search bar, category cards, and tool grid.
- Added 10 working tools (5 image, 3 PDF, 2 text).
- Added dark/light mode, favorites, recently used, `Ctrl + K` search, drag and drop, batch image processing, and keyboard shortcuts.
- Added "soon" placeholders for planned tools.
- Added this README.
