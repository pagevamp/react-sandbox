interface TitleInterface {
  className?: string
  content: string
}

const Titles = ({ content, className }: TitleInterface) => {
  return <p className={className}>{content}</p>
}

export default Titles
