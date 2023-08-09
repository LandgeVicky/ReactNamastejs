# ReactNamastejs

-- US-01 branch notes session 01

Session 01 : Inception

-- visual studio code
-- hello world program by using plain HTML
-- hello world program using Vanilla javascript
-- what is CDN
-- hello world program in react
-- nested element
-- need of jsx
-- library v/s framework
-- advantages / specialties of react


 -- what is cdn 
    -- cdn it means that content delivery network
    -- search react cdn
-- why do we use cdn
   --  Web applications use CDNs largely because they offer four important benefits: better performance, increased reliability, 
   cost  savings, and resilience against cyber attacks.

   ex cdn : <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

--What is crossorigin in CDN?
    -- CORS (Cross Origin Resource Sharing) is an HTTP feature that enables a web application running under one domain to access      resources in another domain. In order to reduce the possibility of cross-site scripting attacks, all modern web browsers implement a security restriction known as same-origin policy

------------------------- PART 04 --------------------


React.createElement => it means that it creating an object

ReactElement(Object) => HTML(Browser understands)

-- div(parent) under div(child) then write code easy but another subling then you can write inside [] 
  ex. const parent = React.createElement("div", {id: "parent"},
         React.createElement("div", {id: "child1"},
       [React.createElement("h1",{},"This is an h1 tag"),
       React.createElement("h2",{},"This is an h2 tag"),
      ])
      ); 

------------------------- PART 05 --------------------

-- React is a library of javascript
-- render method is a displaying to a code or rendering to page
