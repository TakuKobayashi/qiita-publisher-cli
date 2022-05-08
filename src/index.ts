import { program } from 'commander';
import { download } from './commands/download';
import { CommandOptions } from './interfaces/command-options';

/**
 * Set global CLI configurations
 */
program.storeOptionsAsProperties(false);

/**
 * Displays clasp version
 */
program.version(process.env.npm_package_version, '-v, --version', 'output the current version');

program.option('-t --token [accessToken]', 'Set qiita accessToken');

const options = program.opts<CommandOptions>();

program
  .command('download')
  .description('download published articles from Qiita, and construct project to publish')
  .action(async (source, destination): Promise<void> => {
    await download(options);
  });

program
  .command('init')
  .description('download published articles from Qiita, and construct project to publish')
  .action((source, destination) => {
    console.log('hoge');
    console.log(source);
    console.log(destination);
    console.log(options);
  });

program
  .command('login')
  .description('download published articles from Qiita, and construct project to publish')
  .action(async (source, destination): Promise<void> => {
    await download(destination);
  });

program
  .command('build')
  .description('download published articles from Qiita, and construct project to publish')
  .action(async (source, destination): Promise<void> => {
    await download(destination);
  });

program
  .command('publish')
  .description('download published articles from Qiita, and construct project to publish')
  .action(async (source, destination): Promise<void> => {
    await download(destination);
  });
program.parse(process.argv);
