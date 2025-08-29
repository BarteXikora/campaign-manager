import styled from 'styled-components'

const StyledToggler = styled.label`
    position: relative;
    background-color: orange;
    cursor: pointer;

    input {
        position: absolute;
        opacity: 0
    }

    input:checked + .box {
        .indicator {
            background-color: ${({ theme }) => theme.colors.primary};
            transform: translateX(30px);

        }

        &:hover .indicator {
            background-color: ${({ theme }) => theme.colors.primaryLighter};
        }
    }

    .box {
        position: relative;
        width: 55px;
        height: 25px;
        background-color: ${({ theme }) => theme.colors.gray3};
        border-radius: ${({ theme }) => theme.borderRadiuses.big};
        transition: ${({ theme }) => theme.transition};

        .indicator {
            position: absolute;
            top: -3px;
            left: 0;
            transform: translateX(0);
            height: 31px;
            width: 31px;
            background-color: ${({ theme }) => theme.colors.gray2};
            border-radius: 100%;
            transition: ${({ theme }) => theme.transition};
        }

         &:hover .indicator {
            background-color: ${({ theme }) => theme.colors.gray1};
        }
    }
`

export default StyledToggler