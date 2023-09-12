import { activityList } from './constants'
import styles from './style.module.less'

import mainEntry from '@/mainEntry'
import router from '@/utils/router'

const App = () => {
  const handleActivityClick = item => {
    router.push(item.path)
  }

  return (
    <div className={styles.mainPage}>
      <h1>活动列表</h1>
      {Object.keys(activityList).map(item => (
        <div key={item}>
          <h3>{item}</h3>
          <ul>
            {activityList[item].map((item, index) => (
              <li key={item.path} onClick={() => handleActivityClick(item)}>
                {index + 1}——{item.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

mainEntry({
  app: App,
  initWechat: false,
})
