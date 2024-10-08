import chalk from 'chalk';

const log = console.log;
log(chalk.blue("It's blue text!"));
log(chalk.blue.bgRed.bold("It's bold and highlighted in red text!"));
log(chalk.green.underline('Underlined green text'));