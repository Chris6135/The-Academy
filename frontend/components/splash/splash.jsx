import React from "react";

const splash = ()=>{
    return (
        <div className="splash-container">
             <section className ="splash-banner">
                 <div className="splash-banner-content">
                    <h2 className="splash-banner-title">Learn to love learning</h2>
                    <div className="splash-banner-text"> 
                        <p>The Academy is dedicated to teaching you new skills.</p>
                        <p> Pick a lesson and grow your talent, one step at a time!  </p>     
                    </div>
                 </div>
            </section>

            <section className ="blurb" > 
                <ol>
                    <li>
                        <div className="blurb-title">
                            A Natural Experience
                        </div>
                        <p className="blurb-content">
                            With years of formal education, its easy to forget the simpliest and most human way to learn,
                            Immitation. Get hands on and tap into that part of every person that wants to learn, not by listening,
                            but by doing!
                        </p>
                    </li>

                    <li>
                        <div className="blurb-title">
                            One Step at a Time
                        </div>
                        <p className="blurb-content">
                            The jounrney of a thousand miles begins with a single step. Even our most complicated lessons are 
                            broken down into a step by step format. Take your time, review your lesson plan, and just keep one foot infront of the other. 
                        </p>
                    </li>

                    <li>
                        <div className="blurb-title">
                            No Grades
                        </div>
                        <p className="blurb-content">
                            At The Academy we believe learning is it's own goal. That means that there are no grades, judgments, or compitition. 
                            Complete your lessons and build at your own rate by your own motivations. The only person who can judge your progress is you.
                            Have confidence, have faith, have fun!
                        </p>
                    </li>
                </ol>
            </section>

            <div className="splash-line"></div>

        </div>)
}

export default splash