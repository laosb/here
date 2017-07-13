# Game Here

A strategy game made w/ Vue, Socket.IO and w/o any bundler. Wrriten in vanilla Javascript ES6 w/ no transpilation.

This was previously built from scratch on my train from Hefei to Fuzhou, and later continued off the train.

Just a notice: I don't use any transpilers there, so what you write is what Node.js/browsers get - meaning you shouldn't hope this will work on ancient browsers or Node.js versions.

## Project Goals

1. Test my existing ability on Vue and vanilla HTML+CSS+JS combination
2. Try to extend my stack to Socket.IO (I didn't use it before this project)
3. Evaluate the possiblity of building modern web apps w/o complex bundlers and transpilers
4. Learning new skills by building a framework from scratch

## Set up & Run

```bash
git clone github.com/laosb/here
cd here

cd client
npm i && npm i live-server -g && live-server # Just run a webserver to serve the static files
# No magic happens there, just pure static files.

cd ../server
npm i && npm start # Again, no magic.
```

## License

MIT. But except graphics, which are copyrightted by Shi Yunxiao.