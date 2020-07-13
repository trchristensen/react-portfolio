import React from 'react';

const myStack = () => {
    return (
      <>
        <p className="block w-full mb-8">
          These are my preferred libraries &amp; technologies that I use in my
          projects.
        </p>
        <pre className="bg-dark text-gray-600 p-8 rounded-lg">
          <code>
            <span className="text-gray-400">"react"</span>: "My favorite
            javascript library",
            <br />
            <span className="text-gray-400">"recoil"</span>: "a new state
            management library by facebook, to replace Redux.",
            <br />
            <span className="text-gray-400">"typescript"</span>: "I am just
            starting to learn this language",
            <br />
            <span className="text-gray-400">"aws-amplify"</span>: "Amplify
            includes GraphQl with Apollo",
            <br />
            <span className="text-gray-400">"gatsbyjs"</span>: "A React
            framework that helps in building semantic sites and apps.",
            <br />
            <span className="text-gray-400">"react-hook-forms"</span>: "A
            light-weight form library for React",
            <br />
            <span className="text-gray-400">"tailwind-css"</span>: "A highly
            customizable, low-level, unopinionated CSS framework"
          </code>
        </pre>
      </>
    );
}

export default myStack;