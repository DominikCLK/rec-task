import { defineConfig, devices } from "@playwright/test";
import { BASE_URL } from "./config/env.config";
import * as path from "path";

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export const STORAGE_STATE = path.join(__dirname, "tmp/session.json");
export const RESPONSE_TIMEOUT = 10_000;

export default defineConfig({
  testDir: "./tests",
  globalSetup: "config/global.setup.ts",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  retries: 1,
  workers: process.env.CI ? 6 : undefined,

  //Reporters
  reporter: [
    ["html"],
    ["github"],
    ["json", { outputFile: "./playwright-report/results.json" }],
    ["junit", { outputFile: "./playwright-report/results.xml" }],
  ],

  use: {
    baseURL: BASE_URL,
    actionTimeout: 0,
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium-logged",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "setup",
      testMatch: "*.setup.ts",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
