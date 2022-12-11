require('events').EventEmitter.prototype._maxListeners = 200;
const { EventEmitter } = require('events');

import chalk from 'chalk';

export default new class ClientEmitter extends EventEmitter {
    constructor() {
        super();
    }

    public logSuccess(message: string){
        console.log(chalk.green("[+]" + message));
    }

    public logFailed(message: string){
        console.log(chalk.red("[-]" + message));
    }

    public logInfo(message: string){
        console.log(chalk.blue("[*]" + message));
    }

    public logWarning(message: string){
        console.log(chalk.yellow("[!]" + message));
    }
}

