import { forwardRef, ReactNode, MouseEventHandler, createRef } from 'react';
import { css } from '@emotion/react';

import ColorMapStyle from './BaseColorMap.style'
import { Box, default as StyledBox } from '../StyledBox';
import baseColorMap from '../Theme/common/baseColorMap'

interface IColorBlock {
  colorNumber?: string;
  color: string;
}
const ColorBlock = ({ colorNumber, color }: IColorBlock) => {
  // const colorBlockRef = (ref as any) || createRef<HTMLElement>()
  const colorBlockStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '10px',
    width: '66px'
  }
  const colorStyle = {
    background: color,
    width: '100%',
    height: '30px',
    border: '1px solid #000'
  }

  return (
    <Box {...colorBlockStyle}>
      <Box {...colorStyle} />
      {colorNumber && <Box>{colorNumber}</Box>}
      <Box color="#666">{color}</Box>
    </Box>
  )
}

const ColorBar = ({ colorName, colorContent }: {
  colorName: string;
  colorContent: string | { [key: string]: string }
}) => {
  const iterateData = Object.entries(colorContent).map(item => {
    return {
      colorNumber: item[0],
      color: item[1]
    }
  })

  const ColorBarStyle = {
    display: 'flex',
    marginBottom: '20px'
  }

  return (
    <Box {...ColorBarStyle}>
      <Box width="120px" textAlign="center">{colorName}</Box>
      <Box display="flex" flex="1">
        {
          typeof colorContent === 'string' ?
            <ColorBlock color={colorContent} /> :
            iterateData.map(item => {
              return <ColorBlock key={item.color} color={item.color} colorNumber={item.colorNumber} />
            })
        }
      </Box>
    </Box>
  )
}

interface BaseColorProps {
  customStyle?: { [key: string]: any }
}

const BaseColorMap = forwardRef((props: BaseColorProps, ref) => {
  const { customStyle } = props
  console.log(props);

  const colorMapRef = (ref as unknown as BaseColorProps) || createRef<HTMLElement>()

  const buttonStyleProps = ColorMapStyle()

  const colorMapResult = Object.assign(baseColorMap, customStyle)

  const iterateData = Object.entries(colorMapResult).map(item => {
    return {
      colorName: item[0],
      colorContent: item[1]
    }
  })

  return (
    <Box
      ref={colorMapRef}
      as="div"
      {...buttonStyleProps}
    >
      {
        iterateData.map(item => {
          return <ColorBar colorName={item.colorName} colorContent={item.colorContent} />
        })
      }
    </Box>
  )
})

export default BaseColorMap