import axios from 'axios'

const getMemberList = () => {
  return axios.post('http://httpbin.org/anything', ALL_MEMBERS)
}

const memberApi = {
  getMemberList
}

export default memberApi

const ALL_MEMBERS = [
  {
    name: 'Ava',
    gender: 'female',
    department: 'Sales',
    position: 'Manager',
    tel: '123-456-7890'
  },
  {
    name: 'Ethan',
    gender: 'male',
    department: 'Research',
    position: 'Manager',
    tel: '123-456-7890'
  },
  {
    name: 'Lucas',
    gender: 'male',
    department: 'Research',
    position: 'Member',
    tel: '123-456-7890'
  }
]
