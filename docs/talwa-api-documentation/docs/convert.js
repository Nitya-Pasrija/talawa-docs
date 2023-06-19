const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

const htmlFolderPath = './docs'; // Replace with your HTML folder path

// Create a Turndown service instance
const turndownService = new TurndownService();

// Convert HTML to Markdown
function convertToMarkdown(htmlFile) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  const markdown = turndownService.turndown(html);
  return markdown;
}

// Recursively convert HTML files to Markdown and remove the original HTML files
function convertFolderToMarkdown(folderPath) {
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      convertFolderToMarkdown(filePath); // Recursively convert subfolders
    } else if (path.extname(filePath) === '.html') {
      const markdown = convertToMarkdown(filePath);

      // Write the Markdown content to a new file
      const markdownFilePath = filePath.replace('.html', '.md');
      fs.writeFileSync(markdownFilePath, markdown, 'utf8');

      // Remove the original HTML file
      fs.unlinkSync(filePath);
    }
  });
}

// Call the function to convert the HTML folder to Markdown
convertFolderToMarkdown(htmlFolderPath);
