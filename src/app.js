
// console.log("namaste react js")


// const a = prompt("please enter number");
// console.log("you entered :",a);

{/* <div id="parent">
    <div id="child1">
        <h1>This is an h1 tag</h1>
        <h2>This is an h2 tag</h2>
    </div>
    <div id="child2">
        <h1>This is an h1 tag</h1>
        <h2>This is an h2 tag</h2>
    </div>

</div> */}

// const parent =React.createElement(
//     "div", {id: "parent"}, 
//     React.createElement("div", {id: "child"},
//     React.createElement("h1",{}, "This is sn h1 tag"))
// );



const parent = React.createElement("div", {id: "parent"},
       [  React.createElement("div", {id: "child1"},
       [React.createElement("h1",{},"This is an h1 tag"),
       React.createElement("h2",{},"This is an h2 tag"),
      ]),
      React.createElement("div", {id: "child2"},
         [React.createElement("h1",{},"This is an h1 tag"),
         React.createElement("h2",{},"This is an h2 tag"),
        ])] 
 );

    
    
    const reading = React.createElement('h1', { id:"heading"}, "Hello world from react js");

    const root = ReactDOM.createRoot(document.getElementById('root'));

    // root.render(reading);
    root.render(parent);
    //console.log(reading);

root.render(reading);






















































