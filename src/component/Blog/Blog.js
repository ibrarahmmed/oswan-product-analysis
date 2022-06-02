import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='main-container'>
            <div className="contextApi-container">
                <h2>What is Context Api?</h2>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. It comes in the form of passing data from a parent to a child component or even child to parent components. This leads to components having data they don’t actually need, but they need to pass on down the tree.</p>

            </div>
            <div className="semanticTag-container">
                <h2>What is Semantics Tag in HTML?</h2>
                <p>The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content.The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.The pages made with semantic elements are much easier to read.It has greater accessibility. It offers a better user experience. Semantic HTML tags let you serve structured content to your users, which is especially important for on-page SEO and accessibility.</p>

            </div>
            <div className="inlineBlock-container">

                <h2>What is Inline,Block,Inline-Block Element?</h2>
                <h4>Inline:</h4>
                <p>Displays an element as an inline element. Any height and width properties will have no effect.The display property specifics the display behavior of an element. It’s a must know for controlling the layout of an element. There’s a bunch of property values. But let’s start off with the essential inline.This one displays the element inline or on the same line. In other words, inline elements do NOT start on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have NO effects.</p>

                <h4>Inline-Block:</h4>
                <p>Displays an element as an inline-level block container. You CAN set height and width values.you can set height and width values.</p>

                <h4>Block:</h4>
                <p>block The element will start on a new line and occupy the full width available. And you can set width and height values.</p>

            

            </div>
        </div>
    );
};

export default Blog;