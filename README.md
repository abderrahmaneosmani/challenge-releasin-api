



## Installation

```bash
git clone https://github.com/abderrahmaneosmani/challenge-releasin-api/
cd challenge-releasin-api
$ npm install

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
##PART 3
## I suggest changing the table  Attribute value Like this

```
model AttributeValue {
  id                 Int                @id @default(autoincrement())
  Name               String
  value             String
  typeValue         String              

}



