install:
		npm install

start:
		npm run babel-node -- src/bin/brain-games.js

publish:
		npm publish

lint:
		npm run eslint src/

even:
		npm run babel-node -- src/bin/brain-even.js

.PHONY: install start publish lint
