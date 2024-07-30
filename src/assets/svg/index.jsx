const CloseIcon = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
    >
      <path
        d="M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z"
        fill="#000"
      />
    </svg >
  )
}

const MaxIcon = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0H0v9h9V0zM8 2H1v6h7V2z"
        fill="#000"
      />
    </svg>
  )
}

const MinIcon = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
    >
      <path
        fill="#000"
        d="M0 0h6v2H0z"
      />
    </svg>
  )
}

const LikeIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 2H5V4H3V6H1V12H3V14H5V16H7V18H9V20H11V22H13V20H15V18H17V16H19V14H21V12H23V6H21V4H19V2H15V4H13V6H11V4H9V2ZM9 4V6H11V8H13V6H15V4H19V6H21V12H19V14H17V16H15V18H13V20H11V18H9V16H7V14H5V12H3V6H5V4H9Z"
      />
    </svg>
  )
}

export { MaxIcon, CloseIcon, MinIcon, LikeIcon }