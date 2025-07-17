import React from 'react'

function Container({children}) {
    // since only one container is used in the app, we can use a simple div. and thus we can remove the need for a container component
    // this is the reason why parenthesis are removed from the return statement
    return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container