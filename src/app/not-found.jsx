import React from 'react'

const NotFound = () => {
    return (
        <div className="flex h-screen flex-col bg-white">
            <img
                src="https://images.unsplash.com/photo-1542897643-8158da5b4607?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
                alt=""
                className="h-auto w-full "
            />

            <div className="flex flex-1 items-center justify-center">
                <div className="mx-auto max-w-xl px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We can't find that page.
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Try searching again, or return home to start from the beginning.
                    </p>

                    <a
                        href="#"
                        className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                    >
                        Go Back Home
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NotFound
