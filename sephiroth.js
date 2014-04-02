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
sephiroth.attack = new Object();
sephiroth.attack.attack;
sephiroth.attack.paleHorse;
sephiroth.attack.deen;
sephiroth.attack.supernova;
sephiroth.attack.wall;
sephiroth.attack.shadowFlare;
sephiroth.attack.deSpell;
sephiroth.attack.heartlessAngel;
sephiroth.attack.break;

Sephiroth.main = function()
{
  Safer*Sephiroth's MP = Safer*Sephiroth's Max MP
  Count = Count + 1
  If (Count == 1) Then
  {
    If (Self has Slow Status) Then
    {
      Choose Self
      Cast DeSpell on Target
    } Else If (TempVar:MoveSet == 1) Then {
      Choose All Opponents
      Cast DeSpell on Target
      TempVar:MoveSet = 0
    } Else {
      Choose Self
      Cast Wall on Target
      TempVar:MoveSet = 1
    }
  } Else If (Count == 2) Then {
    If (TempVar:MoveSet == 0) Then {
      Choose All Opponents
      Use Deen on Target
    } Else {
      Choose Random Opponent
      Use Shadow Flare on Target
    }
  } Else If (Count == 3) Then {
    Choose Random Opponent with Highest HP
    Use < > (Physical Attack) on Target
  } Else If (Count == 4) Then {
    Choose Self
    Use <> (Fly Up) on Target
    Stage = 1
    Safer*Sephiroth's IdleAnim = Flying High
    Safer*Sephiroth's HurtAnim = Flinch (Flying High)
    Safer*Sephiroth's Range = 16
  } Else If (Count == 5) Then {
    Choose Random Opponent
    Use Pale Horse on Target
  } Else If (Count == 6) Then {
    Choose All Opponents
    Use Super Nova on Target
  } Else If (Count == 7) Then {
    If (Safer*Sephiroth's HP > 25% of Safer*Sephiroth's Max HP) Then
    {
      Choose Random Opponent
      Use Break on Target
    } Else {
      Choose Random Opponent
      Use Heartless Angel on Target
    }
  } Else {
    Choose Self
    Use <> (Fly Down) on Target
    Stage = 0
    Safer*Sephiroth's IdleAnim = Flying Low
    Safer*Sephiroth's HurtAnim = Flinch (Flying Low)
    Safer*Sephiroth's Range = 1
    Count = 0
  }
}