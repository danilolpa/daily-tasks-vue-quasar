import localforage from 'localforage'

export function addTaskToStorage (task) {
  localforage.setItem(task.id, task)
}

export function getTaskFromStorage () {
  let list = []
  localforage.keys().then(keys => {
    keys.forEach(key => {
      localforage.getItem(key).then(value => list.push(value))
    })
  })
  return list
}

export function updateTaskFromStorage (index, obj) {
  localforage.removeItem(obj.id)
  localforage.setItem(obj.id, obj)
}

export function removeTaskFromStorage (obj) {
  localforage.removeItem(obj.id)
}
