import ReactDOM from "react-dom/client";
import Teacher, { CStudent,AIndex } from "./app";  //no .js extension required.
import { Component } from "react";


//Component Here, Student is component
//Below is function based component.

// function Student()
// {
//     return <h2>Hello, I am Student!!</h2>
// }



// const arooot = ReactDOM.createRoot(document.getElementById("root"));

// arooot.render(<Student/>);

// arooot.render(<Teacher/>);


//Class based component

// class AStudent extends Component
// {
//     render()
//     {
//         return(
//         <>
//           <h2>Hello from AStudent Component!!</h2>
//         </>
//         )
//     }
// }


// const broot = ReactDOM.createRoot(document.getElementById("root"));

// broot.render(<AStudent/>);




// class BStudent extends Component
// {
//     render()
//     {
//         return(
//         <>
//           <h2>Hello from BStudent Component!!</h2>
//           <p>I am new here.</p>
//         </>
//         )
//     }
// }


// const croot = ReactDOM.createRoot(document.getElementById("root"));

// croot.render(<BStudent/>);



// const droot = ReactDOM.createRoot(document.getElementById("root"));

// droot.render(<CStudent/>)


class Header extends Component
{
    render()
    {
        return(<>
          <h1>Hello from Header Comp!!</h1>
        </>)
    }
}


class Content extends Component
{
    render()
    {
        return(<>
         <h1>Hello from Body Comp!!</h1>
        </>)
    }
}


class Footer extends Component{
    render()
    {
        return(<>
         
         <h1>Hello From Footer Component!!</h1>
         
        </>)
    }
}


class Index extends Component
{
    render()
    {
        return(<>
          
          <Header/>
          <Content/>
          <Footer/>
        
        </>)
    }
}



// const eroot = ReactDOM.createRoot(document.getElementById("root"));

// eroot.render(<Index/>);


const froot = ReactDOM.createRoot(document.getElementById("root"));

froot.render(<AIndex/>);





