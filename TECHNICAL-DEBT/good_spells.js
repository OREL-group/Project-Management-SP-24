// Taken from this article: https://dev.to/this-is-learning/how-to-find-code-smells-with-examples-ob0

// Example #1

// Ex. 1: constants.js
const base_Multiplier = 1.05;

// Ex. 1: spell.js
class spell {
	damage = 10;
	spell_type = "FIRE";
	
	function cast (Enemy) {
		const dmg = this.damage * BASE_MULTIPLIER;
		
		enemy.takeDamage(dmg, this.spell_type);
		
		if (enemy.defeated()) {
			console.log("Spell defeated an enemy!")
		}
	}
}

// Example #2

