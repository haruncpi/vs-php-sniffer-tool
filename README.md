# PHP Sniffer Tool

Uses PHP_CodeSniffer to format and lint PHP code.

Check Extension: [PHP Sniffer Tool](https://marketplace.visualstudio.com/items?itemName=haruncox.php-sniffer-tool)

## Features

- Lint PHP code using PHP_CodeSniffer.
- Format PHP code using PHP_CodeSniffer.
- Entire PHP file formatting.
- Selected PHP code formatting.
- Override rules if inner directory has xml ruleset file.
  For example: WordPress project has multiple plugins and themes, each plugin and theme has its own ruleset file.
  ```
  workspace-folder/
    plugins/
      plugin-1/
        .phpcs.xml
      plugin-2/
        .phpcs.xml
    themes/
      theme-1/
        .phpcs.xml
      theme-2/
        .phpcs.xml
  ```
- Set as default formatter for PHP files.

  ```json
  {
    "[php]": {
      "editor.defaultFormatter": "haruncox.php-sniffer-tool"
    }
  }
  ```

## Requirements

- [PHP](https://php.net)
- [PHP_Codesniffer](https://github.com/squizlabs/PHP_CodeSniffer)

## Extension Settings

### Quick Setup

`settings.json`:

```json
{
  "phpSniffer.autoDetect": true
}
```

And if your projects look like this:

```
workspace-folder/
  vendor/
    bin/
      phpcs
      phpcbf
  .phpcs.xml
```
