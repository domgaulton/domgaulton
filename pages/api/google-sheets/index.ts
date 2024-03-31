const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  credentials: {
    client_email: process.env.GOOGLE_IAM_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_IAM_CLIENT_ID,
    project_id: process.env.GOOGLE_IAM_PROJECT_ID,
    private_key: process.env.GOOGLE_IAM_PRIVATE_KEY,
  },
});

const sheets = google.sheets({ version: 'v4', auth });

export async function getSheetData() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1th2d97DCww5222zLafPM84-H3WCx3jh5_E8EdC_qSX8',
      range: 'Sheet1', // Replace with your sheet name or range
    });

    return response?.data?.values;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
}
