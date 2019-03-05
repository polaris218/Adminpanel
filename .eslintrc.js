module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "globals": {
        "window": true,
        "document": true,
        "localStorage": true,
        "FormData": true,
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": "off",
        "react/destructuring-assignment": [
            "warn",
            "always",
            {
                "ignoreClassFields": true
            }
        ],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "prefer-destructuring": ["error", {
            "array": true,
            "object": true
          }, {
            "enforceForRenamedProperties": false
            }],
      }
};