import React from 'react'
import {
  Github,
  Twitter,
  Linkedin,
  Sparkles,
  X,
  Link,
  Briefcase,
  RulerDimensionLine,
  CakeSliceIcon,
  GithubIcon,
  ArrowUpRightIcon,
  Mail
} from 'lucide-react'
import { Accordion } from './Accordion'
import { Timeline } from './pages/Timeline'
import { NPMLogo } from '../assets/npm_logo'
import { Skills } from './pages/Skills'
import { useSearchParams } from '../utils/useSearchParams'

const Sidebar = () => {
  const [showing, setShowing] = React.useState(false)
  const searchparams = useSearchParams()
  const [tab, setTab] = React.useState<'timeline' | 'skills' | null>(null)

  React.useEffect(() => {
    const initialTab = searchparams.t || searchparams.tab || null
    if (initialTab === 'timeline' || initialTab === 'skills') {
      setTab(initialTab)
    }
  }, [searchparams])

  return (
    <>
      <div
        className="absolute right-5 top-5 z-[1] flex md:pointer-events-none md:hidden"
        onClick={() => setShowing(true)}
      >
        <button
          className="rounded bg-black p-2 focus:outline-none focus:ring-2 focus:ring-purple-700 md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="size-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        data-active={tab != null}
        className="group/pages absolute left-0 top-0 z-[2] h-screen w-0 transition-all duration-300 data-[active=true]:w-full data-[active=true]:md:w-1/4 data-[active=true]:md:min-w-[350px]"
      >
        <Timeline visible={tab == 'timeline'} onClose={() => setTab(null)} />
        <Skills visible={tab == 'skills'} onClose={() => setTab(null)} />
      </div>
      <div
        data-active={showing}
        className="group/container absolute right-0 top-0 z-[1] h-screen w-0 transition-all duration-300 data-[active=true]:w-full md:w-1/4 md:min-w-[300px]"
      >
        <div className="relative flex h-full flex-col items-center overflow-hidden bg-black py-6 text-white ">
          <div>
            {showing && (
              <button
                className="absolute left-2 top-2 z-10 rounded bg-black p-2 focus:outline-none focus:ring-2 focus:ring-purple-700"
                onClick={() => setShowing(false)}
                aria-label="Close menu"
              >
                <X className="size-10 text-white" />
              </button>
            )}
          </div>
          {/* Profile Image */}
          <div className="mb-2 size-24 overflow-hidden rounded-full bg-white backdrop-blur-xl">
            <img
              src="/benj.jpg"
              alt="Profile"
              className="size-full object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="mb-1 text-xl font-bold">Benjy L.</h1>
          <h2 className="mb-5 text-xs">F.S Senior Software Engineer</h2>
          {/* Social Icons */}
          <Socials />
          <div className="flex w-full flex-col space-y-2 px-6">
            <div className="border-b border-gray-700 last:border-b-0">
              <button
                className="group flex w-full gap-2 py-3 pl-4 transition-all duration-300 hover:border-l-4 hover:border-purple-700 hover:bg-gray-600 "
                onClick={() =>
                  tab == 'timeline' ? setTab(null) : setTab('timeline')
                }
              >
                <div className="size-8 rounded-full backdrop-blur-md group-hover:text-yellow-300">
                  <Briefcase className="size-8" />
                </div>
                <div className="flex w-full items-center justify-between">
                  <span>Timeline</span>
                </div>
              </button>
            </div>
            <div className="border-b border-gray-700 last:border-b-0">
              <button
                className="group flex w-full gap-2 py-3 pl-4 transition-all duration-300 hover:border-l-4 hover:border-purple-700 hover:bg-gray-600 "
                onClick={() =>
                  tab == 'skills' ? setTab(null) : setTab('skills')
                }
              >
                <div className="size-8 rounded-full backdrop-blur-md group-hover:text-yellow-300">
                  <RulerDimensionLine className="size-8" />
                </div>
                <div className="flex w-full items-center justify-between">
                  <span>Skills</span>
                </div>
              </button>
            </div>

            <Accordion
              items={[
                {
                  title: 'What I am currently working on',
                  iconSrc: () => <CakeSliceIcon />,
                  content: (
                    <>
                      <div className="flex flex-col gap-1 space-y-2">
                        <h1 className="text-lg font-bold">TPLDrifters</h1>
                        <span>
                          End-to-end 3D avatar creator with Blender-powered
                          backend
                        </span>
                        <button
                          className="flex w-full justify-center gap-2 rounded-md bg-blue-950/70 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-950/90"
                          onClick={() => {
                            window.open('https://tpldrifters.com', '_blank')
                          }}
                        >
                          <ArrowUpRightIcon className="size-5" />{' '}
                          tpldrifters.com
                        </button>
                      </div>
                      <div className="mt-2 flex flex-col gap-1 space-y-2">
                        <h1 className="text-lg font-bold">Skybuds</h1>
                        <span>
                          A personal project integrating ThreeJS, NFTs and
                          serverless functions
                        </span>
                        <button
                          className="flex w-full justify-center gap-2 rounded-md bg-blue-950/70 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-950/90"
                          onClick={() => {
                            window.open(
                              'https://github.com/Benjythebee/skybuds',
                              '_blank'
                            )
                          }}
                        >
                          <GithubIcon className="size-5" /> View Repo
                        </button>
                      </div>
                      <div className="mt-2 flex flex-col gap-1 space-y-2">
                        <h1 className="text-lg font-bold">RendrGen</h1>
                        <span>
                          A service that offers renders of Digital assets at an
                          affordable price.
                        </span>
                        <button
                          className="flex w-full justify-center gap-2 rounded-md bg-blue-950/70 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-950/90"
                          disabled={false}
                          onClick={() => {
                            window.open('https://rendrgen.com/', '_blank')
                          }}
                        >
                          <ArrowUpRightIcon className="size-5" /> RendrGen.com
                        </button>
                      </div>
                      <div className="mt-2 flex flex-col gap-1 space-y-2">
                        <h1 className="text-lg font-bold">TongueUp</h1>
                        <span>
                          A small helpful mobile app for people in need of a
                          reminder to put their tongue up on the roof of their
                          mouth.
                        </span>
                        <button
                          className="flex w-full justify-center gap-2 rounded-md bg-blue-950/70 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-950/90"
                          disabled={false}
                          onClick={() => {
                            window.open(
                              'https://tongueup.benjylarcher.com/',
                              '_blank'
                            )
                          }}
                        >
                          <ArrowUpRightIcon className="size-5" /> Checkout App
                        </button>
                      </div>
                    </>
                  ),
                  id: 'skybuds'
                }
              ]}
            ></Accordion>
          </div>

          {/* Menu Buttons */}
          <div className="flex w-full flex-col space-y-4 px-6">
            <h1 className="mt-6 flex gap-2 space-y-2 border-b-2 px-2 text-center text-lg">
              <Link className="size-5" /> Links
            </h1>
            <Accordion
              items={[
                {
                  title: 'SkyBuds',
                  iconSrc: './skybuds_ico.jpg',
                  content: (
                    <div className="flex flex-col gap-1 space-y-2">
                      <span>
                        A personal project integrating ThreeJS, NFTs and
                        serverless functions
                      </span>
                      <button
                        className="w-full rounded-md bg-blue-950/70 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-950/90"
                        onClick={() => {
                          window.open(
                            'https://skybuds.benjylarcher.com',
                            '_blank'
                          )
                        }}
                      >
                        Check Out
                      </button>
                    </div>
                  ),
                  id: 'skybuds'
                },
                {
                  title: 'RendrGen',
                  iconSrc: './rendrgen_124.png',
                  content: (
                    <div className="flex flex-col gap-1 space-y-2">
                      <span>
                        An affordable service that offers renders of digital
                        assets. Perfect for portfolios, listings and more.
                      </span>
                      <button
                        className="w-full rounded-md bg-blue-950/70 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-950/90"
                        onClick={() => {
                          window.open('https://rendrgen.com/', '_blank')
                        }}
                      >
                        Check Out
                      </button>
                    </div>
                  ),
                  id: 'RendrGen'
                },
                {
                  title: 'Ask ChatGPT about me',
                  iconSrc: () => <Sparkles />,
                  content: (
                    <div className="flex flex-col gap-1 space-y-2">
                      Figure out what OpenAI&apos;s ChatGPT can find about me
                      <button
                        className="w-full rounded-md bg-blue-950/70 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-950/90"
                        onClick={() => {
                          window.open(
                            'https://chatgpt.com/share/680056be-83e0-800f-a091-f04679a6759c',
                            '_blank'
                          )
                        }}
                      >
                        Check Out
                      </button>
                    </div>
                  ),
                  id: 'gpt'
                }
              ]}
            ></Accordion>
          </div>

          {/* Bottom Element */}
          <div className="mb-6 mt-auto text-sm text-gray-400 transition-colors duration-300 hover:text-white">
            ©
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

const Socials = () => {
  return (
    <div className="mb-10 flex justify-center space-x-3">
      <a
        href="https://x.com/benjythebee"
        target="_blank"
        className="flex size-8 items-center justify-center rounded-full border-2 border-gray-700 transition-colors duration-300 hover:bg-gray-700"
        rel="noreferrer"
      >
        <Twitter size={16} />
      </a>
      <a
        href="https://github.com/Benjythebee"
        target="_blank"
        rel="noreferrer"
        className="flex size-8 items-center justify-center rounded-full border-2 border-gray-700 transition-colors duration-300 hover:bg-gray-700"
      >
        <Github size={16} />
      </a>
      <a
        href="https://www.linkedin.com/in/benjaminmclarcher/"
        target="_blank"
        className="flex size-8 items-center justify-center rounded-full border-2 border-gray-700 transition-colors duration-300 hover:bg-gray-700"
        rel="noreferrer"
      >
        <Linkedin size={16} />
      </a>
      <a
        href="https://www.npmjs.com/~fayelure"
        target="_blank"
        className="flex size-8 items-center justify-center rounded-full border-2 border-gray-700 transition-colors duration-300 hover:bg-gray-700"
        rel="noreferrer"
      >
        <NPMLogo className="size-4" />
      </a>
      <a
        href="mailto:jybenlarcher@gmail.com"
        target="_blank"
        className="flex size-8 items-center justify-center rounded-full border-2 border-gray-700 transition-colors duration-300 hover:bg-gray-700"
        rel="noreferrer"
      >
        <Mail size={16} />
      </a>
    </div>
  )
}
