# Links and other info

    http://localhost:3000/
    Is there an extension that suggests javascript methods? The intellicense sucks atm.

### tiny notes

    return statements in function

    1. return {}  // curly braces when returning an object. What is brackets for? just regular
    2. you can add function to object   https://www.youtube.com/watch?v=PkZNo7MFNFg&list=WL&index=4&t=73s   timestamp 3:12:00
        - learn how to use it well.
    3. const { tomorrow : tempOftomorroww} = listofTempretures;
        //you just return a value by name a key(tommorrow), value(tempOftomorroww)
        //Learn this destructuring only key/value
    3b.
        Destructuring nested key and value.

            const { tomorrow: {minMax : valueVariableIcatch}} = OBJECTwithNestedObjects;

            return valueVariableIcatch;

            // The table
            const LOCAL_FORECAST = {
                today:{ obj1: 10, minMax: 20}
                tomorrow:{ obj1: 10, minMax: 20}
            }
    4. const Communities: React.FC<CommunitiesProps> = () ⇒ //what does this line do?
     https://www.youtube.com/watch?v=rCm5RVYKWVg

    --------------------------------------------------------------------------------------------

### using return to choose which html block to render

    https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25634226?start=0#overview
    You return either (a) let the if statment trigger or the (b) the normal hmtl-section return

(a)
if(props.items.length === 0){  
 return <h2> code...</h2>
}
(b)
return{<ul> code...</ul>}

### Moving the logic outside of the html area

    let expensesContent = <p>No expenses found.</p>;

if (filteredExpenses.length > 0) {
expensesContent = filteredExpenses.map((expense) => (
<ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
));
}

    ### Example for a exercise https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/quiz/5775802#overview

return (

<div>
{isDeleting ? <div id="alert">
<h2>Are you sure?</h2>
<p>These changes can't be reverted!</p>
<button onClick={proceedHandler}>Proceed</button>
</div> : ''}
<button onClick={deleteHandler}>Delete</button>
</div>  
);

### Using && for the filter year and map function

{filteredExpenses.length === 0 && (

<p>No expenses for year {selectedFilter}</p>
)}
{filteredExpenses.length > 0 &&
filteredExpenses.map((expense) => (
<ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
))}

### for and if is not allowed in html area. But ternary works

    also, understand where ( ) are used and {} are used.

{
filteredExpenses.length === 0 ? (

<p>No expenses for year {selectedFilter}</p>
) : (
filteredExpenses.map((expense) => (
<ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
))
)
}

### Filter for the yearSelect component. Notice the return statement, so React runs it, prioritizes it.

    Q. When does this run?

const filteredExpenses = props.expensesArray.filter((item) => {
return item.date.getFullYear().toString() === selectedFilter;
});

### passing through props exercise.

    https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/quiz/5775770#overview    //I had hard time figuring it out. Need practice.

    const Dummytodo = [
    'Learn React',
    'Practice React',
    'Profit!'
    ];

export default function App() {
return (

<ul>
{Dummytodo.map(todo =>
<Todo text={todo}/>
)}
</ul>
);
}

### Quite a mess on keeping track of where props are being channeled.

    I need better variable and property names or a wireframe picture that I can use

### To render things properly, use a function rather than joining new data to existing.(with useState)

    Using set state to simply join new array with existing array will lead to wrong snapshot of the previous array. But by using a function, React will prioritize the order of execution.

### Rendering List of data. "Js array map" -good google key words, to find MDN help

### State-less components vid 60

    FilterYear recieves function that sets UseState in parent component. and the value={variable}(used in the filter dropdown field. Maybe it resets after a render?). So we don't need a useState in FilterYear component.

### sending data through components ie props

    We use useState const [enteredTitle, setEnteredTitle] = useState("");

    From user-form, you recieve the data through "onChange={funcHandler}"

        const funcHandler = (event) => {
            setEnteredTitle(event.target.value);    //data is set in useState
        };

    Also "<form onSubmit={submitHandler}>"      //submit button that stores the data in an object.

        const submitHandler = (event) => {
            event.preventDefault(); //preventing the inbuilt submit function. (I've noticed that it reloads the page when clicked.)
            //Step 1.a      //getting the data
            const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

            input: type, value, onChange(funcInput)

        funcInput=(event)=> setEnteredTitle(event.target.value)

            Getting the event.target.value through the funcInput

    Calling that function in the child comp, and placing the data in it.

        props.onSaveExpenseData(expenseData)

        props.onSaveExpenseData is the function defined in the parent comp. expenseData is the object being passed to it.

### value attribute in the html code.

    It lets you set value. in the form's input field, it's used for emptying the field after the user clicks on "Add Expense".

### From Submit handler

    I need to learn all or most of the functions of html event handlers.

### Exercise: Updating State Based On Older State

    https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/quiz/5775750#overview

        export default function App() {
        const [ev, setCounter] = React.useState(0);

        const eventHandler=()=>{
            setCounter(prevCounter => prevCounter +1);  //<---- Notice this. A function taht returns incremental change.
        }

return (

<div>
<p id="counter">{ev}</p>
<button onClick={eventHandler}>Increment</button>
</div>
);

}

### event.target.value

    https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595998#overview
    The value type you revieve from target.value is always a string. Hence you can have empty string in useState('')
        const dateChangeHandler = (event) => {
            setEnteredDate(event.target.value);
        };

    Instead of string useState and have the events induvidually, you can use a object method and have them all at the same time.
        const [userInput, setUserInput] = useState({})  // having an object instead.
            useState({      //timestamp 3:45
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''
            })

        const titleChangeHandler = (event) => {     // We are storing target.value in enteredTitle and coping
            setUserInput({                          // (with spread ... operator) the stored value over, so we don't
                ...userInput,                       // lose it when saving the object.
                enteredTitle: event.target.value,   //
            });                                     // This method can give false results. The order of can be of code
        }                                           // execusion can be off.

        The right way is to use a function timestamp 3:17 https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25596010#overview

        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value};
        });

### useState

    useState can't be used in nested functions?

        const ExpenseItem = (props) =>{
            useState <--- is ok!

            const clickHandler = () =>{
                title = "Updated!";
                useState <--- is not ok!
            }

            return (
                html-js //syntactic sugar
            )
        }

### dynamic programming?

    You've passed values from an object through props to different components.
    You can store that value in a variable. You can use a function to manupilate that variable. The change will be seen on the web - with useState and useEffect

### default events starts with on.. onClick, onSubmit, onLoad?

    onClick https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
    https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

    ### Note
        You can create a function in the html-property area, inside onClick.
            onClick={() => {code...}} or
        you point to a function
            onClick={aFunction}     // note. You don't call the function {aFunction()}
                                    // () will exicute when the line is read. That's on every render! Instead you point to the function that
                                    will be called when the onClick is triggered.

        Best practice
            Event handler function names end with "Handler"
            const clickHandler = () => {
                code...
            }

### Using arrow functions for components

    #### vid 43 https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595472#overview

    const App = () =>{

    }

### Using components for styling.

    Composition, "children props"
    https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595454#overview

### Vid 34 Adding Basic CSS styling

    https://github.com/academind/react-complete-guide-code/blob/03-react-basics-working-with-components/extra-files/ExpenseItem.css

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
