import React from 'react'

class LessonDraftShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props)
        console.log(this.props.match.params.lessonId)
        this.props.requestLesson(this.props.match.params.lessonId)
        console.log(this.props.requestLesson)

        // console.log(this.props.requestLesson)
        // const url = window.location.href
        // const urlArr = url.split('')
        // console.log(urlArr[urlArr.length-1])
        // this.props.requestLesson(urlArr[urlArr.length-1])
    }


     renderSteps(){
           if(this.props.steps === undefined){
            return null
        }else if(this.props.steps[0] === undefined){
            return null
        }
        return this.props.steps.map((step) =>{
            const stepNum = this.props.steps.indexOf(step) + 1
            const key = `${this.props.lesson.title}-step-${stepNum}`
            let titleDef = ""
            if(step.title){
                titleDef = step.title
            }
               return (
                    <div key={key} className="step-container">
                        <div className="step-title"> Step {stepNum}: {titleDef} </div>
                        <div className="photo-box"> picture here</div>
                        <div className="step-body"> {step.body} </div>
                        <div className="step-border"> </div>
                    </div>
                  )
            }
        )
    }

    parseDate(d){


        let  month = d.getMonth();
        let day= d.getDate();
        let year = d.getFullYear();
        let suff = "th"
        const monthList = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
        switch (day  % 10) {
            case 1:   suff= "st";
            case 2:   suff= "nd";
            case 3:   suff= "rd";
            default:  suff= "th";
        }

         return (this.props.lesson.published ? "Published " + monthList[month] + " " + day + suff + ", " + year : null)
    }

    render(){
       
        if(this.props.lesson === undefined){
            return null
        }else if(this.props.author === undefined){
            return null
        } 

        let pubDate= new Date(this.props.lesson.updated_at);
        let parsedDate = this.parseDate(pubDate)

        return(
            <div className="parent-box">
                <div className="lesson-container">

                    <div className="lesson-header">
                        <div className="lesson-title">
                            {this.props.lesson.title}
                        </div>
                        <div className="lesson-info">
                            <div className="authorInfo">By {this.props.author.username}</div>
                        </div>
                    </div>
                    <div className="lesson-timestamp">
                           {parsedDate}
                        </div>

                {this.renderSteps()}
                </div>
            </div>
        )
    }

    
}

export default LessonDraftShow