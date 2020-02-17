import styled from 'styled-components'

export const Pagecontent = styled.div`
    margin-top:142px;
    margin-left:92px;
    margin-bottom: 100px;
    margin-right: 70px;
    min-height:calc(100vh - 242px); 
    @media only screen and (max-width: 375px) {
        flex-direction: column;
        margin: 142px 25px 100px 25px;
      }   
`

export const Section = styled.div`    
    width:${props => props.width ? props.width : '26.64%'};    
    background-color : ${props => props.backgroundColor ? props.backgroundColor : '#525252'};  
    border-radius: 15px;
    min-height:calc(100vh - 242px); 
    max-height:727px;     
    z-index:99;
    @media only screen and (max-width: 375px) {
        width:100% !important;
        margin-bottom:50px;
      }  
`
export const InputCover = styled.div`
    margin:2.8em 2.8em;

    @media (max-width: 360px) {
      margin: 2.8em 0;
    }
    
    .floating-label {
        position: absolute;
        top: 0;
        left: 0;
        user-select: none;
        z-index: 1500;
        font: inherit;
        line-height: 1;
        display: block;
        width: 100%;
    }
    .floating-label-field {
        color: #FFFFFF;
        border-width: 0;
        z-index: 2000;
        font: inherit;
        line-height: 1;
        display: block;
        // width: 100%;
        position: relative;
        &:focus {
            outline: 0;
            box-shadow: 0;
        }
        &::placeholder {
            color: #FFFFFF;
        }
    }
    .floating-label-wrap {
        position: relative;
    }
    
    .floating-label-field--s3 {
        padding: 1.5em 1.5em 1em 1.5em;
        transition: border-color .25s ease-in-out;
        color: #FFFFFF;
        
        border: 1px solid rgba(255, 255, 255, .1);
        border-radius: 5px 0 0 5px;
        background-color: #0A1A33;
        + {
            .floating-label {
                position: absolute;
                top: .75em;
                left: .75em;
                display: inline-block;
                width: auto;
                margin: 0;
                padding: .75em;
                transition: transform .25s, opacity .25s, padding .25s ease-in-out;
                transform-origin: 0 0;
                color: #fff;
            }
        }
        &:focus {
            border-color: rgba(255, 255, 255, .1);            
            + {
                .floating-label {
                    z-index: 2500;
                    padding: .75em;
                    transform: translate(0, -1em) scale(.9);
                    color: #80A2CC;
                    background-color: transparent;
                }
            }
        }
        &:not(:placeholder-shown) {
            border-color: rgba(255, 255, 255, .1);
            + {
                .floating-label {
                    z-index: 2500;
                    padding: .75em;
                    transform: translate(0, -1em) scale(.9);
                    color:#80A2CC;
                    background-color: transparent;
                }
            }
        }
        &:not(textarea) {
            max-height: 4em;
        }
        &::placeholder {
            color: #fff;
        }
        
    }  
    button{
        background-color:#275E9A !important;
        padding:20px !important;
        border:0 !important;
        color:#FFFFFF;
        font-size:14px;
        cursor:pointer;        
        &:hover{
            color:#275E9A;
            background-color:#FFFFFF !important;
        }
        &.lastBtn{
            margin-left:1px;
            border-radius: 0 5px 5px 0;          
        }
    }
`

export const SvgContent = styled.div`
width:100%;
    .box {
        // max-width: 320px;
        // margin: 30px auto;
        
        a {
            display: inline-block;
            width: 100%;
            position: relative;
            &:hover {
                .upper {
                    -webkit-transition: all 1s ease-out;
                    transition: all 1s ease-out;
                    will-change: transform;
                    -webkit-transform-origin: center;
                    transform-origin: center;
                    transform: translateY(-20px);
                    perspective: 100px;
                    transform-style: preserve-3d;
                    transform: rotateX(40deg);
                    perspective-origin: top;
                }
            }
        }
    }
    .upper {
        background: url('../assets/img/upper.svg');
        background-repeat: no-repeat;
        background-position: bottom center;
        min-width: 12vw;
        width: 100%;
        height: 240px;
        display: block;
        position: relative;
        margin: auto;        
        left: 0;
        right: 0;
        bottom: calc(100% - 176px);
        transition: transform .4s ease-in-out;
    }
    .bottom {
        background: url('../assets/img/bottom.svg');
        background-repeat: no-repeat;
        background-position: bottom center;
        min-width: 12vw;
        width: 100%;
        height: 240px;
        display: block;
        margin: auto;
    }
    
}
`

