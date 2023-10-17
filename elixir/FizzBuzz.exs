# https://www.codewars.com/kata/5300901726d12b80e8000498/train/elixir

# Return an array containing the numbers from 1 to N, where N is the parametered value.

# Replace certain values however if any of the following conditions are met:

# If the value is a multiple of 3: use the value "Fizz" instead
# If the value is a multiple of 5: use the value "Buzz" instead
# If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
# N will never be less than 1.

# Method calling example:

# fizzbuzz(3) -->  [1, 2, "Fizz"]

defmodule FizzBuzz do
  def fizzbuzz(n) do
    Enum.map(1..n, fn num ->
      cond do
        rem(num, 3) == 0 and rem(num, 5) == 0 -> "FizzBuzz"
        rem(num, 3) == 0 -> "Fizz"
        rem(num, 5) == 0 -> "Buzz"
        true -> num
      end
    end)
  end
end
IO.inspect FizzBuzz.fizzbuzz(3)
IO.inspect FizzBuzz.fizzbuzz(5)
IO.inspect FizzBuzz.fizzbuzz(15)
