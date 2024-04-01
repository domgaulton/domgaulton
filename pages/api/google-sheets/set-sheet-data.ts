import { NextApiRequest } from 'next';

const { google } = require('googleapis');

const {
  GOOGLE_IAM_CLIENT_EMAIL,
  GOOGLE_IAM_CLIENT_ID,
  GOOGLE_IAM_PROJECT_ID,
  GOOGLE_IAM_PRIVATE_KEY,
} = process.env;

const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  credentials: {
    client_email: GOOGLE_IAM_CLIENT_EMAIL,
    client_id: GOOGLE_IAM_CLIENT_ID,
    project_id: GOOGLE_IAM_PROJECT_ID,
    private_key: GOOGLE_IAM_PRIVATE_KEY,
  },
});

const sheets = google.sheets({ version: 'v4', auth });

export async function setSheetData(req: NextApiRequest, res: NextApiRequest) {
  const body = req.body;
  const jsonBody = JSON.parse(body);
  const { rowIndex } = jsonBody;

  console.log({ jsonBody });
  try {
    console.log(`Sheet1!C${rowIndex}`);
    console.log('before');
    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: '1th2d97DCww5222zLafPM84-H3WCx3jh5_E8EdC_qSX8',
      range: `Sheet1!C${rowIndex}`,
      valueInputOption: 'RAW',
      resource: [['TRUE']],
    });

    console.log('inside', response.data.error);

    // return res?.data?.values;
    // return Response.json({ response }, { status: 200 });
    // return response;
    console.log('Cell updated successfully:', response.data);
  } catch (error) {
    console.error('Error retrieving data:', error);
    // console.error('Error updating cell:', error?.message);
    // console.error('Error details:', error?.errors);
    return null;
  }
}

export default setSheetData;
