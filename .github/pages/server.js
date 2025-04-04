// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/create', (req, res) => {
  const { slug, content } = req.body;
  const safeSlug = slug.replace(/[^a-z0-9\-]/gi, '').toLowerCase();
  const filePath = path.join(__dirname, 'pages', `${safeSlug}.html`);

  const html = `
    <!DOCTYPE html>
    <html>
    <head><title>${safeSlug}</title></head>
    <body>${content}</body>
    </html>
  `;

  fs.writeFileSync(filePath, html);
  res.redirect(`/pages/${safeSlug}.html`);
});

// Serve pages folder
app.use('/pages', express.static(path.join(__dirname, 'pages')));

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
