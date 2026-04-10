export type CommandMeta = {
  description?: string;
  argsSchema?: unknown;
  examples?: Array<{ args: Record<string, unknown>; description?: string }>;
  sideEffects?: string[];
};

export type TokayCommand = {
  name: string;
  help: () => string;
  run: (params: any) => Promise<any>;
  meta?: CommandMeta;
};
