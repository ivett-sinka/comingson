import FigmaClient from './figma-client.js';
import fs from 'fs';

const FILE_KEY = '1PQxriE3LMiq0XCvOVG2XP';
const NODE_ID = '1-2';

async function fetchDesign() {
  try {
    console.log('Initializing Figma client...');
    const figma = new FigmaClient();

    console.log(`Fetching file: ${FILE_KEY}`);
    const fileData = await figma.getFile(FILE_KEY);

    // Save the full response
    fs.writeFileSync('figma-design-full.json', JSON.stringify(fileData, null, 2));
    console.log('Full design data saved to figma-design-full.json');

    // Extract useful information
    const document = fileData.document;
    console.log('\n=== Design Information ===');
    console.log('Name:', fileData.name);
    console.log('Last Modified:', fileData.lastModified);
    console.log('Version:', fileData.version);

    // Recursively find all nodes
    function findAllNodes(node, depth = 0) {
      const indent = '  '.repeat(depth);
      console.log(`${indent}${node.type}: ${node.name}`);

      if (node.children) {
        node.children.forEach(child => findAllNodes(child, depth + 1));
      }
    }

    console.log('\n=== Document Structure ===');
    findAllNodes(document);

    return fileData;
  } catch (error) {
    console.error('Error fetching Figma design:', error.message);
    process.exit(1);
  }
}

fetchDesign();
