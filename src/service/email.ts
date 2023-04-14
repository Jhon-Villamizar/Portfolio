import { EmailData } from '../types/emailType'

const Email = async (data: EmailData) => {
  const config = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }

  await fetch('https://us-central1-email-node-function.cloudfunctions.net/email', config)
}

export default Email
