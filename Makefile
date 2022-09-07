install: 
	npm ci
brain-games: 
	node bin/brain-games.js
publish: 
	npm publish --dry-run
lint:
	npx eslint

buld:
	npx eslint
	npm publish --dry-run
