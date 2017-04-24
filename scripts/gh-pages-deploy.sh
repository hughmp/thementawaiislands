cd /Users/hugh/Documents/Dev/thementawaiislands
npm run build
cd /Users/hugh/Documents/Dev/thementawaiislands-static/
git checkout gh-pages
git pull
cp -rf /Users/hugh/Documents/Dev/thementawaiislands/build/ /Users/hugh/Documents/Dev/thementawaiislands-static/
git add .
git commit -m "auto-deploy-dev"
git push
