import React from 'react'
import ArrowIconRight from './ArrowIconRight'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'
import styleHelper from '../styleHelper'

const CarouselButtonRight = ({ onClick }) => {
  return (
    <button className={css(styles.button)} onClick={onClick}>
      <ArrowIconRight color={Colors.get('link.lighter')} width={22} height={22} />
    </button>
  )
}

const styles = StyleSheet.create({
  button: {
    '@media (min-width: 768px)': {
      display: 'block'
    },
    display: 'none',
    zIndex: 1,
    position: 'absolute',
    background: Colors.get('white'),
    height: '56px',
    width: '56px',
    borderRadius: '50%',
    top: 0,
    bottom: 0,
    right: `-${styleHelper.spacing()}`,
    margin: 'auto',
    border: '1px solid rgba(0, 0, 0, .04)',
    boxShadow: '0 6px 20px rgba(0,0,0,.08)'
  }
})

export default CarouselButtonRight
