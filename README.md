# game_experiment
terminal-based scoring functions. A testbed for object-oriented scorekeeping abstractions

Since most games use a small set of scoring methods, some objects that represent these methods can provide robust and representative scoring capabiity for a lot of games.
This node.js project is a testbed to create the needed objects.

I have identified two overarching concepts in many games:
* Scores are added at certain points during the game
- byTurn
- byRound
- atEndOfGame

* Points are of several types:
- simpleScore
- mappedScore
- goalPoints

There are other ways to score games. These classes are not exhaustive.
