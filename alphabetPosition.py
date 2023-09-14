# In this kata you are required to, given a string, replace every letter with its position in the alphabet.

# If anything in the text isn't a letter, ignore it and don't return it.

# "a" = 1, "b" = 2, etc.

def alphabet_position(text):
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    stringPos = ''
    for char in text:
        if char.upper() not in alphabet:
            continue
        else: 
            position = str(alphabet.index(char.upper()) + 1)

            stringPos += position + ' '

        

    
    return stringPos[:-1]

print(alphabet_position('yer .'))