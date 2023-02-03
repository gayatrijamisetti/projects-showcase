import {ProjectCardLists, Image, Name} from './styledComponents'

const ProjectCard = props => {
  const {projectDetails} = props
  const {name, imageUrl} = projectDetails

  return (
    <ProjectCardLists>
      <Image src={imageUrl} alt={name} />
      <Name>{name}</Name>
    </ProjectCardLists>
  )
}

export default ProjectCard
