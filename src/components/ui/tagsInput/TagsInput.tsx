import StyledTagsInput from './TagsInput.style'
import TTagsInputProps from './TagsInput.types'

import { useState, useEffect } from 'react'

const TagsInput = ({ datalist, selectedTags, setSelectedTags }: TTagsInputProps) => {
    const [inputValue, setInputValue] = useState('')
    const [dropdownList, setDropdownList] = useState<string[]>([])

    useEffect(() => {
        if (inputValue.length > 0) {
            const filteredList = datalist.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()) && !selectedTags.includes(item))
            setDropdownList(filteredList)
        } else {
            setDropdownList(datalist.filter(item => !selectedTags.includes(item)).slice(0, 5))
        }

    }, [inputValue, selectedTags, datalist])

    const handleOptionClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const value = e.currentTarget.textContent
        if (value && !selectedTags.includes(value)) {
            setSelectedTags([...selectedTags, value])
            setInputValue('')
        }
    }

    const handleTagClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const value = e.currentTarget.textContent?.slice(0, -1)
        if (value && selectedTags.includes(value)) {
            setSelectedTags(selectedTags.filter(tag => tag !== value))
        }
    }

    return <StyledTagsInput>
        {
            selectedTags.length > 0 && <div className="tags">
                {selectedTags.map((tag, index) => <div key={index} className='tag' onClick={handleTagClick}>
                    <span>{tag}</span>

                    <div className='remove'>&times;</div>
                </div>)}
            </div>
        }

        <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} />

        <div className="dropdown" tabIndex={0}>
            {
                dropdownList.map((item, index) => <div key={index} className='option' onClick={handleOptionClick}>
                    {item}
                </div>)
            }

            {
                dropdownList.length === 0 && <div className='option disabled'>No results</div>
            }
        </div>
    </StyledTagsInput>
}

export default TagsInput