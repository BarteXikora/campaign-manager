import styled from 'styled-components'

const StyledTagsInput = styled.div`
    display: flex;
    position: relative;
    background-color: ${({ theme }) => theme.colors.gray3};
    border-radius: ${({ theme }) => theme.borderRadiuses.small};
    transition: ${({ theme }) => theme.transition};
    cursor: text;
    align-items: center;

    input {
        font-size: ${({ theme }) => theme.fontSizes.small};
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        padding: ${({ theme }) => theme.spaces.medium} ${({ theme }) => theme.spaces.medium};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray2};
    }

    &:focus-within {
        background-color: ${({ theme }) => theme.colors.secondary};

        .dropdown {
            display: block;
        }
    }

    .tags {
        padding-left: ${({ theme }) => theme.spaces.medium};
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spaces.small};
    }

    .tag {
        display: flex;
        align-items: center;
        gap: 0;
        font-size: ${({ theme }) => theme.fontSizes.small};
        background-color: ${({ theme }) => theme.colors.gray4};
        border-radius: ${({ theme }) => theme.borderRadiuses.small};
        color: ${({ theme }) => theme.colors.black};
        font-weight: bold;
        white-space: nowrap;
        cursor: pointer;

        span {
            padding: 0 ${({ theme }) => theme.spaces.medium};
            padding-right: ${({ theme }) => theme.spaces.xSmall}  
        }

        .remove {
            padding: ${({ theme }) => theme.spaces.xSmall} ${({ theme }) => theme.spaces.small};
            font-size: ${({ theme }) => theme.fontSizes.title};
            height: 100%;
            border-top-right-radius: ${({ theme }) => theme.borderRadiuses.small};
            border-bottom-right-radius: ${({ theme }) => theme.borderRadiuses.small};
        }

        &:hover .remove{
            background-color: ${({ theme }) => theme.colors.wrongLighter};
        }
    }

    .dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: ${({ theme }) => theme.borderRadiuses.small};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-top: ${({ theme }) => theme.spaces.xSmall};
        padding: ${({ theme }) => theme.spaces.small} 0;
        z-index: 200;
        display: none;

        .option {
            padding: ${({ theme }) => theme.spaces.medium};
            font-size: ${({ theme }) => theme.fontSizes.small};
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.colors.gray2};
            }

            &.disabled {
                color: ${({ theme }) => theme.colors.gray1};
                cursor: not-allowed;

                &:hover {
                    background-color: transparent;
                }
            }
        }
    }
`

export default StyledTagsInput