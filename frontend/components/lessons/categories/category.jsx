//you've set up the routes so that ti will be /categoryId/lessons. 
//that index action will make a request and get all the lessons of a given category. 
// now what you need to do is just make a functional component that's prepared to occupy any category. 

//go into each category and add a column with a tagline. stock text "learn to love {tagline}" will populate the banner.
//set a class for each category in scss .show-banner-{category} this will let you dynamically swtich aroudn the banner. 

//next step is to render all of the lessons. This should be easy enough as your call to the backend will grab all relevant data. 

// iterate through them and just grid them on the board. Dont have to worry about seperate content categories for these pages. 

//for styling its just a straight rip of the splash. 


import React from 'react';
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom"


 class CategoryPage extends React.Component{
    constructor(props){
        super(props)
    }

    
    componentDidMount(){
        // console.log("mount")
        // console.log(this.props)
       this.props.fetchCategoryLessons(this.props.category.id)
    }



    listLessons(){ 
        
        return this.props.lessons.map((lesson) =>{

         if(lesson === undefined){
             console.log("error")

             console.log(this.props)
             return <h1>something went wrong</h1>
            }

            const key = `lesson key ${lesson.id}`
            const link = `/lesson/show/draft/${lesson.id}`
            return ( <div className="lesson-box"
                    key={key}> 
                        <Link className="draft-box" to={link}>
                            <div className="user-draft-photo"></div>
                            <div className="user-draft-name">
                                {lesson.title}
                            </div>
                        </Link>

             </div>)
        })
    }


    render (){
        if(!this.props.lessons[0]){
            <p>loading</p>
        }
        console.log("render")
        console.log(this.props)

        let bannerClass =`splash-banner-${this.props.category.title}`

        return(
            <div className="splash-container">
                <section className ={bannerClass}> 

                    <div className="splash-banner-content">
                    <h2 className="splash-banner-title">Learn to love {this.props.category.title}</h2>
                    <div className="splash-banner-text"> 
                        <p>Here at the Academy, school is always in session!</p>
                        <p> Pick any lesson that interests you and lets get started.  </p>     
                    </div>
                    </div>
            </section>
                 <div className="category-lessons-container"> 

                    <div className="category-lessons-box"> 
                        {this.listLessons()}
                    </div>
                </div>
           </div>
        )
    }
    

}

export default CategoryPage

