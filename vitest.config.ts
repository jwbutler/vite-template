import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Set these as high as you can
    coverage: {
      all: true,
      thresholds: {
        branches: 0.0,
        functions: 0.0,
        lines: 0.0,
        statements: 0.0
      }
    }
  }
});
