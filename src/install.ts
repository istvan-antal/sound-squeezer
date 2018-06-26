import { copyFileSync, existsSync, mkdirSync, createWriteStream, unlink } from 'fs';
import { get } from 'https';
import { execFileSync } from 'child_process';
import { basename } from 'path';
import { platform } from 'os';

const rimraf = require('rimraf');

const download = async (url: string, destination: string) => new Promise((resolve, reject) => {
    const file = createWriteStream(destination);
    get(url, response => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            resolve();
        });
    }).on('error', err => { // Handle errors
        unlink(destination, () => {
            //
        }); // Delete the file async. (But we don't check the result)
        reject(err);
    });
});

const binaries: {
    [key: string]: string;
} = {
    macos64: 'https://ffmpeg.zeranoe.com/builds/macos64/static/ffmpeg-3.4.1-macos64-static.zip',
    win64: 'https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-3.4.1-win64-static.zip',
};

if (!existsSync('./bin')) {
    mkdirSync('./bin');
}

const arch = (platform() === 'win32') ? 'win64' : 'macos64';
const ext = (arch === 'win64') ? '.exe' : '';

if (!existsSync(`./bin/ffmpeg${ext}`)) {
    download(binaries[arch], `./bin/ffmpeg.zip`).then(() => {
        execFileSync('unzip', ['ffmpeg.zip'], {
            cwd: './bin',
            stdio: 'inherit',
        });
        unlink(`./bin/ffmpeg.zip`, () => {
            //
        });

        copyFileSync(
            `./bin/${basename(binaries[arch], '.zip')}/bin/ffmpeg${ext}`, `./bin/ffmpeg${ext}`,
        );
        /* copyFileSync(
            `./bin/${basename(binaries[arch], '.zip')}/bin/ffprobe${ext}`, `./bin/ffprobe${ext}`,
        );*/
        rimraf(`./bin/${basename(binaries[arch], '.zip')}`, () => {
            //
        });
    }, e => {
        throw e;
    });
}