import FigmaClient from './figma-client.js';

async function fetchDesign() {
  console.log('🎨 Fetching Figma design...\n');

  // A Figma fájl kulcsa az URL-ből:
  // https://www.figma.com/design/uIykP1YH3jxrbYkFY3neod/Coming-Soon-page--Copy-
  const fileKey = 'uIykP1YH3jxrbYkFY3neod';
  const nodeId = '1-2'; // node-id=1-2 az URL-ből

  try {
    const figma = new FigmaClient();

    console.log('📡 Fetching file data...');
    const fileData = await figma.getFile(fileKey);

    console.log('\n✅ File fetched successfully!\n');
    console.log('📄 File name:', fileData.name);
    console.log('📅 Last modified:', fileData.lastModified);
    console.log('🔑 Version:', fileData.version);

    // Mentjük el a teljes file adatot JSON-ba
    const fs = await import('fs');
    fs.writeFileSync('figma-data.json', JSON.stringify(fileData, null, 2));
    console.log('\n💾 Full data saved to figma-data.json');

    // Keressük meg a specifikus node-ot
    if (fileData.document && fileData.document.children) {
      console.log('\n📊 Document structure:');
      console.log('Root children:', fileData.document.children.length);
    }

  } catch (error) {
    console.error('\n❌ Error fetching design:');
    console.error(error.message);

    console.log('\n💡 Troubleshooting steps:');
    console.log('1. Make sure your Figma token is set in .env file');
    console.log('2. Get your token from: https://www.figma.com/developers/api#access-tokens');
    console.log('3. Make sure the token has access to this file');
    console.log('4. Check if the file is public or you have permissions');
  }
}

fetchDesign();
