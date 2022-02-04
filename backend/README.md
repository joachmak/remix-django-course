# Introduksjon til Django Rest Framework

I dette kurset skal vi bygge videre på hamster-APIet. Aller først skal vi lage et helt nytt endepunkt fra start til 
slutt, slik at du blir bedre kjent med hvordan Django REST håndterer forespørsler (requests). Deretter skal vi utvide
vårt endepunkt med forespurt funksjonalitet, for å utforske enda flere Django-funksjoner.

### Oppgave 1 - WeightRecord-endepunkt
I applikasjonen ønsker vi å kunne registrere vekten til hamstere. Merk nemlig at hver hamster-art (Species) har en
typisk vekt assosiert med seg (typical_weight), og det er viktig å kontrollere at hamsterens vekt er passende for
dens art.

#### Oppgave 1a) - WeightRecord-modell
_Tips: Inspiser gjerne modellene som allerede befinner seg i hamster-applikasjonen, i mappen `./hamsterapp/models` mens du 
leser denne oppgaven._

Django REST bygger videre på Django, og benytter seg dermed av Django-modeller. En Django-modell er akkurat som en
_tabell_ i en typisk relasjonell database som MySQL eller PostgreSQL. 

Istedenfor å koble oss opp til en database og skrive database-spørringer manuelt, gjør Django det for oss. Alt vi 
trenger å gjøre er å definere modellene i databasen vår. Modellene blir representert som ordinære Python-klasser. For å
manipulere dataen som er lagret i databasen, trenger vi dermed bare å kalle på metodene til disse klassene.



