
const {getCertDetail} = require('../../services/sheets/controller');

exports.verifyCerticicate =async (req, res )=>{
  const {sheetID, certificateID} = req.params;
  const data= await getCertDetail(sheetID, certificateID);
  //  if(!data){
  //     return res.status(404).json({msg:"Certificate not found"});
  //  }
  console.log(data.link);
  res.render('main', {users: data.data, link: data.link});
};
exports.showCertificate = async (req, res) => {
  res.render('main', {});
};
