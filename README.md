# Starting a new project ver 3.0

## Начало работы ##
```
cd <корень проекта>
npm install
```

### Windows ###
```
mklink /d dist public\dist
```
### Unix ###
```
ln -s staticfiles/build static
```

```
grunt
```

Верстка будет доступна по адресу 127.0.0.1:7700/templates/

## version history ##
### 3.0.1 ###
- Susy grid support added;
http://susy.oddbird.net/

- blocks collector wind-framework added;
