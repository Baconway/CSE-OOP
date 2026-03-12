# for each row, have 4 dashes, end with a +
rows = 4
columns = 4

for i in range(rows * columns ):
  if i % 5 == 0:
    print('+', end = ' ')
    for j in range(rows):
      for k in range(4):
        print('-', end = ' ')
      if j == 3:
        print('+')
      else:
        print('+', end = ' ')
  else:
    print('I')
    for j in range(rows * columns):
      if j % 5 == 0:
        if j != (rows * columns - 1):
          print('I', end = ' ')
        else:
          print('I')
      else:
          print(' ', end = ' ')
  