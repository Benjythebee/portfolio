import {
  ArrowUpRightIcon,
  BriefcaseBusinessIcon,
  Star,
  University,
  X
} from 'lucide-react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export const Timeline = ({
  visible,
  onClose
}: {
  visible?: boolean
  onClose: () => void
}) => {
  const getIcon = (icon: 'work' | 'education' | 'bonus') => {
    return icon == 'work' ? (
      <BriefcaseBusinessIcon className="size-6" />
    ) : icon == 'education' ? (
      <University className="size-6" />
    ) : (
      <Star className="size-6" />
    )
  }

  const getFontColor = (icon: 'work' | 'education' | 'bonus') => {
    return icon == 'bonus' ? '#000' : '#011C27'
  }

  const getCardColor = (icon: 'work' | 'education' | 'bonus') => {
    return icon == 'work'
      ? '#FECEE9'
      : icon == 'education'
        ? '#EB9FEF'
        : '#545677'
  }

  return (
    <div
      data-active={visible}
      className="relative hidden h-full select-none flex-col items-center overflow-hidden bg-black text-white transition-all data-[active=true]:flex"
    >
      <div>
        <button
          className="absolute left-2 top-2 z-10 rounded bg-black p-2 focus:outline-none focus:ring-2 focus:ring-purple-700"
          onClick={() => onClose()}
          aria-label="Close menu"
        >
          <X className="size-10 text-white" />
        </button>
      </div>
      <div className="mt-10 w-full overflow-y-scroll">
        <VerticalTimeline layout="1-column-left" className="w-[90%] text-sm">
          {elements.map((element) => (
            <VerticalTimelineElement
              key={element.title}
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className={`vertical-timeline-element--education`}
              contentStyle={{
                background: getCardColor(element.icon),
                color: getFontColor(element.icon)
              }}
              date={element.date}
              dateClassName="mix-blend-plus-darker"
              contentArrowStyle={{
                borderRight: `7px solid ${getCardColor(element.icon)}`
              }}
              iconStyle={{
                color: getFontColor(element.icon),
                background: getCardColor(element.icon)
              }}
              icon={getIcon(element.icon)}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {element.subtitle}
              </h4>
              <p>
                {element.content}{' '}
                {element.link ? (
                  <button
                    onClick={() => {
                      window.open(element.link, '_blank')
                    }}
                    // eslint-disable-next-line tailwindcss/classnames-order, tailwindcss/no-custom-classname
                    className={` rounded-lg border-2 border-solid border-black px-2 py-1 text-sm hover:bg-[#f3b7d9]`}
                  >
                    Cyberbrokers.com{' '}
                    <ArrowUpRightIcon className="inline size-4" />
                  </button>
                ) : (
                  ''
                )}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

//@ts-expect-error dwdw
const elements: {
  title: string
  link?: string
  subtitle: string
  date: string
  content: string
  icon: 'work' | 'education' | 'bonus'
}[] = [
  {
    title: 'Bachelor in Economics',
    subtitle: 'University of Otago',
    date: '2013 - 2016',
    content:
      'Bachelor of Economics with a focus on Econommics, including Econometrics and Statistics. ',
    icon: 'education'
  },
  {
    title: 'CFA level 1',
    subtitle: '',
    date: '2017',
    content: 'Passed the Chartered Financial Analysis level 1.',
    icon: 'bonus'
  },
  {
    title: 'Master in Finance',
    subtitle: 'University of Massey, Auckland',
    date: '2018 - 2020',
    content:
      'Master in Finance with Excellence. Thesis: Prospect theory and stock returns',
    icon: 'education'
  },
  {
    title: 'Product Owner + F.S. Developer',
    subtitle: 'Voxels.com (Startup)',
    date: '2020 - 2022',
    content:
      'Backend, Front-end and Game development. Team management and project management.',
    icon: 'work'
  },
  {
    title: 'Senior Full Stack Developer',
    subtitle: 'Cyberbrokers.com',
    link: 'https://www.cyberbrokers.com/',
    date: '2022 - Present',
    content:
      'Backend, Front-end and Project Ownership. Hand-built systems to create 3d assets in a backend.',
    icon: 'work'
  }
].reverse()
