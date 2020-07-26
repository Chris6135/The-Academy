import React, { useEffect, useState }  from "react";
import { useSelector, useDispatch} from "react-redux";
import {fetchAllLessons,fetchCategories} from "../../actions/lessons/lesson_actions"
import {Link} from "react-router-dom"


// import background from "../../../app/assets/images/annie-spratt-yD-raqkqqIw-unsplash.jpg"
//got to set in category lists. This might requite a container since backend requests will need to be made at launch. 

const splash = ()=>{

    const categories = useSelector((state) => state.entities.categories);
    const lessons = (useSelector((state) => state.entities.lessons))

    const dispatch = useDispatch();

    // function fetch(){
    //     console.log("fetching")
    //     console.log(lessons)
    //     console.log(dispatch(fetchCategories))
    //     dispatch(fetchCategories());
    //     console.log(lessons)

    // }
    // fetch()


    // dispatch(fetchAllLessons)

    useEffect(()=>{
        console.log("splash")
        dispatch(fetchCategories())
    }, [])

    function buildCategories() {
        if(categories !== {}){
            return  Object.keys(categories).map((id) =>{
             const link = `/category/${id}`
             const keyN = `nav splash key ${id}`
             let lessArr = [] 

             for(let i=0; i < 5; i++){
                 const cat = categories[id]
                 const lessonId = categories[id].lessonIds[i]
                 lessArr.push(lessons[lessonId])
                }

             function buildLessons(){
                return lessArr.map((less) =>{

                    if(less === undefined){
                        return <h1>something went wrong</h1>
                       }
           
                       const key = `lesson key ${less.id}`
                       const link = `/lesson/show/draft/${less.id}`
                       return ( <div className="lesson-box"
                               key={key}> 
                                   <div className="draft-box" to={link}>
                                       <Link className="user-draft-photo" to={link}></Link>
                                       <div className="user-draft-name">
                                           {less.title} &nbsp;
                                             
                                           <div className="user-draft-subtitle"> by {less.author}</div>
                                       </div>
                                   </div>
           
                        </div>)
                   })
             }

                 return(
                        <ol>
                            <div key={keyN} className ="vlah" >
                            <li>
                                <Link className="link-title" to={link}> {categories[id].title}</Link> 

                                <div className="splashLessons">{buildLessons()} </div>
                            </li>
                            </div>
                        </ol>
                     )
                 })
             }
    }

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


            <div className="proj"> 
                <div className="blurb-title"> EXPLORE PROJECTS</div> 

                {buildCategories()}
            </div>

        </div>)
}

export default splash