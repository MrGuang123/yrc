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
  return (
    <Box {...colorBlockStyle}>
      <Box background={color} width="100%" height="30px" />
      {colorNumber && <Box>{colorNumber}</Box>}
      <Box>{color}</Box>
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

const BaseColorMap = forwardRef((props: any, ref) => {
  const colorMapRef = (ref as any) || createRef<HTMLElement>()

  const buttonStyleProps = ColorMapStyle()

  const iterateData = Object.entries(baseColorMap).map(item => {
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