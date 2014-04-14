/*jslint node: true */
// Sets up faction arrays
var party = [""];
var creatures = [""];

// Sets up stats handling
var damage = 0;
var target = 0;
var isReflectable = false;
var baseDamage = 0;
var maxDamage = 0;
var abilityPower = 0;

// Sets up damage calculation functions
var basicAttackBaseDamage = function (abilityUser) {
	baseDamage = (abilityUser.attack + ((abilityUser.attack + abilityUser.level) / 32) * ((abilityUser.attack * abilityUser.level) / 32));
};
var basicAttackMaxDamage = function (target) {
	basicAttackBaseDamage();
	maxDamage = ((abilityPower * (512-target.defense) * baseDamage) / (16 * 512));
};
var basicAttackActualDamage = function () {
	basicAttackMaxDamage();
	damage = (maxDamage * ((3841 + random(255)) / 4096));
};
var magicAttackBaseDamage = function (abilityUser) {
	baseDamage = (abilityUser.magicAttack + ((abilityUser.magicAttack + abilityUser.level) / 32) * ((abilityUser.magicAttack * abilityUser.level) / 32));
};
var magicAttackMaxDamage = function (target) {
	magicAttackBaseDamage();
	maxDamage = ((abilityPower * (512-target.magicDefense) * baseDamage) / (16 * 512));
};
var magicAttackActualDamage = function () {
	magicAttackMaxDamage();
	damage = (maxDamage * ((3841 + random(255)) / 4096));
};

// Sets up the player objects
player = new Object();
player.level = 75;
player.health = 20000;
player.magicPoints = 400;
player.attack = 123;
player.defense = 130;
player.magicAttack = 70;
player.magicDefense = 154;
player.dexterity = 80;
player.evade = 1;
player.fireAffinity = 0;
player.iceAffinity = 0;
player.lightningAffinity = 0;
player.waterAffinity = 0;
player.earthAffinity = 0;
player.windAffinity = 0;
player.gravityAffinity = 0;
player.poisonAffinity = 0;
player.holyAffinity = 0;
player.statusImmunities = [""];
player.positiveStatusEffects = [""];
player.negativeStatusEffects = [""];
player.attack = new Object();
player.attack.limitBreak = function (target) {
	// Do something...
};
player.attack.attack = function (target) {
	// Do something...
};
player.attack.supernova = function (target) {
	// Do something...
};

// Instantiates the party
var cloud = new player();
var tifa = new player();
var barret = new player();
party.push(cloud, tifa, barret);

// Main function for players
cloud.main = function () {
};
tifa.main = function () {
};
barret.main = function (){
};

// Sets up and instantiates Sephiroth
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
sephiroth.fireAffinity = 0;
sephiroth.iceAffinity = 0;
sephiroth.lightningAffinity = 0;
sephiroth.waterAffinity = 0;
sephiroth.earthAffinity = "Immune";
sephiroth.windAffinity = 0;
sephiroth.gravityAffinity = "Immune";
sephiroth.poisonAffinity = 0;
sephiroth.holyAffinity = 0;
sephiroth.statusImmunities = ["Death","Sleep","Poison","Sadness","Fury","Confuse","Silence","Frog","Small","SlowNumber","Petrify","DeathSentence","Manipulate","Berserk","Paralyze","Slow","Stop","Darkness"];
sephiroth.positiveStatusEffects = [""];
sephiroth.negativeStatusEffects = [""];
sephiroth.slow = false;
sephiroth.attack = new Object();
sephiroth.attack.attack = function (target) {
	abilityUser = sephiroth;
	target = chooseRandomTarget();
	abilityPower = 1;
	basicAttackActualDamage();
};
sephiroth.attack.paleHorse = function (target) {
	abilityPower = (13/16);
	magicAttackActualDamage();
	var statusEffectSeed = random();
	target.negativeStatusEffects.push("sadness", "frog", "small");
};
sephiroth.attack.deen = function (target) {
	abilityPower = (9/16);
	magicAttackActualDamage();
};
sephiroth.attack.supernova = function (target) {
	target.health = (target.health * 1/16);
	var statusEffectSeed = random();
	if (statusEffectSeed < 0.33) {
		target.negativeStatusEffects.push("confusion", "silence","slow");
	}
};
sephiroth.attack.wall = function (target) {
	sephiroth.positiveStatusEffects.push("wall");
};
sephiroth.attack.shadowFlare = function (target)
abilityUser = sephiroth;
target = chooseRandomTarget();
abilityPower = 7.8125;
magicAttackActualDamage();
isReflectable = true;
target.health = (target.health - damage);
sephiroth.magicPoints = sephiroth.magicPoints - 100;
sephiroth.attack.deSpell = function (target) {
	for (i = 0; i < 3; i++) {
		var numberOfPositiveStatusEffects = party[i].positiveStatusEffects.length();
		party[i].positiveStatusEffects.splice(numberOfPositiveStatusEffects, numberOfPositiveStatusEffects);
	}
	sephiroth.magicPoints = sephiroth.magicPoints - 20;
};
sephiroth.attack.heartlessAngel = function (target) {
	isReflectable = false;
	target.health = 1;
};
sephiroth.attack.breakAbility = function (target) {
	abilityUser = sephiroth;
	target = chooseRandomTarget();
	abilityPower = 6.25;
	magicAttackActualDamage();
	isReflectable = false;
	target.health = target.health - damage;
	var petrifySeed = random();
	if (petrifySeed < 0.32) {
		target.negativeStatusEffects.push("petrify");
	}
};
sephiroth.attack.flyUp = function (target) {

};
sephiroth.attack.flyDown = function (target) {

};
sephiroth.stageCount = 0;
sephiroth.moveSet = 0;
creatures.push(sephiroth);

