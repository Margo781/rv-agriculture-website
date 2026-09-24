# R&V Agriculture V4

Upload these files to the root of the GitHub repository:

- index.html
- robots.txt
- sitemap.xml

## Google Sheets ratings

The `index.html` is already connected to the Apps Script Web App URL supplied for this project.

The Apps Script code is included in `Code.gs` for reference/back-up.

If you need to recreate the Apps Script deployment:

1. Open the Google Sheet that should receive ratings.
2. Extensions -> Apps Script.
3. Paste `Code.gs`.
4. Deploy -> New deployment.
5. Type: Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Deploy and use the resulting `/exec` URL in `index.html`.

The website sends rating, optional name, optional feedback, and page URL to the Apps Script endpoint.
