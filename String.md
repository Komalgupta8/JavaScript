-------------------Strings---------------

Type: new String("smash card") creates a String object, while "komal" creates a primitive string.
Performance: new String() is less efficient due to object overhead; primitive strings are more efficient.
Behavior: new String() behaves differently in comparisons (especially with strict equality ===); primitive strings compare more predictably.
Methods & Properties: new String() has extra methods like .valueOf(), while primitive strings don’t but are auto-boxed when needed.
Immutability: Both are immutable, but String objects may behave differently due to being objects.
