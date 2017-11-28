const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'my-app', shell: true };
require('child_process').spawn('npm', args, opts);
