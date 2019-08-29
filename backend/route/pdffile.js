var express = require('express');
var router = express.Router();
var pdfMake = require('pdfmake/build/pdfmake.js');
var vfsFonts = require('pdfmake/build/vfs_fonts.js');
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.vfs = vfsFonts.pdfMake.vfs;

router.post('/pdf',(req,res,next)=>{
  // res.send('pdf');
  const fname = req.body.fname;
  const lname = req.body.lname;
  var documentdef={
    content:[
      // `Hello ${fname} ${lname}`,
      'ahsdhasgbhdbasjbhdjhsabdjhas',
      'nice to meet you'
    ]
  };
  // pdfMake.createPdf(docDefinition).download();
  const pdfDoc = pdfMake.createPdf(documentdef);
  pdfDoc.getBase64((data)=>{
    console.log(data.toString('utf-8'));
    res.writeHead(200,
      {
      'content-Type':'application/pdf',
      'content-Disposition':'attachment;filename="filename.pdf"'
    });
    const download = Buffer.from(data.toString('utf-8'),'base64');
    res.end(download);
  });
});
// const pdfDocGenerator = pdfMake.createPdf(documentdef);
// pdfDocGenerator.getBase64((data) => {
//     alert(data);
// });
//  });
module.exports = router;
