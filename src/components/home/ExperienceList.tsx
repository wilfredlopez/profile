import { FaBriefcase } from 'react-icons/fa'
import {
  List,
  // useMediaQuery ,
  Typography,
} from '@material-ui/core'
import styled from 'styled-components'
import { SECONDARY_COLOR } from '../../theme/getTheme'

const ExpIcon = <FaBriefcase color={SECONDARY_COLOR} />

export const experiencesIcons = [
  {
    Icon: ExpIcon,
    label: 'Web Production QA Analyst',
    location: 'Century 21 Stores',
    isCurrent: false,
  },
  {
    Icon: ExpIcon,
    label: 'Suppor Center Specialist',
    location: 'Century 21 Stores',
    isCurrent: false,
  },
  {
    Icon: ExpIcon,
    label: 'Mission Control Specialist',
    location: 'Teleperformance',
    isCurrent: false,
  },
  {
    Icon: ExpIcon,
    label: 'Customer Service Representative',
    location: 'Teleperformance',
    isCurrent: false,
  },
  {
    Icon: ExpIcon,
    label: 'Call Center QA Analyst',
    location: 'BM Teleservices',
    isCurrent: false,
  },
] as const

const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ExperienceList = () => {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  return (
    <List>
      {experiencesIcons.map(({ Icon, isCurrent, label, location }) => {
        return (
          <li key={label} className='mb-1'>
            {/* <Icon name={exp.icon} /> */}
            <ExperienceSection>
              {Icon}
              <div>
                <Typography
                  variant='h6'
                  component='h3'
                  align="center"
                  style={{
                    color: isCurrent
                      ? 'blue' : 'inherit'
                    // : prefersDarkMode
                    // ? '#c8c8c8'
                    // : '#fcfcfc',
                  }}
                >
                  {label}
                  {isCurrent && '(Actual)'}
                </Typography>
              </div>
              <em>{location}</em>
            </ExperienceSection>
          </li>
        )
      })}
    </List>
  )
}
