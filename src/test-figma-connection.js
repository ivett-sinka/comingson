import FigmaClient from './figma-client.js';

async function testConnection() {
  console.log('🔌 Testing Figma API connection...\n');

  try {
    const figma = new FigmaClient();

    console.log('📡 Fetching user information...');
    const userInfo = await figma.getMe();

    console.log('\n✅ Connection successful!\n');
    console.log('👤 User Information:');
    console.log('   Name:', userInfo.handle || 'N/A');
    console.log('   Email:', userInfo.email || 'N/A');
    console.log('   ID:', userInfo.id || 'N/A');

    if (userInfo.img_url) {
      console.log('   Avatar:', userInfo.img_url);
    }

    console.log('\n📊 API Status: Connected and authenticated ✓');

    return true;
  } catch (error) {
    console.error('\n❌ Connection failed!');
    console.error('Error:', error.message);
    console.error('\nPlease check:');
    console.error('  1. Your Figma token is valid');
    console.error('  2. The token is correctly set in .env file');
    console.error('  3. You have internet connection');
    return false;
  }
}

testConnection();
