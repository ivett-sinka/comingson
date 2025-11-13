import dotenv from 'dotenv';

dotenv.config();

const token = process.env.FIGMA_ACCESS_TOKEN;

console.log('Token info:');
console.log('- Loaded:', !!token);
console.log('- Length:', token ? token.length : 0);
console.log('- First 10 chars:', token ? token.substring(0, 10) + '...' : 'N/A');
console.log('- Starts with figd_:', token ? token.startsWith('figd_') : false);
