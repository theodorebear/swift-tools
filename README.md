# Development 

When developing locally, set in package.json:
```
"react": "../deepstack-widgets/node_modules/react",
```
This will share one running instance of React only, and yarn link in combination of yarn run watch will let you double-develop locally.

# Deployment 

When deploying, set in package.json:
```
"react": "^17.0.2",
```