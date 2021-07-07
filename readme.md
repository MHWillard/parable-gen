# Business Parable Generator
This is a silly full-stack web application I created for my personal 100 Days of Code project. Whenever you click the button, it spits out a pithy business parable summary. I tend to get annoyed by parables, especially ones that talk down to you, so I thought an app poking fun at them would be a good project.

Nevertheless, this is the real deal. It runs on a MERN stack (MongoDB, Express, React, and Node). Documents hosted in a MongoDB Atlas instance are randomly rolled and pushed through Node into JSON format. The React frontend grabs the data, arranges the props, and presents them on the page. Despite such a simple task, this project was pretty challenging for me to make. I got stuck on the UI in particular - CSS flexbox/grid are definitely spots in my knowledge I want to improve. If you dig into the code you might see some of it's messy as I tried to work out how to arrange things. Still, I learned a lot about building a full stack web application, and I have ideas on how to improve.

You can check out a live version of this app at https://stormy-brook-71740.herokuapp.com/.

## Installation
1. Clone the repo.
``` sh
git clone https://github.com/MHWillard/parable-gen.git
```

2. Install npm packages.
``` sh
npm install
```

3. Add your own MongoDB config info to the .env file under URI. Make sure your instance runs a similar Mongoose schema - each document is essentially a whole summary, the app just randomly rolls and picks from each one. More documents means more combinations.

4. You can type 'npm run dev' in the main directory through bash to run both the server and the client.

## Usage
Adding more documents will allow more combinations. Further updates could include further styling on the React frontend - I was considering text that faded in and out and might add it down the line. It's mainly a proof of concept for how a backend and a frontend can work together.

## Contributing
Contributions are welcome, just fork the project and add your own branches.

## License
This project is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license.