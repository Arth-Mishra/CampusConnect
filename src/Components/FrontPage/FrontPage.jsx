import React from 'react'
import "./FrontPage.css"
import { useNavigate } from 'react-router-dom'


const FrontPage = () => {
    const navigate = useNavigate();
    const fun = () => {
        navigate("/login")


    }


    return (

        <div>

            <div className='container_1'>

                <img className='bg_img' src='NEUMORPHIC_CIRCLES_BACKGROUND.jpg' />
                {/* <div className='Heading_box '>
                    <h1 className='titlee ' >Welcome to</h1>
                    <h1 className='titlee '>Campus Connect</h1>

                </div> */}


                <div className='Heading_box text-center'>
                    <h1 className='titlee text-8xl font-extrabold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text animate-anima'>
                        Welcome to
                    </h1>
                    <h1 className='titlee text-8xl font-extrabold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text animate-anima'>
                        Campus Connect
                    </h1>
                </div>

                <div className='Sub_Heading_1'>
                   <p className="border-b">~It is a Platform which fulfills the gap between Juniors and Seniors~</p>


                </div>
                <div className='Sub_Heading_2'>
                    <p>-Are you lagging in Cracking the Placements</p>
                    <p>-Having fear to ask questions to others</p>
                    <p>-Tensed about the Jobs and intenships</p>
                    <p>-Want to help your Co-mates or Juniors</p>
                    <p style={{ color: "black" }}><b>THEN YOU ARE AT RIGHT PLACE </b><span className='connect'><b>#CAMPUS CONNECT</b></span> <i className="fas fa-link" style={{ color: "black" }} /> </p>

                </div>
            </div>

            <div className='container_2'>
                <img className='bg_img_2' src='image.jpg' />

                <div>
                    <h2 className='sub_heading_3'>ABOUT CAMPUS CONNECT ~</h2>
                </div>

                <div className='sub_heading_4'>
                    <p className='text-xl'>This online platform will provide the career giudance to the unplaced students and aslo the opportunity to get to know about the seniors experience who cracked  the placements.In the way the juniors or unplaced  studentscan polish their skills and prepare themselves for the upcoming placements. This website  also provides the study materials which will help the you to crack the placements.If you have any doubts or questions now you can easily ask in Q&A section,empowering students to pose questions related to academics,career development and various subjects.</p>
                </div>
                <div onClick={fun} className='btn'>
                    GET STARTED
                </div>

            </div>



        </div>

    )
}

export default FrontPage