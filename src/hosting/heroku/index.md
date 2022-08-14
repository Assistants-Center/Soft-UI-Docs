# Heroku Discord Dashboard hosting

To begin working on heroku, create a new file named `Procfile` in the root of your project with the content of:
```js
web: node index.js
```
> If you arent using index.js or isn't located in the project root, change it accordingly

## Sign in to [heroku](https://id.heroku.com/login)

[Create](https://dashboard.heroku.com/new-app) a new app and select your region

Select deployment method of GitHub and link your repository which contains your dashboard.

Enable Automatic Deployment