import StyledForm from './Form.style'

import Input from '../../ui/input/Input'
import TagsInput from '../../ui/tagsInput/TagsInput'
import Select from '../../ui/select/Select'

import { useSelector } from '../../../store/store'
import { useState } from 'react'

const Form = () => {
    const [keywords, setKeywords] = useState<string[]>([])

    const tags = useSelector(state => state.tags)
    const towns = useSelector(state => state.towns)

    return <StyledForm>
        <section>
            <label>
                <span>Campaign name:</span>
                <Input />
            </label>
        </section>

        <section>
            <label>
                <span>Keywords:</span>
                <TagsInput datalist={tags} selectedTags={keywords} setSelectedTags={setKeywords} />
            </label>
        </section>

        <section className='columns'>
            <div>
                <label>
                    <span>Bid amount:</span>
                    <Input type='number' $unit='$' />
                </label>
            </div>

            <div>
                <label>
                    <span>Campaign founds:</span>
                    <Input type='number' $unit='$' />
                </label>
            </div>
        </section>

        <section className='columns'>
            <div>
                <label>
                    <span>Town:</span>
                    <Select>
                        <>
                            {
                                towns.map(town => <option key={town.id} value={town.name}>{town.name}</option>)
                            }
                        </>
                    </Select>
                </label>
            </div>

            <div>
                <label>
                    <span>Radius:</span>
                    <Input type='number' $unit='km' />
                </label>
            </div>
        </section>
    </StyledForm>
}

export default Form