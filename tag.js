const { version } = require('./package.json')

const core = require('@actions/core');

const packageVersion = `v${version}` 
const tagVersion = process.env.GITHUB_REF_NAME

console.log(`package.json version: ${packageVersion}`)
console.log(`tagVersion: ${tagVersion}`)

core.notice(`package.json version: ${packageVersion}`)
core.notice(`tagVersion: ${tagVersion}`)

if (packageVersion !== tagVersion) {
    core.setFailed(`Action failed since tag version and package.json version are different`)
}
