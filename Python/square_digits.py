def square_digits(num):
    numString = str(num)
    square_String = ''
    for char in numString:
        squareNum = int(char)**2
        square_String += str(squareNum)
    



    return int(square_String)

print(square_digits(222))