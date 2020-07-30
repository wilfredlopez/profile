# Test Locally 
```bash
npm run build
npm run export
node server/server.js
```
# TO PUSH TO GITHUB ONLY

npm run build
git add .
git commit -am "WHATEREVER"
git push origin master
npm run github-deploy

https://wilfredlopez.github.io/profile


## NextJS | Push your “out” folder as the root of your gh-pages branch
git subtree push --prefix out origin gh-pages


### Workaround

```bash
git push origin --delete gh-pages
git subtree push --prefix build origin gh-pages
```