# Memory Card Game

A typical memory card game with a hint of retro style.

You can check the demo by clicking the link [Memory Card Game](https://memory-card-retro-game.netlify.app/).

# Highlights

## Score

Score
The score is based of two things, the moves count (_a move is pairing two cards_) and the duration you take to finish the game.

- The moves count assume you have an incredible memory you can pass by all the cards one and them you can pair them, that means for if you have 6 cards then you'll have 3 moves for the first round and 3 other moves in the second pairing round, so the maximum is 6 moves.
- The acceptable duration is the duration you take to fulfill two rounds of moves with a 5 seconds buffer.

The score starts with a wining score (_250pts_) and an ideal moves/ duration score (_250pts_) and for each extra move or second you lose points with a minimum of 150pts.

## Developer proof

As this game has a scoring system, so to avoid cheating, _even from a fellow developer_ 😃, so I retrieve the image on the back of the card only on click, that way no one can open the dev tool and check for similar cards or write a js script that would help this person with that.

# Stack

- Library: ReactJs
- Styling: CSS Modules and SCSS
- UI Framework: [Semantic UI React](https://react.semantic-ui.com/)
- Linter: ESLint
- Formatter: Prettier
- Precommits: Husky and Lint staged
- Transpiler: Babel
- Bundler: [ParcelJs](https://parceljs.org/)

# Scripts

- yarn dev
- yarn build
- yarn format
- yarn lint
- yarn clear-build-cache
