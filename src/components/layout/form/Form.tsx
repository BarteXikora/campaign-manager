import StyledForm from './Form.style'

const Form = () => {
    return <StyledForm>
        <form>
            <section>
                <label>
                    <span>Campaign name:</span>
                    <input type="text" />
                </label>
            </section>

            <section>
                <label>
                    <span>Tags:</span>
                    <input type="text" />
                </label>
            </section>

            <section className='columns'>
                <div>
                    <label>
                        <span>Bid amount:</span>
                        <input type="number" />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Campaign founds:</span>
                        <input type="number" />
                    </label>
                </div>
            </section>

            <section className='columns'>
                <div>
                    <label>
                        <span>Town:</span>
                        <select></select>
                    </label>
                </div>

                <div>
                    <label>
                        <span>Radius:</span>
                        <input type="number" />
                    </label>
                </div>
            </section>
        </form>
    </StyledForm>
}

export default Form