// Turn Processing variables
var currentTurn = 0;

// Sephiroths AI Routine
sephiroth.main = function () {
	sepiroth.magicPoints = 680;
	sephiroth.stageCount = sephiroth.stageCount + 1;
	if (sephiroth.stageCount == 1)  {
		if (sepiroth.slow === true) {
			sephiroth.attack.deSpell(self);
		}
		else if (sephiroth.moveSet == 1)  {
			sephiroth.attack.deSpell();
			sephiroth.moveSet = 0;
		}
		else {
			sephiroth.attack.wall(self);
			sephiroth.moveSet = 1;
		}
	}

	else if (sephiroth.stageCount == 2) {
		if (sephiroth.moveSet === 0) {
			sephiroth.attack.deen(party);
		}
		else {
			chooseRandomTarget();
			sephiroth.attack.shadowFlare();
		}
	}

	else if (sephiroth.stageCount == 3) {
		var partyMemberWithHighestHealth = 0;
		for (party[i] = 0; party[i] < party.length; party[i]++) {
			if (party[i].health > party[partyMemberWithHighestHealth].health) {
				partyMemberWithHighestHealth = party[i];
			}
			else {
				partyMemberWithHighestHealth = partyMemberWithHighestHealth;
			}
		}
		sephiroth.attack.attack(party[partyMemberWithHighestHealth]);
	}

	else if (sephiroth.stageCount == 4) {
		sephiroth.attack.flyUp(self);
		sephiroth.stageCount = 1;
		sephiroth.inPhysicalAttackRange = false;
	}

	else if (sephiroth.stageCount == 5) {
		chooseRandomTarget();
		sephiroth.attack.paleHorse();
	}

	else if (sephiroth.stageCount == 6) {
		sephiroth.attack.supernova();
	}

	else if (sephiroth.stageCount == 7) {
		if (sephiroth.health > (sephiroth.health / 4)) {
			chooseRandomTarget();
			sephiroth.attack.breakAbility();
		}
		else {
			chooseRandomTarget();
			sephiroth.attack.heartlessAngel();
		}
	}

	else {
		sephiroth.attack.flyDown(self);
		sephiroth.inPhysicalAttackRange = true;
		sephirotstageCount = 0;
	}
};

// Player/Enemy Functions
var chooseRandomTarget = function () {
	var randomTargetSeed = random();
	if (charactersFaction == party) {
		if (randomTargetSeed > 0 && randomTargetSeed < 0.33) {
			target = party[0];
		}
		else if (randomTargetSeed > 0.33 && randomTargetSeed < 0.66) {
			target = party[1];
		}
		else if (randomTargetSeed > 0.66 && randomTargetSeed < 1) {
			target = party[2];
		}
	}
	else if (charactersFaction == creatures) {
		if (randomTargetSeed > 0 && randomTargetSeed < 0.33) {
			target = creatures[0];
		}
		else if (randomTargetSeed > 0.33 && randomTargetSeed < 0.66) {
			target = creatures[1];
		}
		else if (randomTargetSeed > 0.66 && randomTargetSeed < 1) {
			target = creatures[2];
		}
	}
};

// Turn processing routine
var processTurn = function () {
	for (currentTurn < 4; currentTurn === 0; currentTurn++) {
		if (currentTurn === 0) {
			sephiroth.main();
		}
		else if (currentTurn == 1){
			cloud.main();
		}
		else if (currentTurn == 2){
			tifa.main();
		}
		else if (currentTurn == 3){
			currentTurn = -1;
			barret.main();
		}
	}
};

processTurn();
