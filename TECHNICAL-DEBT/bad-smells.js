// Taken from this article: https://dev.to/this-is-learning/how-to-find-code-smells-with-examples-ob0

// Example #1

// Ex. 1: constants.js
const base_Multiplier = 1.05;

// Ex. 1: spell.js
class spell {
	damage = 10;
	spell_type = "FIRE";
	
	function cast (Enemy) {
		const dmg = this.damage * base_Multiplier;
		
		Enemy.takeDAMAGE(this.dmg, this.spell_type);
		
		if (Enemy.defeated()) {
			console.log("Spell defeated an enemy!")
		}
	}
}

// Example #2
const MAX_LEVEL = 10;
const MAX_EXP = 300;

function gainExp(player, newExp) {
	if (player != null) {
		if (player.level > MAX_LEVEL) {
			console.log('Already max level');
		} else {
			player.exp += newExp;
			if (player.exp > MAX_EXP) {
				player.levelUp();
			}
		}
	} else {
		console.error('Player is null');
	}
}
