seconds = 42 * 60 + 42
minutes = 42 + (42 / 60)
hours = (42 / 60) + (42 / 3600)
miles = 10 / 1.61
sec_pace = seconds / miles
min_pace = minutes / miles
mph = miles / hours

print(seconds, ' seconds')
print('\n')
print(miles, ' miles')
print('\n')
print(sec_pace, ' second per mile and ', min_pace, ' minute per mile')
print('\n')
print(mph, ' miles per hour')