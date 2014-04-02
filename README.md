Sephiroth Battle Simulator
=========

Sephiroth is a Battle Simulator based on the Final Battle of Final Fantasy VII.
It is written in a variety of programming languages primarily as an exercise for myself.

Languages to be included are:
	* Javascript (Currently in development)
	* PHP
	* Python
	* Node.js
	* Ember.js
	* Ruby on Rails
	* Go
	
Here is the general concept of how everything is laid out.

1. First of all, the AI script for Sephiroth is based heavily off the actual script for 
Safer-Sephiroth from the Final Fantasy Wikia...

http://finalfantasy.wikia.com/wiki/Safer%E2%88%99Sephiroth

2. Sephiroth relies heavily on Party Members and Enemy Entities as objects.
Party members have access to everyone ability in the game but only if they have the proper
materia equipped. In the first version of Sephiroth, the party will be locked as follows
and they will have a standard set of materia and levels.

	* Cloud: Level 90
	* Barrett: Level 90
	* Tifa: Level 90
	
Sephiroth is set at level 84 and only has access to the Sephiroth move-set.

3. Party members have general "useAttack" methods as part of their object constructors 
that take two arguments: (materia, target). Materia arguments will only be visible if
the proper materia is equipped.

Sephiroth does not need materia as his move-set is hardcoded into his object 
constructor.