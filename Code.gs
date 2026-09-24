const SHEET_NAME = 'Ratings';

function doGet() {
  return ContentService
    .createTextOutput('R&V rating service is active.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Rating', 'Name', 'Feedback', 'Page']);
  }

  const p = e && e.parameter ? e.parameter : {};

  const rating = Number(p.rating || 0);
  const safeRating = Math.min(5, Math.max(1, rating));

  sheet.appendRow([
    new Date(),
    safeRating,
    p.name || '',
    p.feedback || '',
    p.page || ''
  ]);

  return ContentService
    .createTextOutput('Rating submitted successfully.')
    .setMimeType(ContentService.MimeType.TEXT);
}
