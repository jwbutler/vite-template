module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "prettier",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "settings": {
        "import/resolver": {
            "typescript": {
                "project": "./tsconfig.json",
                "paths": ["/public"]
            }
        }
    },
    "plugins": [
        "@typescript-eslint",
        "prefer-arrow",
        "prettier",
    ],
    "rules": {
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-unsafe-enum-comparison": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-alert": "warn",
        "no-console": ["warn", { "allow": ["debug", "warn", "error"] }],
        "no-throw-literal": "warn",
        "prefer-arrow/prefer-arrow-functions": [
            "warn",
            {
                "disallowPrototype": true,
                "singleReturnOnly": false,
                "classPropertiesAllowed": true
            }
        ],
        "import/order": [
            "warn", {
                "groups": [
                    "index",
                    "sibling",
                    "parent",
                    "internal",
                    "external",
                    "builtin",
                    "object",
                    "type"
                ]
            }
        ],
        "prettier/prettier": "warn"
    }
};
