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
        console.log(this.props)
        // this.props.fetchCategories() //hilariously this solution was right, just in the wrong place. 
    }


    // Ok it took some serious debugging time, but I think I figured this out. 
    // the problem ISNT that the cateogry page isn't grabbing the right lessons and putting them in its props. it is.
    //the problem is that hte category slice of state isn't updating with the newly created lesson until there is a refresh.
    //I need to update hte category.category id's imidiately when a new lesson is uploaded, that will solve this. 
    componentDidMount(){
       const url = window.location.href
       const urlArr = url.split('')
       window.scrollTo(0, 0)
       console.log("test1")
       this.props.fetchCategories()

        //    this.props.fetchCategoryLessons(urlArr[urlArr.length-1])
        // console.log("LOOOK HERE")
       
    }

    componentDidUpdate(){
        window.scrollTo(0, 0)
    }




    listLessons(){ 
        
        return this.props.lessons.map((lesson) =>{

         if(lesson === undefined){

             return <h1>something went wrong</h1>
            }

            const key = `lesson key ${lesson.id}`
            const link = `/lesson/show/draft/${lesson.id}`
            return ( 
            
            <div className="lesson-box"
                    key={key}> 
                            <div className="draft-box" to={link}>
                                       <Link className="user-draft-photo" to={link}></Link>
                                       <div className="user-draft-namebox">
                                        <Link className="user-draft-name" to={link}>
                                             {lesson.title}
                                             </Link>
                                        <div> &nbsp; by &nbsp;</div>
                                        <div className="user-draft-subtitle">{lesson.author}</div>
                                        </div>
                                   </div>

             </div>
             
             )
        })
    }


    render (){

        if(this.props.lessons[0] === undefined){
            return null
        }

        if(!this.props.lessons[0]){
            <p>loading</p>

        }
        

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

