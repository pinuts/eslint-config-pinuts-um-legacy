# @pinuts/eslint-config-pinuts-um-legacy
Common Eslint config for our legacy (pre ES6) UM / CSE Javascript.

Extends `@pinuts/eslint-config-pinuts-base` but with lesser strict rules.


# Use in your project

Install or update node package:
```
(cd; sudo npm i -g @pinuts/eslint-config-pinuts-um-legacy)
```

Include in your `cmsbs-conf/.eslintrc.js`:

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
