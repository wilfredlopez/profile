# Test Locally

```bash
npm run build-export
node server/server.js
```

# TO PUSH TO GITHUB and Deploy

`THIS IS NOW DEPRECIATED` (Now Using NETLIFY to DEPLOY `master` Branch)

`wilfredprofile.netlify.app`

```bash
git add .
git commit -am "WHATEREVER"
git push origin master
npm run deploy
```

https://wilfredlopez.github.io/profile

## NextJS | Push your “out” folder as the root of your gh-pages branch

git subtree push --prefix out origin gh-pages

### Workaround

```bash
git push origin --delete gh-pages
git subtree push --prefix out origin gh-pages
```
