import styles from './index.module.less'

const Modal = (props: {
  children?: any
  visible?: any
  onSetVisible?: (visible: boolean) => void
  onSetShow?: (visible: boolean) => void
  /** 自定义content的class */
  customContentClass?: string
  /** 允许点击modal则关闭弹窗 */
  allowcCloseOnClick?: boolean
}) => {
  const { children, visible, onSetVisible, onSetShow, customContentClass, allowcCloseOnClick } =
    props

  const handleModalClick = () => {
    if (allowcCloseOnClick) {
      onSetVisible(false)
    }
  }

  return (
    <>
      {visible && (
        <div className={styles.modal} onClick={handleModalClick}>
          <div
            className={customContentClass || styles.modal_content}
            onClick={() => {
              onSetShow && onSetShow(visible)
            }}
          >
            {children}
          </div>
          <div
            className={styles.modal_mask}
            onClick={() => {
              onSetVisible(!visible)
              document.body.style.overflow = ''
            }}
          />
        </div>
      )}
    </>
  )
}

export default Modal
