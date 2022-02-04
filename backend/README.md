# Introduksjon til Django Rest Framework

I dette kurset skal vi bygge videre på hamster-APIet. Aller først skal vi lage et helt nytt endepunkt fra start til 
slutt, slik at du blir bedre kjent med hvordan Django REST håndterer forespørsler (requests). Deretter skal vi utvide
vårt endepunkt med forespurt funksjonalitet, for å utforske enda flere Django-funksjoner.

## Oppgave 1 - WeightRecord-endepunkt
I applikasjonen ønsker vi å kunne registrere vekten til hamstere. Merk nemlig at hver hamster-art (Species) har en
typisk vekt assosiert med seg (typical_weight), og det er viktig å kontrollere at hamsterens vekt er passende for
dens art.

### Oppgave 1a) - WeightRecord-modell
_Tips: Inspiser gjerne modellene som allerede befinner seg i hamster-applikasjonen, i mappen [./hamsterapp/models](./hamsterapp/models) mens du 
leser denne oppgaven._

Django REST bygger videre på Django, og benytter seg dermed av Django-modeller. En Django-modell er akkurat som en
_tabell_ i en typisk relasjonell database som MySQL eller PostgreSQL. 

Istedenfor å koble oss opp til en database og skrive database-spørringer manuelt, gjør Django det for oss. Alt vi 
trenger å gjøre er å definere modellene i databasen vår. Modellene blir representert som ordinære Python-klasser. For å
manipulere dataen som er lagret i databasen, trenger vi dermed bare å kalle på metodene til disse klassene.

<img src="https://user-images.githubusercontent.com/55885044/152528847-32c601ee-5f4a-4148-bece-7242a953379e.png" width="650px" />

Inspiser [hamster-modellen](./hamsterapp/models/hamster.py). Den er en Python-klasse som arver fra Djangos `Model`-klasse. Inni klassen definerer vi noen variabler. Django tolker disse variablene som felter (eller kolonner) i database-tabellen. Ulike typer `fields` (som f.eks. `CharField`, `IntegerField`, ...) tolkes forskjellig av Django.

#### Lag modellen

1. Lag en ny fil i [./hamsterapp/models](./hamsterapp/models) som du kaller `weight_record.py`.
2. Inni denne filen skal du lage en ny modell, kalt `WeightRecordModel`. Modellen skal ha følgende felter:
  - `weight_in_grams`: Vekten til hamsteren. Må være et positivt heltall
  - `date`: Datoen for vekt-målingen. Om ingen dato blir oppgitt eksplisitt, skal nåværende dato (datoen idet målingen blir lagt til i systemet) settes inn automatisk.
    - Hint: Sjekk ut [DateField-dokumentasjonen](https://docs.djangoproject.com/en/4.0/ref/models/fields/#datefield)
  - `hamster`: Hamsteren som blir veid.
3. I admin-panelet ønsker vi at modellen skal kalles "weight record", og "weight records" i flertall.
4. Legg til en passende `__str__(self)` metode som skriver ut litt informasjon om modellen - for eksempel hamsterens navn, dato for målingen, og vekt i gram.

Om du er fornøyd med modellen, så er det på tide å teste den ut. Aller først må Django derimot få vite om at den finnes. Modellen din er inni en `models` Python-package. Det er som en helt vanlig mappe med en `__init__.py` fil. Django vil først se etter `models.py` filer. Om den ikke finner noen, vil den se etter `models`-pakker, og registrere alle modellene som blir importert i `__init__.py`-filen til disse pakkene. Inni [./hamsterapp/models/__init__.py](./hamsterapp/models/__init__.py), må du altså importere modellen du nettopp har laget.

Om du har prosjektet kjørende, og du har lagt til modellen i models-pakken, vil prosjektet reloade når du gjør endringer i modellen din og lagrer. Det er et tegn på at Django ser python-filen din. Nå er det på tide å gjøre slik at databasen vår får med seg de nye endringene! Heldigvis gjør Django dette for oss.

#### Migrer de nye endringene

En oppdatering av databasen kalles en "migrasjon" i Django. Vi "migrerer" ny informasjon om modeller til databasen vår.

1. Åpne en terminal, og sørg for at du er inni backend-mappen (`remix-django-course/backend/`).
2. Skriv `python manage.py makemigrations`
  - Her kaller du bare `makemigrations` gjennom `manage.py`-filen.
4. Skriv `python manage.py migrate`

Sånn! Da skal databasen inneholde en `WeightRecord`-tabell. I punkt 2 ble det laget migrasjonsfiler. Django holder styr på alle endringer i en database. Merk at `WeightRecordModel` har en relasjon til `HamsterModel`. Dermed er modellen vi nettopp har laget avhengig av at `HamsterModel` allerede finnes i databasen. Siden vi kan ha mange slike avhengigheter, tar ikke Django noen sjanser. Den noterer seg hva som blir gjort under hver migrasjon i såkalte migrasjonsfiler som du kan se i [./hamsterapp/migrations](./hamsterapp/migrations). Når noen skal gjenskape / bygge databasen og kjører `python manage.py migrate`, vil Django starte fra første migrasjonsfil (merk at hver migrasjonsfil har et tall, f.eks. `0001_initial.py`), og stegvis applikere alle endringer.

#### Kort oppsummert
1. Lag modell
2. Migrer modell (si til databasen at modellen finnes)

