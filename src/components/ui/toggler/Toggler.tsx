import StyledToggler from './Toggler.style'
import TTogglerProps from './Toggler.types'

const Toggler = (props: TTogglerProps) => {
    return <StyledToggler>
        <input type="checkbox" {...props} />

        <div className="box">
            <div className="indicator"></div>
        </div>
    </StyledToggler>
}

export default Toggler