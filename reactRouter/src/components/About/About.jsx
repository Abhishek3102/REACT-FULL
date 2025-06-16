import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2tBWzcqVqceP3WC-rC5RyeeG-JvdluJYxQ&s"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        At our core, we're all about making things easier, smarter, and more enjoyable. We believe in creating solutions that bring real value to your day-to-day life, whether it’s through seamless technology or thoughtful design. What drives us? Passion, innovation, and the belief that small changes can lead to big results.
                        </p>
                        <p className="mt-4 text-gray-600">
                            We're a team of dreamers, creators, and problem-solvers, dedicated to building products that help you do more with less effort. Our mission? To empower you to achieve your goals while making the journey as enjoyable as the destination.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}