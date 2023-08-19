def square(x):
    return x ** 2

def sqrt(x):
    return x ** 0.5

def pythag(a, b):
    return sqrt(square(a) + square(b))

print(pythag(3, 4))
