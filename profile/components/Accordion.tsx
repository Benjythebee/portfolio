import { useState, useRef, useEffect } from 'react'

// Types
type AccordionItemProps = {
  title: string
  children: React.ReactNode
  iconSrc: string | (() => JSX.Element)
  isOpen: boolean
  onToggle: () => void
  animateHeight?: boolean
}

type AccordionProps = {
  items: {
    id: string
    iconSrc: string | (() => JSX.Element)
    title: string
    content: React.ReactNode
  }[]
}

// AccordionItem Component
export const AccordionItem = ({
  title,
  children,
  iconSrc: IconSrc,
  isOpen,
  onToggle,
  animateHeight = true
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | undefined>(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        className="group flex w-full gap-2 py-3 pl-4 transition-all duration-300 hover:border-l-4 hover:border-purple-700 hover:bg-gray-600 "
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="mx-auto size-8 overflow-hidden rounded-full backdrop-blur-md">
          {IconSrc && typeof IconSrc === 'string' ? (
            <img
              src={IconSrc}
              className=" size-full object-cover grayscale group-hover:grayscale-0"
            />
          ) : (
            <IconSrc />
          )}
        </div>
        <div className="flex w-full items-center justify-between">
          <span>{title}</span>
          {!isOpen ? <UpArrow /> : <DownArrow />}
        </div>
      </button>
      <div
        style={{ height: animateHeight ? height : isOpen ? 'auto' : 0 }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div
          ref={contentRef}
          className="border-l-2 border-purple-700/80 p-4 text-gray-300"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

// Main Accordion Component
export const Accordion = ({ items }: AccordionProps) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null)

  const handleToggle = (itemId: string) => {
    console.log('itemId', itemId)
    setOpenItemId((prevId) => (prevId === itemId ? null : itemId))
  }

  return (
    <div className="w-full overflow-hidden shadow-lg">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          iconSrc={item.iconSrc}
          title={item.title}
          isOpen={openItemId === item.id}
          onToggle={() => handleToggle(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export const DownArrow = () => {
  return (
    <svg
      className={`mr-4 size-6 rotate-180 transition-transform duration-300`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )
}

export const UpArrow = () => {
  return (
    <svg
      className={`mr-4 size-6 rotate-0 transition-transform duration-300`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )
}
