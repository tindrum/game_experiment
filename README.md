# game_experiment
terminal-based scoring functions. A testbed for object-oriented scorekeeping abstractions

Since most games use a small set of scoring methods, some objects that represent these methods can provide robust and representative scoring capabiity for a lot of games.
This node.js project is a testbed to create the needed objects.

I have identified two overarching concepts in many games:
* Scores are added at certain points during the game
--* byTurn
--* byRound
--* atEndOfGame

* Points are of several types:
--* simpleScore
--* mappedScore
--* goalPoints

Scoring Intervals
=====
The first group of concepts relate to when points are added to the player. In Scrabble, every player receives his points at the end of his turn. There is no waiting to see what other people might do to affect his score.

In other games, like Sushi Go, points are awarded at the end of each round. 

Other games will award points at the end of the game.

These intervals need not represent a mutually-exclusive set. Ticket to Ride awards points any time a player adds a route to the board. This is `byTurn` scoring. Also, though, players who hold **Route Cards** get points at the end of the game for those they've completed (and lose points for ones not finished). This is `atEndOfGame` scoring.

One game title, then, can have a set of scoring intervals.



Scoring Types
=====
In many cases, points are awarded in a linear way. A twelve-point word in Scrabble gets the player 12 points. This is `simpleScore`.

Other games award points non-linearly. In Ticket to Ride, a route of one train car yields 1 point, but a route of six trains yields 15 points. This is `mappedScore`, since a function determines the score. It is simple enough for the player to convert these, since it's printed on the game board, but it may be beneficial to have the player state how many trains he's putting down and have the game compute the points for it. Also, in some games, the function may be more complex, involving the points or position of other players, for example. 

Last, there are `goalPoints`. In Ticket to Ride, a route card could be considered a goal. In other games, the first person to reach a certain goal may be the only one to get points for it, or the points awarded may reduce for each player who reaches it. Perhaps it even increases, as in Risk, where each group of cards *turned in* for armies increases the number of armies (though this isn't how points are awared in Risk, but it is an example of the concept of changing values for a reached goal).

There are other ways to score games. These classes are not exhaustive.
