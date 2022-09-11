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
calc:
	node bin/brain-calc.js
gcd:
	node bin/brain-gcd.js
even:
	node bin/brain-even.js
prog:
	node bin/brain-progression
