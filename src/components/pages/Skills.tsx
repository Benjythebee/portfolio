import { X } from 'lucide-react'
import { Rating, StickerStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from 'react'
export const Skills = ({
  visible,
  onClose
}: {
  visible?: boolean
  onClose: () => void
}) => {
  const [search, setSearch] = useState('')

  const filtered = skills.filter((skill) => {
    // Search using regex
    if (!search) return true
    const regex = new RegExp(search, 'i')
    return (
      skill.title.match(regex) ||
      skill.category.match(regex) ||
      skill.competencyRating.toString().match(regex)
    )
  })

  const dataByCategory = filtered.reduce(
    (acc, skill) => {
      const category = skill.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>
  )

  useEffect(() => {
    if (visible) {
      setSearch('')
    }
  }, [visible])

  return (
    <div
      data-active={visible}
      className="relative hidden h-full select-none flex-col items-center overflow-hidden bg-black text-white transition-all data-[active=true]:flex"
    >
      <div className="flex w-full gap-2 p-4">
        <button
          className=" z-10 rounded bg-black p-2 focus:outline-none focus:ring-2 focus:ring-purple-700"
          onClick={() => onClose()}
          aria-label="Close menu"
        >
          <X className="size-10 text-white" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded bg-gray-800 p-2 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-700"
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          value={search}
        ></input>
      </div>
      <div className="mt-2 w-full overflow-y-scroll pl-6">
        {Object.entries(dataByCategory).map(([category, skills]) => (
          <div
            key={category}
            className="space-y-2 border-b border-gray-700 pb-2 last:border-b-0"
          >
            <h2 className="mb-2 text-lg font-bold text-white">{category}</h2>
            {skills.map((skill) => (
              <div className=" pl-4" key={skill.title}>
                <label>
                  {skill.title}
                  <div className="flex gap-2">
                    <Rating
                      style={{ maxWidth: 150 }}
                      itemStyles={{
                        itemShapes: StickerStar,
                        activeFillColor: '#FFCC00',
                        inactiveFillColor: '#faf2cd'
                      }}
                      value={skill.competencyRating}
                      readOnly
                    />
                  </div>
                </label>
              </div>
            ))}
          </div>
        ))}
        {!!search && !filtered.length && (
          <div className="h-full">
            <img src="/ascii.png" alt="Not found" className="mx-auto" />
            <h2 className="mt-2 text-center font-mono text-lg  text-white">
              Can you teach it to me?
            </h2>
          </div>
        )}
      </div>
    </div>
  )
}

const skills: {
  category: string
  title: string
  likeRating?: number
  competencyRating: number
}[] = [
  {
    category: 'Programming Languages',
    title: 'JavaScript/Typescript',
    likeRating: 3,
    competencyRating: 5
  },
  {
    category: 'Frameworks',
    title: 'React - Next.JS',
    likeRating: 3,
    competencyRating: 5
  },
  {
    category: 'Programming Languages',
    title: 'CSS / Tailwind CSS',
    likeRating: 3,
    competencyRating: 5
  },
  {
    category: 'Frameworks',
    title: 'Node.js',
    likeRating: 3,
    competencyRating: 5
  },
  {
    category: 'Programming Languages',
    title: 'Python',
    likeRating: 3,
    competencyRating: 5
  },
  { category: 'Programming Languages', title: 'Rust', competencyRating: 1 },
  {
    category: 'Programming Languages',
    title: 'PHP',
    likeRating: 1,
    competencyRating: 2
  },
  { category: 'Programming Languages', title: 'Golang', competencyRating: 1 },
  { category: 'Programming Languages', title: 'C++', competencyRating: 1 },
  { category: 'Programming Languages', title: 'Java', competencyRating: 3 },

  {
    category: 'Frameworks',
    title: 'Bun.JS',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: 'Bundler & Tools',
    title: 'Vite',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: 'Bundler & Tools',
    title: 'Webpack',
    competencyRating: 4,
    likeRating: 1
  },
  {
    category: 'Bundler & Tools',
    title: 'Parcel',
    competencyRating: 4,
    likeRating: 2
  },
  {
    category: '3D Graphics',
    title: 'Three.js',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: '3D Graphics',
    title: 'Babylon.js',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: 'AI',
    title: 'AI Prompting',
    competencyRating: 5
  },
  {
    category: 'AI',
    title: 'Self-Hosted Ollama',
    competencyRating: 5
  },
  {
    category: 'Version Control',
    title: 'Git',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: 'Databases',
    title: 'PostgreSQL',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: 'Databases',
    title: 'MongoDB',
    competencyRating: 5,
    likeRating: 2
  },
  {
    category: 'Databases',
    title: 'GraphQL',
    competencyRating: 4
  },
  { category: 'Databases', title: 'Redis', competencyRating: 5, likeRating: 5 },
  {
    category: 'Databases',
    title: 'SQLite',
    competencyRating: 5,
    likeRating: 2
  },
  { category: 'Databases', title: 'MySQL', competencyRating: 5, likeRating: 2 },
  {
    category: 'Monitoring',
    title: 'Prometheus',
    competencyRating: 4
  },
  {
    category: 'Cloud & Hosting',
    title: 'AWS',
    competencyRating: 4,
    likeRating: 1
  },
  {
    category: 'Cloud & Hosting',
    title: 'Vercel',
    competencyRating: 5,
    likeRating: 2
  },
  {
    category: 'Cloud & Hosting',
    title: 'Digital Ocean',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: 'Cloud & Hosting',
    title: 'Heroku',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: 'CI/CD',
    title: 'circleci',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: 'CI/CD',
    title: 'Github Actions',
    competencyRating: 3,
    likeRating: 3
  },
  {
    category: 'Monitoring',
    title: 'Sentry',
    competencyRating: 5,
    likeRating: 1
  },
  {
    category: 'Monitoring',
    title: 'Grafana',
    competencyRating: 4,
    likeRating: 2
  },
  {
    category: 'Blockchain',
    title: 'Solidity',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: 'Blockchain',
    title: 'hardhat',
    competencyRating: 5,
    likeRating: 3
  },
  {
    category: 'Blockchain',
    title: 'ethers.js',
    competencyRating: 5,
    likeRating: 2
  },
  {
    category: 'Blockchain',
    title: 'web3.js',
    competencyRating: 5,
    likeRating: 1
  },
  {
    category: 'Statistics',
    title: 'R',
    competencyRating: 4,
    likeRating: 3
  },
  {
    category: 'Work Management',
    title: 'Asana',
    competencyRating: 5
  },
  {
    category: 'Work Management',
    title: 'Jira',
    competencyRating: 5
  },
  {
    category: 'Design',
    title: 'Figma',
    competencyRating: 3
  },
  {
    category: 'Frameworks',
    title: 'React Native',
    competencyRating: 4
  },
  {
    category: 'Platform',
    title: 'Expo',
    competencyRating: 3
  }
]
