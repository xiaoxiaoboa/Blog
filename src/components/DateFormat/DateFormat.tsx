import React from "react"
import { parseISO, format } from "date-fns"

interface DateProps {
  dateString: string
}

const DateFormat: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time>{format(date, "yyyy-MM-dd HH:mm:ss")}</time>
}

export default DateFormat
