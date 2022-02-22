## Oppsett

- Åpne backend-mappen i en IDE
- Åpne terminal og skriv `pip --version` for å kontrollere at du har installert pip
    - Om du ikke har `pip` installert, kan du
      se [veiledning for installasjon av pip](https://pip.pypa.io/en/stable/installation/)
- Åpne terminal i rot-mappen (remix-django-course/backend), og lag et virtual environment: 
```
python -m venv ./
````

- Aktiver venv-et du lagde ved å kjøre `activate`-scriptet som ligger i `./venv/Scripts/activate`
- Installer alle pakkene som prosjektet er avhengig av ved hjelp av `requirements.txt`-filen:
```
pip install -r requirements.txt
```
- Kjør `python manage.py runserver` for å kjøre backenden
  - Default port er 8000, men du kan endre dette ved å kjøre `python manage.py runserver <port-nummer>`

## Admin-panel

Det er laget en bruker med admin-rettigheter.

Brukernavn: `admin`<br />
Passord: `admin`

## Oppgaver

Alle oppgavene for dette backend-kurset er i [Oppgaver-mappen](./Oppgaver).

