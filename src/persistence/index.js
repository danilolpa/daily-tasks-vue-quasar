import localforage from 'localforage'

export function addTaskToStorage (task) {
  localforage.setItem(task.id, task)
}

export function getTaskToStorage () {
  let list = []
  localforage.keys().then(keys => {
    keys.forEach(key => {
      localforage.getItem(key).then(value => list.push(value))
    })
  })
  return list
}
