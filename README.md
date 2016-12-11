# Mock Backend

A small, simple [nodejs](http://nodejs.org) that is meant to help speed up frontend workflow by mimicking the doable v2 backend.

I've started to build a collection of static json files. So far:
- ideas
- challenges
- users (extra user info)

And some fun shit:
- Star wars data
- Dinosaur data
- and my favorite, Chuck Norris jokes.

## Setup and Usage

1. Make sure [NodeJS (with npm)](http://nodejs.org) is installed.
2. Clone or download this repository to a directory of your choice.
3. Run either `yarn install` or `npm install` (whatever floats you boat.
4. Then run either `yarn start` or `npm start` which will launch the node server on [http://localhost:8000](http://localhost:8000).

## Routes Examples

The following public `GET` requests are currently available:

### `/api/dinosaurs`
### `/api/ideas`

`GET`: returns an array of simple dinosaur and idea objects with `id`s and `name`s, ie:

```
...
{
	"id": 5,
	"name": "Dracorex"
},
{
	"id": 6,
	"name": "Elasmosaurus"
}
...
```

### `/api/dinosaur/:id`
### `/api/idea/:id`

`GET`: returns an object with a dinosaur's and idea expanded details, ie:

```
{
	"id": 5,
	"name": "Dracorex",
	"pronunciation": "dray-ko-rex",
	"meaningOfName": "dragon king",
	"diet": "herbivorous",
	"length": "estimated 4m",
	"period": "Late Cretaceous",
	"mya": "66",
	"info": "<em>Dracorex hogwartsia</em> was discovered in the Hell Creek Formation in South Dakota and donated to the Children's Museum of Indianapolis in 2004. Its name was inspired by J.K. Rowling's Harry Potter series and the young visitors to the children's museum where it was displayed."
}
```
