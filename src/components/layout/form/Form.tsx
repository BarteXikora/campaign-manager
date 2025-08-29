import StyledForm from './Form.style'

import Input from '../../ui/input/Input'
import TagsInput from '../../ui/tagsInput/TagsInput'
import Select from '../../ui/select/Select'

import { useSelector } from '../../../store/store'
import TFormProps from './Form.types'

const Form = ({ values, setValues, validationMessage }: TFormProps) => {
    const tags = useSelector(state => state.tags)
    const towns = useSelector(state => state.towns)

    return <StyledForm>
        <section>
            <label>
                <span>Campaign name:</span>
                <Input value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
            </label>
        </section>

        <section>
            <label>
                <span>Keywords:</span>
                <TagsInput datalist={tags} selectedTags={values.tags} setSelectedTags={tags => setValues({ ...values, tags })} />
            </label>
        </section>

        <section className='columns'>
            <div>
                <label>
                    <span>Bid amount:</span>
                    <Input
                        type='number'
                        $unit='$'
                        value={values.bidAmount}
                        onChange={e => setValues({ ...values, bidAmount: Number(e.target.value) })}
                    />
                </label>
            </div>

            <div>
                <label>
                    <span>Campaign founds:</span>
                    <Input
                        type='number'
                        $unit='$'
                        value={values.campaignFund}
                        onChange={e => setValues({ ...values, campaignFund: Number(e.target.value) })}
                    />
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
                    <Input
                        type='number'
                        $unit='km'
                        value={values.radius}
                        onChange={e => setValues({ ...values, radius: Number(e.target.value) })}
                    />
                </label>
            </div>
        </section>

        <section>
            {validationMessage}
        </section>
    </StyledForm>
}

export default Form