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
trenger å gjøre er å definere modellene som vi vil skal bli representert i databasen vår. Modellene er helt ordinære Python-klasser. For å
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
3. Skriv `python manage.py migrate`

Sånn! Da skal databasen inneholde en `WeightRecord`-tabell. I punkt 2 ble det laget migrasjonsfiler. Django holder styr på alle endringer i en database. Merk at `WeightRecordModel` har en relasjon til `HamsterModel`. Dermed er modellen vi nettopp har laget avhengig av at `HamsterModel` allerede finnes i databasen. Siden vi kan ha mange slike avhengigheter, tar ikke Django noen sjanser. Den noterer seg hva som blir gjort under hver migrasjon i såkalte migrasjonsfiler som du kan se i [./hamsterapp/migrations](./hamsterapp/migrations). Når noen skal gjenskape / bygge databasen og kjører `python manage.py migrate`, vil Django starte fra første migrasjonsfil (merk at hver migrasjonsfil har et tall, f.eks. `0001_initial.py`), og stegvis applikere alle endringer.

#### Kort oppsummert
1. Lag modell
2. Migrer modell (bygg og rediger tabeller i databasen)

### Oppgave 1b) - Admin-panel

Nå har vi lagt inn weight records i databasen, men foreløpig har vi ingen måte å registrere weight records på. Det enkleste, og noe man gjerne kan bruke til litt testing, er å sette opp et grunnleggende admin-panel. Long gone are the days of "jeg har brukt 40 timer på å lage et admin-panel". Django genererer et admin-panel automatisk - helt gratis!

Siden vi foreløpig ikke har så mye logikk i vårt admin-panel, har vi ikke laget en dedikert admin-pakke. Istedenfor vil du finne en [./hamsterapp/admin.py](./hamsterapp/admin.py) fil der alle modellene blir registrert. 

1. Importer `WeightRecordModel`
2. Registrer en `WeightRecordAdmin`-klasse i `admin.py`-filen. Foreløpig trenger vi ikke å overskrive Djangos standard admin-panel, så klassen kan bare inneholde en `pass` (en placeholder for "ingenting" i Python).
3. For at Django skal tolke klassen som en admin-side for en modell, må du inkludere en `@admin.register()`-annotation over klassen. Inni parentesene kan du sette inn `WeightRecordModel` som du lagde i forrige deloppgave.

Åpne [http://localhost:8080/admin](http://localhost:8080/admin), og logg inn med brukernavn `admin` og passord `admin`. Du bør nå se en ny `Weight records` seksjon i `Hamsters`-panelet. Her kan du legge til, redigere og slette weight records. Avhengig av hvilke felt-typer (field-types) du brukte i modellen, vil Django generere ulike input-metoder (tekstfelt for `CharField`, "text area" for `TextField`, dato-felt for `DateField`, osv.)

Registrer gjerne noen weight records ved hjelp av admin-panelet før du går videre!

Nå vil du for første gang se effekten av de ulike feltene du deklarerte i `WeightRecordModel`. Du ser for eksempel at `__str__()`-metoden returnerer teksten som beskriver hver registrert weight record i liste-visningen i admin-panelet. `verbose_name_plural` er navnet til den nye admin-seksjonen. Se gjerne over [django-dokumentasjonen for Meta-options](https://docs.djangoproject.com/en/4.0/ref/models/options/).

### Oppgave 1c) - Serializer

Når man sender en request til et API, hender det at man inkluderer litt data (f.eks. med en POST-request), eller at man ønsker å motta data (GET) fra APIet. Dataen blir gjerne sendt frem og tilbake mellom klient og server i JSON-format. Til nå har vi bare jobbet med Django-modeller, som er vanlige Python-klasser. Hvordan skal vi oversette JSON-data til Django-modeller, og motsatt? 

Anta at vi mottar en GET-request som vil hente ut alle weight records fra databasen vår. Hver weight record er representert av et Python-objekt av klassen `Model`. Vi må - på en eller annen måte - konvertere våre Python-objekter til JSON for å kunne sende dem til klienten. Python har vel et innebygd json-bibliotek som kan konvertere objekter til JSON, men våre modeller er ganske kompliserte objekter, så det hadde vært ganske tungvint. Heldigvis har vi _serializers_!

Her er et bilde av en ekte serializer:

<img src="https://user-images.githubusercontent.com/55885044/152545187-b9d77923-3bdb-4ccc-ab9a-f0c8c01cba46.png" width="250px" />

En serializer hjelper oss nemlig med svært mye forskjellig.
- Konvertering av JSON-data til Django Models
- Konvertering av Django Models til gyldig data som kan sendes i en `Response`
- Validering av data, slik at vi ikke lagrer ugyldig data og "roter til" databasen vår (+ automatisk generering av forholdsvis intuitive feilmeldinger hvis det oppstår feil)
- Filtrering av data - vi vil ikke alltid at all dataen fra databasen vår skal returneres i en `Response` (f.eks. passordoppre eller sensitiv informasjon)
- Direkte oppretting / oppdatering av instanser i databasen

Ettersom en serializer gjør så mye, kan det være litt vanskelig å forstå hvordan den egentlig skal brukes. La oss dermed starte med en svært enkel serializer, som vi kan bygge litt videre på i senere oppgaver.

1. Åpne serializers-pakken [./hamsterapp/serializers](./hamsterapp/serializers) (se gjerne på de to serializer-filene som allerede befinner seg der), og lag en ny fil som du kan kalle `weight_record.py`.
2. Lag en ny klasse kalt `WeightRecordSerializer` inni `weight_record.py` som arver fra `serializers.ModelSerializer`.
3. Inni `WeightRecordSerializer`, lag en ny klasse som du kaller `Meta`, og som har 2 attributter
  - `model`, som er lik weight record - modellen du lagde tidligere
  - `fields`, som du foreløpig kan sette til `"__all__"`

En ModelSerializer er en forenkling av den ordinære `serializers.Serializer`-klassen [(se django-dokumentasjon her)](https://www.django-rest-framework.org/api-guide/serializers/#declaring-serializers). Det er viktig å forstå at en serializer egentlig ikke bryr seg om modellen din; en serializer er ikke "knyttet til en modell". En serializer er bare et sett med felter, og en ModelSerializer kan lage seg disse feltene basert på en modell. 

En vanlig serializer kan for eksempel ha et felt som `text = TextField(...)` og `email = EmailField(...)`. Når vi gir serializeren data `{text="test", email="test@test.com"}`, vil serializeren knytte dataen til de ulike feltene i serializeren (basert på navn, `text="test" => text`, `email="test@test.com" => email`). Modellen vår, `WeightRecordModel`, har allerede definert noen slike felter. Når vi (inne i serializeren) setter `model = WeightRecordModel`, vil serializeren automatisk lage seg felter tilsvarende de vi deklarerte i modellen.

Når vi gir serializeren data og ber den om å validere dataen, kommer den til å sjekke ved hjelp av interne validator-funksjoner:
- Er "test@test.com" en gyldig e-post-adresse?
- Er "test" en gyldig tekst-streng?

Vi kommer til å lære å _bruke_ serializers ordentlig i neste oppgave.

// TODO: Forklar fields i ModelSerializer
