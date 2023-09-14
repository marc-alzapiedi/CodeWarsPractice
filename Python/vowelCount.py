# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.

def get_count(sentence):
    sentenceCheck = sentence.lower()
    vowelList = ['a', 'e', 'i', 'o', 'u']
    vowelCount = 0
    for char in sentenceCheck:
        if char not in vowelList:
            continue
        else:
            vowelCount = vowelCount + 1

    return vowelCount

print(get_count('This is a sentence with vowels'))
