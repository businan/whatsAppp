import { StyledWrapper, StyledWrapperBody } from "./Wrapper.style";

export const Wrapper = ({ children }) => {
    return (
        <StyledWrapper>
            <StyledWrapperBody>
                {children}
            </StyledWrapperBody>
        </StyledWrapper>
    )
}