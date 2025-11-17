interface TitleInterface {
  className?: string
  content: string | number
}

const Titles = ({ content, className }: TitleInterface) => {
  return <p className={className}>{content}</p>
}

export default Titles
