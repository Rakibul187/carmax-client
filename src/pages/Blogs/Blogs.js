import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className=' max-w-[1200px] mx-auto'>
                <h1 className='text-2xl mx-12 mt-12 mb-6 font-bold text-primary'>You May Know More About</h1>
                <div className='mx-12 mb-12 gap-5'>
                    <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                        <h3 className='text-xl font-bold my-2'>What are the different ways to manage a state in a React application?</h3>
                        <p>The Four Kinds of React State to Manage are Local Global state, Server state, URL state.Local state is most often managed in React using the useState hook.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.Data that exists on our URLs, including the pathname and query parameters.</p>
                    </div>
                    <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                        <h3 className='text-xl font-bold my-2'> How does prototypical inheritance work?</h3>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                    <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                        <h3 className='text-xl font-bold my-2'>What is a unit test? Why should we write unit tests?</h3>
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                    <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                        <h3 className='text-xl font-bold my-2'>React vs. Angular vs. Vue?</h3>
                        <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;