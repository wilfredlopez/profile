
interface Props {
  sizeInPx?: string
}

const TypescriptIcon = ({ sizeInPx = "48px" }: Props) => {
  return (
    <svg
      fill="#1976d2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={sizeInPx}
      height={sizeInPx}
    >
      <path
        d="M3,3v18h18V3H3z M13.666,12.451h-2.118V19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751	c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853c0-1.089-3.251-1.089-3.251-3.501c0-3.281,4.737-1.986,4.737-1.986	l-0.059,1.559c0,0-0.794-0.53-1.692-0.53c-0.897,0-1.221,0.427-1.221,0.883c0,1.177,3.281,1.059,3.281,3.428	C19,20.244,13.998,18.626,13.998,18.626z"
      />
    </svg>
  )
}

export default TypescriptIcon
