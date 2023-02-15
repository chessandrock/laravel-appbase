<?php

namespace Deployer;

require 'recipe/laravel.php';

// Setup: Windows
set('ssh_multiplexing', false);
set('git_tty', false);

// Setup: Git
set('repository', 'git@github-chessandrock:chessandrock/laravel-appbase.git');
set('branch', 'main');

// Setup: Required directories
add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Tasks: vite build
task('vite-build', function () {
    cd('{{release_path}}');
    run('npm install');
    run('npm run build');
});

// Hosts
host('seadragon')
    ->set('hostname', 'seadragon')
    ->set('remote_user', 'chessandrock')
    ->set('deploy_path', '/var/www/laravel-appbase');

// Hooks
after('deploy:shared', 'vite-build');
after('deploy:failed', 'deploy:unlock');
