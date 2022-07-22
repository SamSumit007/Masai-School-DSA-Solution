let s = "abcbbcadbb";

let maxLength = 0;

for (let i = 0; i < s.length; i++) {
    let set = new Set();
    set.add(s[i]);

    for (let j = i + 1; j < s.length; j++) {
        if (set.has(s[j])) break;

        set.add(s[j]);
    }

    maxLength = Math.max(maxLength, set.size);
}

console.log(maxLength);
