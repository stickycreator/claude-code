export const BROWSER_TOOLS: readonly unknown[];
export function createClaudeForChromeMcpServer(): any;
export type Logger = {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
};
export type PermissionMode = 'ask' | 'skip_all_permission_checks' | 'follow_a_plan';
export type ClaudeForChromeContext = {
  serverName: string;
  logger: Logger;
  socketPath: string;
  getSocketPaths: () => string[];
  clientTypeId: string;
  onAuthenticationError: () => void;
  onToolCallDisconnected: () => string;
  onExtensionPaired: (deviceId: string, name: string) => void;
};
