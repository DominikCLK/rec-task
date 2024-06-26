import * as dotenv from "dotenv";

dotenv.config({ override: true });

function requireEnvVariable(envVariable: string): string {
  const envVariableValue = process.env[envVariable];
  if (envVariableValue === undefined) {
    throw new Error(`Environment variable ${envVariable} is not set.`);
  }

  return envVariableValue;
}

export const BASE_URL = requireEnvVariable("BASE_URL");
export const DEFAULT_USER_EMAIL = requireEnvVariable("DEFAULT_USER_EMAIL");
export const DEFAULT_USER_PASSWORD = requireEnvVariable(
  "DEFAULT_USER_PASSWORD"
);
export const API_URL = requireEnvVariable("API_URL");
