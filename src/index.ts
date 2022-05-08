import { program } from 'commander';
import { download } from './commands/download';

/**
 * Set global CLI configurations
 */
program.storeOptionsAsProperties(false);

/**
 * Displays clasp version
 */
program.version(process.env.npm_package_version, '-v, --version', 'output the current version');

program
  .command('download')
  .description('download published articles from Qiita, and construct project to publish')
  .action(async (source, destination): Promise<void> => {
    await download(destination);
  });

program
  .command('init')
  .description('download published articles from Qiita, and construct project to publish')
  .action((source, destination) => {
    console.log("hoge");
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
