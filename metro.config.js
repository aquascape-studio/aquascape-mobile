// Metro config for the Expo app inside a pnpm workspace.
//
// `watchFolders` + `nodeModulesPaths` teach Metro to resolve the workspace
// packages (`@aquascape/ui`, `@aquascape/data`) out of the repo-root
// `node_modules` store instead of failing because they aren't hoisted into
// apps/mobile/node_modules.
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
