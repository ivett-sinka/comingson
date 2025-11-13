import FigmaClient from './figma-client.js';

async function main() {
  console.log('🎨 Figma Integration Starting...\n');

  try {
    // Initialize Figma client
    const figma = new FigmaClient();

    // Get user info
    const user = await figma.getMe();
    console.log(`👋 Hello, ${user.handle || user.email}!`);
    console.log('✅ Figma API is ready to use.\n');

    // Example: Uncomment and add your Figma file key to test
    // const fileKey = 'YOUR_FILE_KEY_HERE';
    // const fileData = await figma.getFile(fileKey);
    // console.log('File name:', fileData.name);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
