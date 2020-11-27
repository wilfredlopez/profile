import React from 'react'

interface Props {
    width?: number
    height?: number | string
}

const Logo = ({ width = 35, height = 'auto' }: Props) => {
    return (
        <svg width={width} viewBox="0 0 68 66" style={{ height }}>
            <g transform="translate(-1087 -234)">
                <circle id="Ellipse_6" data-name="Ellipse 6" cx="19.5" cy="19.5" r="19.5" transform="translate(1116 242)" fill="#ff9b9b" />
                <circle id="Ellipse_3" data-name="Ellipse 3" cx="19.5" cy="19.5" r="19.5" transform="translate(1098 234)" fill="#469fa2" />
                <ellipse id="Ellipse_4" data-name="Ellipse 4" cx="19.5" cy="19" rx="19.5" ry="19" transform="translate(1087 260)" fill="#ff9b9b" opacity="0.49" />
                <ellipse id="Ellipse_5" data-name="Ellipse 5" cx="19.5" cy="19" rx="19.5" ry="19" transform="translate(1110 262)" fill="#469fa2" opacity="0.51" />
            </g>
            <text id="W" transform="matrix(1, 0.017, -0.017, 1, 18.872, 28.632)" fill="#ff9b9b" fontSize="22" fontFamily="Poppins-Black, Poppins" fontWeight="800" letterSpacing="0.316em"><tspan x="0" y="0">W</tspan></text>
            <text id="L" transform="matrix(1, 0.017, -0.017, 1, 37.872, 55.632)" fill="#ff9b9b" fontSize="22" fontFamily="Poppins-Black, Poppins" fontWeight="800" letterSpacing="0.316em"><tspan x="0" y="0">L</tspan></text>
        </svg>

    )
}

export default Logo
