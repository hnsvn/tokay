#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

function shellQuote(arg) {
  if (/^[A-Za-z0-9_\-./:=@]+$/.test(arg)) return arg;
  return `'${String(arg).replace(/'/g, `'\\''`)}'`;
}

const argv = process.argv.slice(2);
const pipeline = ['huyd.invoke', ...argv.map(shellQuote)].join(' ');

const res = spawnSync('tokay', [pipeline], {
  stdio: 'inherit',
  env: process.env,
});

process.exit(res.status ?? 1);
