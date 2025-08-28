type TInput = {
    type?: 'text' | 'number'
    value?: string | number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    $unit?: string
}

export default TInput