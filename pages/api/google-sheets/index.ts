const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
  keyFile: 'dg-projects-27574-7c4ce4ae7f30.json', // Path to your credentials JSON file
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function getSheetData() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1th2d97DCww5222zLafPM84-H3WCx3jh5_E8EdC_qSX8',
      range: 'Sheet1', // Replace with your sheet name or range
    });

    console.log({ response });

    return response?.data?.values;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
}
