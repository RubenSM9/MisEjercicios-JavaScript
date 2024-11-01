const nombres = new Set ("Joses") // asi se trocea con [] se guarda bien 
nombres.add("Francisca")
nombres.delete("o")
nombres.clear()
console.log(nombres)
console.log(nombres.size)

nombres.add("Maria")
nombres.add("Joaquin")
nombres.add("Fran")
console.log(nombres)
console.log(nombres.has("Maria"))
