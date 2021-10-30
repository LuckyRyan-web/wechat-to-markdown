// const spawn = require('cross-spawn')
// const inquirer = require('inquirer')
import spawn from 'cross-spawn'
import inquirer from 'inquirer'

inquirer.prompt([
    {
      type: 'list',
      name: 'version',
      message: '选择发布版本',
      choices: [
        'patch',
        'minor',
        'major',
      ],
      default: 'patch'
    }
  ]).then((answers) => {
      spawn.sync('npm', ['version', answers.version], { stdio: 'inherit' })
      spawn.sync('npm', ['publish --access public'], { stdio: 'inherit' })
    // spawn.sync('npm', ['run', 'log'], { stdio: 'inherit' });
    // spawn.sync('git', ['add', 'CHANGELOG.md'], { stdio: 'inherit' });
    // spawn.sync('git', ['commit', '-m', 'changelog'], { stdio: 'inherit' });
      spawn.sync('git', ['push'], { stdio: 'inherit' })
  });