// Modal
export const Modal = styled.div`
  /* The Modal (background) */
  display: none;
  position: fixed;
  z-index: 999;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);

  @media (max-width: 360px) {
    padding-top: 0;
  }

  &.is-visible {
    display: block;
  }

  /* Modal Content */
  .modal-content {
    position: relative;
    background-color: #2D4560;
    margin: auto;
    padding: 0;
    /* border: 1px solid #888; */
    width: 80%;
    max-width: 750px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: animatetop;
    animation-duration: 0.4s;

    @media (max-width: 360px) {
      width: 100%;
    }
  }

  /* Add Animation */
  @-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
  }

  @keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
  }

  /* The Close Button */
  .close {
    color: white;
    font-size: 40px;
    line-height: 1;
    font-weight: bold;
    display: block;
    position: absolute;
    right: 16px;
    top: 16px;
    margin-top: -3px;

    @media (max-width: 360px) {
      font-size: 25px;
      margin-top: -5px;
    }
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .modal-header {
    padding: 16px;
    background-color: #113352;
    color: white;
    position: relative;

    @media (max-width: 360px) {
      padding: 8px 16px;
    }
  }
  .modal-title {
    font-size: 35px;
    font-weight: bold;
    display: flex;
    align-content: center;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }

    @media (max-width: 360px) {
      font-size: 16px;

      svg {
        width: 20px;
      }
    }
  }

  .modal-body {
    padding: 16px;
    color: #fff;
    line-height: 1.5;
  }

  .modal-footer {
    padding: 16px;
    background-color: #5DA5ED;
    color: white;
  }
`

// Rangle Slider
export const Rangeslider = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 9.9em;

  .range-slider {
    /* background-color: #6FF48D !important; */
    height: 36em;
    max-width: 6.6em;
    position: relative;
  }

  .range-slider__range-values {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 36em;

    span {
      margin: .5em 0;
      font-size: 24px;
      text-align: right;
    }
  }
  .range-slider__inner {
    position: absolute;
    transform-origin: center;
    transform: translateX(-50%) translateY(-50%) rotateZ(270deg);
    position: absolute;
    top: 50%;
    margin-left: 6.6em;
  }
  .range-slider__input {
    -webkit-appearance: none;
    width: 480px;
    height: 6.6em;
    background: #6FF48D;
    margin: 0;
    :focus {
      outline: none;
    }

    ::-webkit-slider-runnable-track {
      /* background-color: #6FF48D !important; */
      height: 100%;
    }
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 67px;
      height: 6.6em;
      cursor: pointer;
      border: none;
      background: rgba(0,0,0,0.001);
    }
  }
  .range-slider__label {
    width: 3.3em;
    height: 67px;
    background: #2A434F;
    transform-origin: left top;
    transform: rotate(90deg);
    display: block;
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 0 4px 4px 0;
    top: 33.5px;
    left: 33.5px;
    font-size: 24px;
    pointer-events: none;
    user-select: none;

    &::after {
      content: '';
      display: inline-block;
      border-style: solid;
      border-color: transparent #2A434F transparent transparent;
      border-width: 33.5px 33.5px 33.5px 0;
      position: absolute;
      left: -33px;
    }
  }
`


// Table Wrapper
export const TableWrapper = styled.div`
  width: 100%;

  /* // <!-- Scrollbar CSS */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #e4e4e4; 
  }
  ::-webkit-scrollbar-thumb {
    background: #a4a6a9; 
    border-radius:5px; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #a4a6a9; 
  }
  /* // Scrollbar CSS --> */


  .ReactVirtualized__Table {
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    overflow-y: hidden;
    overflow-x: auto;
    padding: 20px 0; 
  }

  .ReactVirtualized__Table__headerRow {
    background: #275789;
    height: auto !important;
    padding-right: 0 !important;
  }
  .ReactVirtualized__Table__headerTruncatedText {
    color: #7D9CC6;
    font-weight: normal;
    padding: 9px;
    margin-top: 5px;
  }
  .ReactVirtualized__Grid__innerScrollContainer {
    background: #133252;    
  }

  .ReactVirtualized__Table__headerRow,
  .ReactVirtualized__Grid__innerScrollContainer,
  .ReactVirtualized__Grid.ReactVirtualized__Table__Grid,
  .ReactVirtualized__Table__row {
    width: 100% !important;
    max-width: 100% !important;
  }

  .ReactVirtualized__Table__headerRow,
  .ReactVirtualized__Grid.ReactVirtualized__Table__Grid {
    min-width: 600px;
  }

  .ReactVirtualized__Grid.ReactVirtualized__Table__Grid {
    background: #133252;
    padding: 10px 0 10px 10px !important;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: #e4e4e4; 
    }
    &::-webkit-scrollbar-thumb {
      background: #a4a6a9; 
      /* border-radius:5px;  */
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #a4a6a9; 
    }
  }

  .text-green {
    color: #73FC7F;
  }
  .text-red {
    color: #FD7979;
  }
  .bitcoin-icon {
    margin-right: 5px;
  }
`