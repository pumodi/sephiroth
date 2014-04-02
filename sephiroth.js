var chooseRandomTarget = function() {};

// Sets up the Sephiroth Object
sephiroth = new Object();
sephiroth.level = 87;
sephiroth.health = 400000;
sephiroth.magicPoints = 680;
sephiroth.attack = 246;
sephiroth.defense = 260;
sephiroth.magicAttack = 140;
sephiroth.magicDefense = 308;
sephiroth.dexterity = 160;
sephiroth.evade = 1;
sephiroth.experienceGrantableOnWin = 0;
sephiroth.abilityPointsGrantableOnWin = 0;
sephiroth.gilGrantableOnWin = 0;
sephiroth.fireAffinity = nil;
sephiroth.iceAffinity = nil;
sephiroth.lightningAffinity = nil;
sephiroth.waterAffinity = nil;
sephiroth.earthAffinity = "Immune";
sephiroth.windAffinity = nil;
sephiroth.gravityAffinity = "Immune";
sephiroth.poisonAffinity = nil;
sephiroth.holyAffinity = nil;
sephiroth.statusImmunities = ["Death","Sleep","Poison","Sadness","Fury","Confuse","Silence","Frog","Small","SlowNumber","Petrify","DeathSentence","Manipulate","Berserk","Paralyze","Slow","Stop","Darkness"];
sephiroth.slow = false;
sephiroth.attack = new Object();
sephiroth.attack.attack = function(target);
sephiroth.attack.paleHorse = function(target);
sephiroth.attack.deen = function(target);
sephiroth.attack.supernova = function(target);
sephiroth.attack.wall = function(target);
sephiroth.attack.shadowFlare = function(target);
sephiroth.attack.deSpell = function(target);
sephiroth.attack.heartlessAngel = function(target);
sephiroth.attack.breakAbility = function(target);
sephiroth.attack.flyUp = function(target);
sephiroth.attack.flyDown = function(target);
sephiroth.stageCount = 0;
sephiroth.moveSet = 0;

sephiroth.main = function() {
	sepiroth.magicPoints = 680;
	sephiroth.stageCount = sephiroth.stageCount + 1;
	if (sephiroth.stageCount == 1)  {
		if (sepiroth.slow == true) {
			sephiroth.attack.deSpell(self);
		} 
		else if (sephiroth.moveSet == 1)  {
			sephiroth.attack.deSpell(party);
			sephiroth.moveSet = 0;
		} 
		else {
			sephiroth.attack.wall(self);
			sephiroth.moveSet = 1
		}
	} 
	
	else if (sephiroth.stageCount == 2) {
		if (sephiroth.moveSet == 0) {
			sephiroth.attack.deen(party);
		} 
		else {
			chooseRandomTarget();
			sephiroth.attack.shadowFlare(randomTarget);
		}
	} 
	
	else if (sephiroth.stageCount == 3) {
		var partyMemberWithHighestHealth = 0;
		for (partyMember[i] = 0; partyMember[i] < party.length; partyMember[i]++) {
			if (partyMember[i].health > partyMember[partyMemberWithHighestHealth].health) {
				partyMemberWithHighestHealth = partyMember[i];
			}
			else {
				partyMemberWithHighestHealth = partyMemberWithHighestHealth;
			}
		}
		sephiroth.attack.attack(party[partyMemberWithHighestHealth]);
	} 
	
	else if (sephiroth.stageCount == 4) {
		sephiroth.attack.flyUp(self);
		sephiroth.stageCount = 1
		sephiroth.inPhysicalAttackRange = false;
	}
	
	else if (sephiroth.stageCount == 5) {
		chooseRandomTarget();
		sephiroth.attack.paleHorse(randomTarget);
	} 
	
	else if (sephiroth.stageCount == 6) {
		sephiroth.attack.supernova(party);
	} 
	
	else if (sephiroth.stageCount == 7) {
		if (sephiroth.health > (sephiroth.health / 4)) {
			chooseRandomTarget();
			sephiroth.attack.breakAbility(randomTarget);    
		} 
		else {
			chooseRandomTarget();
			sephiroth.attack.heartlessAngel(randomTarget);
		}
	} 
	
	else {
	sephiroth.attack.flyDown(self);
	sephiroth.inPhysicalAttackRange = true;
	sephirotstageCount = 0
	}
}