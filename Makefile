install:
		npm install

start:
		npm run babel-node -- src/bin/brain-games.js

publish:
		npm pushlish
		
.PHONY: install start publish
