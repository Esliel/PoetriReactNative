# poemesDataBase

## idPoeme

identifiant de l'auteur suivi d'un nombre. Le premier poéme enregistré dans la database de cet auteur sera 1 et on ajoute +1 à chaque fois (idauteur1, idauteur2, ...).

## idAuthor

identifiant de l'auteur : tout en minuscule et sans espace ni tiret ni acent : son prenom puis son nom.
Clef étrangére permettant de relier à authorDataBase pour rcupérer les données concernant l'auteur.

## titrePoeme

Titre du poème tel qu'il apparaîtra.

## titreRecueil

Titre du recueil tel qu'il apparaîtra.

## anneeParution

Année de parution du recueil en quattre chiffres sous forme de nombre.

## typeStrophe

En poèsie un paragraphe = une strophe. En fonction du nombre de vers qui la composent elle porte un nom différent :

- 2 : distique
- 3 : tercet
- 4 : quatrain
- 5 : quintil
- 6 : sizain

Tous les poèmes ne sont pas constitués de même type de strophes, c'est donc pourquoi typeStophe1 = la première strophe, typeStrophe2 la seconde et ainsi de suite.

exemple : typeStrophe4: "distique", signifie que la 4ieme strophe est constituée de 2 vers.

## nombreStrophes

le nombre, sous forme de nombre, de strophes formant ce poème.

## vers

vers01: premier vers du poème tel qu'il apparaîtra ; vers02: seconde vers du poème tel qu'il apparaîtra et ainsi de suite.

# authorDataBase

## idAuthor

clef primaire.
identifiant de l'auteur : son nom, tout en minuscule et sans espace ni tiret ni acent.

## prenomAuteur

Prénom de l'auteur

## nomAuteur

Nom de l'auteur

## nationaliteAuteur

Nationalité de l'auteur.

Utilisation des codes pays (ISO 3166-1 alpha-2) :
Andorre : ad
Bénin : bj
Burkina Faso : bf
Burundi : bi
Cameroun : cm
Canada : ca
Comores : km
Côte d'Ivoire : ci
Djibouti : dj
Gabon : ga
Guinée : gn
Guinée équatoriale : gq
Haïti : ht
Luxembourg : lu
Madagascar : mg
Mali : ml
Maroc : ma
Maurice : mu
Mauritanie : mr
Monaco : mc
Niger : ne
République centrafricaine : cf
République du Congo : cg
République démocratique du Congo : cd
Rwanda : rw
Sénégal : sn
Seychelles : sc
Suisse : ch
Tchad : td
Togo : tg
Tunisie : tn
Vanuatu : vu
France : fr

## femme

L'auteur est :

- une femme : true
- un homme : false
