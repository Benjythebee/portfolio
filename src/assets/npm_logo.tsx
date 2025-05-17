import React, { RefAttributes } from 'react'

type NPMLogoProps = RefAttributes<SVGSVGElement> & {
  className?: string
}

export const NPMLogo = React.forwardRef(({ className, ref }: NPMLogoProps) => {
  return (
    <svg
      ref={ref}
      stroke="currentColor"
      fill="currentColor"
      className={className}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="surface1">
        <path d="M 24.785156 0 L 0 0 L 0 50 L 24.78125 50 L 24.78125 12.609375 L 37.390625 12.609375 L 37.390625 50 L 50 50 L 50 0 Z M 24.785156 0 " />
      </g>
    </svg>
  )
})
NPMLogo.displayName = 'NPMLogo'
