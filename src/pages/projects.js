import React from 'react'
import Mchart from '../components/mchart'
import mstyles from '../layouts/msite.module.css'

const ProjectsPage = () => (
  <div className={mstyles.nobordcontent}>
    <h2>Projects</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      adipisci, voluptatum, nisi velit praesentium error quia explicabo voluptas
      ad recusandae enim. Recusandae sequi non vel voluptas. Labore omnis
      provident ex, perferendis esse, voluptate atque alias officiis dolor
      eligendi itaque qui?
    </p>

    <Mchart />
  </div>
)

export default ProjectsPage
