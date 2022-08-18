
const {GoogleSpreadsheet} = require('google-spreadsheet');
const creds = require('./key.json');

async function getCertDetail(sheetID, docID) {
  sheetData = new GoogleSpreadsheet(sheetID);
  try {
    await sheetData.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });

    await sheetData.loadInfo();
    const certData = await sheetData.sheetsByIndex[0].getRows();
    // convert the data to json
    let certificateDateil;
    certData.forEach((element) => {
      const d = element._rawData;
      console.log(d[7]);
      if (d[7]==docID) {
        certificateDateil=pretifyData(d);
        return;
      }
    });


    return certificateDateil;
  } catch (err) {
    throw err;
  }
}

async function getParticioant(sheetID) {
  sheetData = new GoogleSpreadsheet(sheetID);
  try {
    await sheetData.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });

    await sheetData.loadInfo();
    const certData = await sheetData.sheetsByIndex[0].getRows();
    const sheetData = [];
    // convert the data to json
    certData.forEach((element) => {
      const d = element._rawData;
      pretifyData(d);
      sheetData.push(valu);
    });
  } catch (err) {
    console.log(err);
  }
}
function pretifyData(d) {
  const valu = {
    data: {
      'Name': d[5],
      'Event Name': d[1],
      'Conducted By': d[0],
      'Event Type': d[2],
      'Certificate Type': d[8],
      'Start Date': d[3],
      'End Date': d[4],

      // "Email": d[6],
      'Certificate ID': d[7],

      // Verification_URL: d[9],
      // QR_IMG_LINK: d[10],
      // MergedDocID_trert: d[11],
      // Merged_Doc_URL_trert: d[12],
      // Link_to_merged_Doc_trert: d[13],
      // Document_Merge_Status_trert: d[14],
    },
    link: d[12],
  };
  return valu;
}
module.exports = {getCertDetail, getParticioant};
