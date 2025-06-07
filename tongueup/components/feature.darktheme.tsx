import { LucideMoon, LucideSun } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const DarkThemeFeature = ({ className }: { className?: string }) => {
  const gridSize = 2
  const { t } = useTranslation()

  const getCellColor = (row: number, col: number): string => {
    return (row + col) % 2 === 0 ? 'bg-fuchsia-700/10' : 'bg-fuchsia-200/50'
  }

  const contentByCell: Record<string, string | React.ReactNode> = {
    '0-0': <LucideMoon className="size-40 fill-black text-white" />,
    '0-1': <span className="font-bold">{t('ui.darkThemeFeature')}</span>,
    '1-0': '',
    '1-1': (
      <LucideSun
        style={{
          filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))'
        }}
        className="size-40 fill-white drop-shadow-xl"
      />
    )
  }

  const cells = []
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      cells.push(
        <div
          key={`${row}-${col}`}
          className={`place-content-center items-center rounded-3xl text-center shadow-lg backdrop-blur-xl ${getCellColor(
            row,
            col
          )}`}
        >
          {contentByCell[`${row}-${col}`] || ''}
        </div>
      )
    }
  }

  return (
    <div className={`grid grid-cols-2 gap-2 ${className ? className : ''}`}>
      {cells}
    </div>
  )
}
