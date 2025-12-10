#!/usr/bin/env node

import { spawn } from 'child_process';
import detect from 'detect-port';

const DEFAULT_PORT = 3000;
const MAX_PORT = 3010;

async function findAvailablePort(startPort) {
  let port = startPort;
  
  while (port <= MAX_PORT) {
    const availablePort = await detect(port);
    
    if (availablePort === port) {
      return port;
    }
    
    port++;
  }
  
  throw new Error(`No available ports found between ${startPort} and ${MAX_PORT}`);
}

async function startDev() {
  try {
    const port = await findAvailablePort(DEFAULT_PORT);
    
    if (port !== DEFAULT_PORT) {
      console.log(`Port ${DEFAULT_PORT} is in use, using port ${port} instead`);
    }
    
    const child = spawn('next', ['dev', '-p', port.toString()], {
      stdio: 'inherit',
      shell: true
    });
    
    child.on('exit', (code) => {
      process.exit(code || 0);
    });
    
  } catch (error) {
    console.error('Error starting dev server:', error.message);
    process.exit(1);
  }
}

startDev();
