# @pinuts/eslint-config-pinuts-um-legacy
Common Eslint config for our legacy (pre ES6) UM / CSE Javascript.

# Use in your project

Install or update node package:
```
sudo npm i @pinuts/eslint-config-pinuts-um-legacy
```

Include in your `.eslintrc.js`:

```
module.exports = {
    extends: [
        '@pinuts/eslint-config-pinuts-um-legacy'
    ]
};
```

# Publish on npm

On master, once all the changes for a new version are in order, run:

1. `npm version [major|minor|patch]`
2. `git push origin master --follow-tags`
3. `npm publish`
