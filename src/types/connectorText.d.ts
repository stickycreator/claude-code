export type ConnectorTextBlock = {
  type: 'connectorText';
  [key: string]: unknown;
};

export type ConnectorTextDelta = unknown;

export function isConnectorTextBlock(block: unknown): block is ConnectorTextBlock;
