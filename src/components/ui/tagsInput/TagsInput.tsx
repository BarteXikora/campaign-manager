import StyledTagsInput from './TagsInput.style'

import { useState } from 'react'

const TagsInput = () => {
    const [tags, setTags] = useState<string[]>(['Exaple'])

    return <StyledTagsInput>
        {
            tags.length > 0 && <div className="tags">
                {tags.map((tag, index) => <div key={index} className='tag'>
                    <span>{tag}</span>

                    <div className='remove'>&times;</div>
                </div>)}
            </div>
        }

        <input type="text" />

        <div className="dropdown">
            <div className="option">Example</div>
            <div className="option">Keyword</div>
            <div className="option">Names</div>
        </div>
    </StyledTagsInput>
}

export default TagsInput