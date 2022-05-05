import { program } from 'commander';
import { sync as readPkgUpSync } from 'read-pkg-up';
import { download } from './commands/download';

const manifest = readPkgUpSync({ cwd: require.resolve('.') });

/**
 * Set global CLI configurations
 */
program.storeOptionsAsProperties(false);

/**
 * Displays clasp version
 */
program.version(manifest ? manifest.packageJson.version : 'unknown', '-v, --version', 'output the current version');

program
  .command('download')
  .description('download published articles from Qiita, and construct project to publish')
  .action(
    async (source, destination): Promise<void> => {
      await download(destination);
    },
  );
program.parse(process.argv);
