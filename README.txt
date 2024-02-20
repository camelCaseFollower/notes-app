Simple notes app, looking forward to implement jwt auth in a future project

Notes:
-I learnt about the dotenv package, it allows me to create a .env file that contains environment variables,
this will be useful to protect values when pushing projects to github
After creating the .env file, to import it to the file i will use require('dotend').config() that will create
an object called process.env containing all the variables

-I will learn how to use express routing to organise better the backend code
First i will create a variable called 'route' that is equal to express.Router() and then i will add controllers 
the same way i did till now ( get,post,delete,put ) and lastly export the router 
Then i will import it to the server file and just .use() it and done
+Side note, we can implement app.use('/path',routerName) to add all the routes to the given path 

-I will also create a controllers folder where i store the database logic controllers ( like saving or deleting 
documents from mongodb );

-In this project i will try to replace .then with async/await as much as i can, its going amazingly!

-Keep in mind the mongoose.Types.ObjectId.isValid(id) method to check if a requested id is valid or not and throw
an error or it will throw a big ugly error

The first thing i learnt in this project is react context, used to give global state to components
The philosophy behind it is fairly easy, all components wrapped by the ContextProvider component will have access 
to the value property of the ContextProvider component
Now, the value we want to provide globally will change constantly so we will need to make the value a dynamic state 
value

For this, instead of using useState hook( we could ), we will use useReducer hook
from useReducer we will extract the state and a thing called dispatch 
Then to the useReducer hook we need to pass a Reducer function and an initial value for the state

dispatch is a function, it takes as an argument an object, the first property is type and its value is the name 
of an action written in capital letters (ex:SET_NOTES or ADD_NOTE), the second property is called payload and 
contains the data that we want to deal with ( ex: a new note to add )

Then, when we call the dispatch function, our Reducer function is invoked with dispatch's object passed as an argument\

Now lets create the reducer function, it will take as an argument first the initial state and second the action 
object, that is the object passed to the dispatch function, and lastly we will just use a switch function to do 
an action for each dispatch action type and voila!
Also note that each case will return an object containing the final state after change

Now lets learn how to use the context:
We can use the default useContext hook to access the context, but its better for us to create our own custom hooks 
to use the context

We will need to import two things, the actual context ( not the provider component ) and the useContext hook,
the useContext hook returns us the value of the context that we pass to it, so we will create a function 
that we will call context and asign the value of useContext with our NotesContext object passed to it 
Note that in case that we are trying to use the useContext outside its scope ( on a component that its not 
in the context components tree ), the context will be null , in that case we want to throw an error, otherwise, 
we will return the context value ( the initial state and the dispatch function )

The next step will be to replace the local state manipulation with the global one, we will import our custom 
context hook and use dispatch instead of useState


I had a strange error where if i created a note and then deleted it, it would break the entire server, it took 
some time to solve it ( 20 min ) but it was fairly easy, when creating the new note i would save only the 
properties from the form ( without _id ) and use the same object for the POST fetch and the dispatch, thus the 
new local list would not have an _id
To solve it i modified the createPost controller on the server side to return the object created and then in 
my frontend i just passed the response to the dispatch

Side Note: One way of manually handling errors can be on the backend, first creating an array and pushing the 
empty fields sent in the request and responding with an "empty fields" error and the object, then on the frontend
handling that message

One last thing to add here will be the data formatter, that is date-fns