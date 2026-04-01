import { existsSync, mkdirSync, symlinkSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();
const sourceDir = join(projectRoot, 'src');
const nodeModulesDir = join(projectRoot, 'node_modules');
const aliasDir = join(nodeModulesDir, 'src');

if (!existsSync(sourceDir)) {
  console.error('Cannot create src alias: source directory not found.');
  process.exit(1);
}

mkdirSync(nodeModulesDir, { recursive: true });

if (existsSync(aliasDir)) {
  console.log('src alias already exists in node_modules.');
  process.exit(0);
}

try {
  symlinkSync(sourceDir, aliasDir, 'dir');
  console.log('Created node_modules/src symlink to ./src.');
} catch (error) {
  console.error('Failed to create src alias:', error);
  process.exit(1);
}
