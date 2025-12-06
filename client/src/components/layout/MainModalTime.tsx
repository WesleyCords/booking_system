import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addTime } from '@/store/modules/bookSlice'

const MainModalTime = () => {
  const dispatch = useAppDispatch()
  const selectTime = (time: string) => {
    dispatch(addTime(time))
  }
  const timeActual = useAppSelector((state) => state.booking.service.time)

  const timeSlots = [
    '09:00',
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
    '12:00',
    '12:15',
    '12:30',
    '12:45',
    '13:00',
    '13:15',
    '13:30',
    '13:45',
    '14:00',
    '14:15',
    '14:30',
    '14:45',
    '15:00',
    '15:15',
    '15:30',
    '15:45',
    '16:00',
    '16:15',
    '16:30',
    '16:45',
    '17:00',
  ]

  const morningTimes = timeSlots.filter((time) => time <= '12:00')
  const afternoonTimes = timeSlots.filter((time) => time > '12:00')

  const renderTimeButtons = (times: string[]) => {
    return times.map((time) => {
      const isSelected = timeActual === time
      return (
        <li
          key={time}
          onClick={() => selectTime(time)}
          className={cn(
            'cursor-pointer rounded-md border p-1 text-center text-sm transition-all duration-200',
            'hover:border-primary hover:text-primary hover:bg-primary/5',
            isSelected
              ? 'border-primary text-primary bg-primary/10 font-bold shadow-sm'
              : '',
          )}
        >
          {time}
        </li>
      )
    })
  }

  const getMorningContent = () => {
    if (morningTimes.length === 0)
      return <p className="text-card">Sem horários pela manhã</p>

    return (
      <ul className="grid grid-cols-5 gap-3">
        {renderTimeButtons(morningTimes)}
      </ul>
    )
  }

  const getAfternoonContent = () => {
    if (afternoonTimes.length === 0)
      return <p className="text-gray-400">Sem horários pela tarde</p>

    return (
      <ul className="grid grid-cols-5 gap-3">
        {renderTimeButtons(afternoonTimes)}
      </ul>
    )
  }

  return (
    <div className="mb-5 flex flex-col gap-6">
      <div>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
          Manhã
        </h3>
        {getMorningContent()}
      </div>
      <div>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
          Tarde
        </h3>
        {getAfternoonContent()}
      </div>
    </div>
  )
}

export default MainModalTime
