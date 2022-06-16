import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: wrap row;
    gap: 2rem;
    background-color: #24282f;
    min-height: 100vh;
    color: #fff;
    margin: 0 auto;
`;

export const Map = styled.div`
    width: 480px;
    height: 480px;
    background-image: url('/assets/map.png');
    background-position: left top;
    background-size: 100%;
    padding: 32px;
    margin-bottom: 12px;
`;

export const Joystick = styled.div`
    width: 163px;
    height: 163px;
    position: relative;


    button {
        border: 6px solid #53243D;
        background-color: #9B7188;
        width: 32px;
        height: 32px;
        position: absolute;
        z-index: 9;
    }

    button:after {
        position: absolute;
    }

    button.left:after  {
        left: 5px;
        top: 8px;
    }
    
    button.right:after  {
        right: 5px;
        top: 12px;
        transform: rotate(180deg);
    }
    
    button.top:after  {
        left: 6px;
        top: 12px;
        transform: rotate(90deg);
    }
    
    button.bottom:after  {
        right: 4px;
        bottom: 12px;
        transform: rotate(-90deg);
    }

    button.left {
        border-right: none !important;
        top: 50%;
        margin-top: -16px;
        left: 38px;
    }
    
    button.top {
        border-bottom: none !important;
        left: 50%;
        margin-left: -16px;
        top: 38px;
    }
    
    button.right {
        border-left: none !important;
        top: 50%;
        margin-top: -16px;
        right: 38px;
    }
    
    button.bottom {
        border-top: none !important;
        left: 50%;
        margin-left: -16px;
        bottom: 38px;
    }

`;
