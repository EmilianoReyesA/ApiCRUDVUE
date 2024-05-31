// Generador de reportes

const PDFDocument = require('pdfkit');
const Item = require('../models/Item');
const OtherModel = require('../models/OtherModel'); // Asegúrate de tener este modelo

const generateReport = async (req, res) => {
  const items = await Item.find();
  const otherData = await OtherModel.find();

  const doc = new PDFDocument();
  let filename = 'report.pdf';
  filename = encodeURIComponent(filename);

  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');

  doc.text('Items Report', { align: 'center' });
  doc.moveDown();

  items.forEach(item => {
    doc.text(`Item: ${item.name}`);
    // Add other fields as needed
  });

  doc.moveDown();
  doc.text('Other Data Report', { align: 'center' });
  doc.moveDown();

  otherData.forEach(data => {
    doc.text(`Data: ${data.field}`);
    // Add other fields as needed
  });

  doc.pipe(res);
  doc.end();
};

module.exports = { generateReport };
