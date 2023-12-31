import './index.less'

let timer: NodeJS.Timeout | null = null

export default {
  show: (content?: string, duration = 2000) => {
    const container = document.getElementById('toast')
    if (timer) {
      clearTimeout(timer)
      container.setAttribute('style', 'display: none')
    }
    if (!content) {
      return false
    }
    const toastEl = document.getElementById('toast-content')
    toastEl.innerHTML = content
    container.setAttribute('style', 'display: block')
    timer = setTimeout(() => {
      container.setAttribute('style', 'display: none')
    }, duration)
  },
  init: () => {
    return (
      <div id='toast' className='toast'>
        <p id='toast-content' className='toast-content' />
      </div>
    )
  },
}
