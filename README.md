# bidart_dojo_compSquare

A partir de deux tableaux `a` et `b`. Ecrivez une fonction `compSquare(a, b)` qui vérifie si les deux tableaux ont les mêmes éléments. Par mêmes éléments, on veut dire qu'un élément de `b` doit être le carré d'un élément de `a`, quelque soit leur ordre.   

### Exemples :   

Tableaux valides
```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
```
Ici `compSquare(a, b)` renvoie true car chaque élément de `b` est un carré d'un élément de `a` :
```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
```

Tableaux invalides   
```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
```
Ici `compSquare(a, b)` renvoie false car on a changé le premier élément de `b`, et qu'il n'est le carré d'aucun élément de `a`.
