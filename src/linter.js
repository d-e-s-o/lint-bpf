const core = require('@actions/core');
const exec = require('@actions/exec');
const io = require('@actions/io');
const tc = require('@actions/tool-cache');
const fs = require('fs/promises');
const path = require('path');
const url = require('url');

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Install a statically linked `bpflinter` binary.
async function installBpflinter() {
    // We infer the bpflinter version to install from the Cargo manifest,
    // which is Dependabot managed.
    const manifestPath = path.join(__dirname, '..', 'Cargo.toml');
    const data = await fs.readFile(manifestPath, {
        encoding: 'utf8'
    });
    const lines = data.trim().split('\n');
    const lastLine = lines[lines.length - 1].trim();
    const bpflinterVersion = lastLine.split('=')[1].trim().replace(/"/g, '');

    const downloadPath = await tc.downloadTool(`https://github.com/d-e-s-o/bpflint/releases/download/cli-v${bpflinterVersion}/bpflinter-x86_64-unknown-linux-musl`);
    await fs.chmod(downloadPath, '755');
    await io.cp(downloadPath, '/usr/local/bin/bpflinter');
}


async function main() {
    await installBpflinter();
    // `files` input defined in action metadata file
    const files = core.getInput("files");
    await exec.exec('bpflinter', files);
}

module.exports = {
    main
};
