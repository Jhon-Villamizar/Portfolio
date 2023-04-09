import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAn-n-AG4zz4t_EiEq6aBOwIvLx2zKx8SI',
  authDomain: 'portfolio-d5950.firebaseapp.com',
  projectId: 'portfolio-d5950',
  storageBucket: 'portfolio-d5950.appspot.com',
  messagingSenderId: '669791356717',
  appId: '1:669791356717:web:1210b20e7b86e8543d75a4',
  measurementId: 'G-L4VPGVDW02',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
