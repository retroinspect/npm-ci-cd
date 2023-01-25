const { version } = require('./package.json')

const core = require('@actions/core');

const tagVersion = process.env.GITHUB_REF_NAME.split('v')[1]

console.log(`package.json version: ${version}`)
console.log(`tagVersion: ${tagVersion}`)

core.notice(`package.json version: ${version}`)
core.notice(`tagVersion: ${tagVersion}`)

if (version !== tagVersion) {
    core.setFailed(`Action failed since tag version and package.json version are different`)
}
