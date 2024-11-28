import { atom, selector } from "recoil";

export const networkAtom = atom({
          key : 'network',
          default : 104
})
export const jobsAtom = atom({
          key : 'jobs',
          default : 0
})
export const messageAtom = atom({
          key : 'message',
          default : 0
})
export const notificationAtom = atom({
          key : 'notification',
          default : 12
})

export const totalNotificationsSelector = selector({
          key : 'totoalNotification',
          get : ({get}) => {
                    const network = get(networkAtom)
                    const jobs = get(jobsAtom)
                    const message = get(messageAtom)
                    const notification = get(notificationAtom)

                    return network + jobs + message + notification
          }
})
