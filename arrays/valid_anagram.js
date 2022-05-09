// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
//typically using all the original letters exactly once.

// Example 1

// Input: s = "anagram", t = "nagaram"
// Output: true

function valid_anagram(s, t){
    if(s.length !== t.length) return false

    const sCount = {}
    const tCount = {}

    const L = s.length //7
    for(i=0; i<L; i++){
        if(!sCount[s[i]]){
            sCount[s[i]] = 0
        }
        if(!tCount[t[i]]){
            tCount[t[i]] = 0
        }

        sCount[s[i]]++
        tCount[t[i]]++
    }
    

    for(let char in sCount){
        if(sCount[char] != tCount[char]){
            console.log(false)
        }
    }

    console.log(true)
}

valid_anagram('anagram', 'nagaram')