import { memo } from "react"
import { NonActiveLink } from "@components/shared"
import { ListItem } from "@material-ui/core"
import ProjectsArray from "@components/projects/ProjectsArray"

const list: PLinkProps[] = ProjectsArray.map((p) => ({
  href: p.url,
  displayText: p.name,
}))


const ProjectLinks = () => {
  return (
    <div>
      {list.map((p) =>
        <ProjectLink
          key={p.displayText}
          displayText={p.displayText}
          href={p.href}
        />
      )}
    </div>
  )
}

interface PLinkProps {
  href: string
  displayText: string
}

const ProjectLink = ({ displayText, href }: PLinkProps) => {
  return <ListItem>
    <NonActiveLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={displayText}
    >
      {displayText}
    </NonActiveLink>
  </ListItem>
}

export default memo(ProjectLinks, () => false)
