import rimraf from 'rimraf';
import path from 'path';

const testDir = path.join(__dirname, 'test-directory');

rimraf.sync(testDir); // Test if rimraf.sync works
console.log('Directory removed if it exists');
