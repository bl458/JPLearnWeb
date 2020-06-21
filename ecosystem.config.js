module.exports = {
  apps : [{
    name: 'client',
    cwd: './src',
    script: 'npm',
    args: 'start',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  },{
    name: 'server',
    cwd: './src',
    script: 'PORT=8080 node',
    args: 'server.js',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
