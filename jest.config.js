const tsconfig = require('./tsconfig.json')
let moduleNameMapper = require('tsconfig-paths-jest')(tsconfig)

module.exports = {
  'roots': [
    '<rootDir>/pages',
    '<rootDir>/components',
    '<rootDir>/server',
    '<rootDir>/test'
  ],
  'testPathIgnorePatterns': [
    '<rootDir>/test/setupEnzyme.ts' // ignore the setupEnzyme file in the test directory
  ],
  'transform': {
    '^.+\\.tsx?$': 'ts-jest'
  },
  'testRegex': '(/test/.*|(\\.|/)(test|spec))\\.tsx?$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper,
  'snapshotSerializers': ['enzyme-to-json/serializer'],
  'setupFilesAfterEnv': ['<rootDir>/test/setupEnzyme.ts']
}
