import styled from 'styled-components';

export const Container = styled.div<{ 
    size: number, sidePos: number
    left: number, top: number,
}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    top: ${props => props.top}px; 
    left: ${props => props.left}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${pos => pos.sidePos}px;

`;

export const NameBox = styled.span`
    background-color: #000;
    padding: 3px;
    border-radius: 5px;
    position: absolute;
    font-size: 10px;
    text-align: center;
    margin-top: -30px;
`;