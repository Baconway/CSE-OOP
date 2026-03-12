import math

print((4/3) * math.pi * (5 ** 3), 'is volume of sphere')

bookstorePrice = 24.95 / (40/100)
shipping = 3 + (.75 * 59)
print(bookstorePrice * 60 + shipping, 'is what the bookstore pays')

startTime = 6 * 3600 + 52 * 60
easyPace = 8.15 * 60
tempoPace = 7.12 * 60

timeforBreakfast = startTime + easyPace * 2 + tempoPace * 3
print(timeforBreakfast / 3600, (timeforBreakfast % 3600) / 60, 'is when you get home for breakfast')