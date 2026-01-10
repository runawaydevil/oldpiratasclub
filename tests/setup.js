// Jest setup file
global.console = {
  ...console,
  // Suppress console.warn for tests
  warn: jest.fn(),
}