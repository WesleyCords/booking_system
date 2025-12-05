import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import DatePicker from '../booking/DatePicker'

interface FieldsProps {
  label?: string
  placeholder?: string
  type?: 'date' | 'text'
  value?: string
  change?: (value: unknown) => void
}

const Fields = ({
  label,
  placeholder,
  type = 'text',
  value,
  change,
}: FieldsProps) => {
  if (type === 'date') {
    return (
      <div>
        <Label className="mb-2 block font-medium">{label}</Label>
        <DatePicker date={value} setDate={(date) => change && change(date)} />
      </div>
    )
  }
  if (type === 'text') {
    return (
      <div>
        <Label className="mb-2 block font-medium">{label}</Label>
        <Input
          value={value as string}
          type="text"
          placeholder={placeholder}
          className="mb-4 w-full"
          onChange={(e) => change && change(e.target.value)}
        />
      </div>
    )
  }
}

export default Fields
