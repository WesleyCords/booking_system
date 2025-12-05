import { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { ChevronDownIcon } from 'lucide-react'

interface DateProps {
  date: string | undefined
  setDate: (date: string | undefined) => void
}

const DatePicker = ({ date, setDate }: DateProps) => {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date-picker"
          className="w-50 justify-between font-normal"
        >
          {date ? date : 'Selecione a Data'}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="z-100 w-auto overflow-hidden p-0"
        align="center"
      >
        <Calendar
          mode="single"
          selected={date ? new Date(date) : undefined}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDate(date?.toLocaleDateString('pt-BR'))
            setOpen(false)
          }}
          className="w-50"
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker
