import React from 'react';

const myStack = () => {
    return (
      <>
        <p className="block w-full mb-8">
          These are my preferred libraries &amp; technologies that I use in my
          projects.
        </p>
        <pre className="whitespace-normal bg-dark text-gray-600 shadow-xl p-8 rounded-lg overflow-x-scroll">
          <code>
            <span className="text-quartary">"react"</span>: "My favorite
            javascript library",
            <br />
            <span className="text-quartary">"recoil"</span>: "a new state
            management library by facebook, to replace Redux.",
            <br />
            <span className="text-quartary">"typescript"</span>: "I am just
            starting to learn this language",
            <br />
            <span className="text-quartary">"aws-amplify"</span>: "Amplify
            includes GraphQl with Apollo",
            <br />
            <span className="text-quartary">"gatsbyjs"</span>: "A React
            framework that helps in building semantic sites and apps.",
            <br />
            <span className="text-quartary">"react-hook-forms"</span>: "A
            light-weight form library for React",
            <br />
            <span className="text-quartary">"tailwind-css"</span>: "A highly
            customizable, low-level, unopinionated CSS framework"
          </code>
        </pre>
      </>
    );
}

export default myStack;