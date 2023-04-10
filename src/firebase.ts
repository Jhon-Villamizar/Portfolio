import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import * as dotenv from 'dotenv'
dotenv.config()

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG as string)

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
