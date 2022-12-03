import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "node",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: {
    ...pathsToModuleNameMapper(
      compilerOptions.paths /*, { prefix: '<rootDir>/' } */
    ),
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    "^.+\\.svg$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  // setupFiles: ["./src/__test__/globalSetting.ts"],
};
