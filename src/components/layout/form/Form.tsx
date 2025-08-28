import StyledForm from './Form.style'

import Input from '../../ui/input/Input'
import TagsInput from '../../ui/tagsInput/TagsInput'
import Select from '../../ui/select/Select'

import { useState } from 'react'

const __datalist = ['Exaple', 'Test', 'Demo', 'Sample', 'Mockup', 'Prototype']

const Form = () => {
    const [keywords, setKeywords] = useState<string[]>([])

    return <StyledForm>
        <form>
            <section>
                <label>
                    <span>Campaign name:</span>
                    <Input />
                </label>
            </section>

            <section>
                <label>
                    <span>Keywords:</span>
                    <TagsInput datalist={__datalist} selectedTags={keywords} setSelectedTags={setKeywords} />
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
                            <option value="new_york">New York</option>
                            <option value="los_angeles">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                            <option value="houston">Houston</option>
                            <option value="miami">Miami</option>
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
        </form>
    </StyledForm>
}

export default Form