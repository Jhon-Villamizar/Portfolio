import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import '../../i18n/index'
import './InfoContact.scss'
import Email from '../../service/email'
import { EmailData } from '../../types/emailType'
import { useEffect, useState } from 'react'

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required()

const InfoContact = () => {
  const [text, setText] = useState(true)
  const { t } = useTranslation(['texts'])

  useEffect(() => {
    setTimeout(() => {
      setText(false)
    }, 5000)
  }, [text])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailData>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: EmailData) => {
    Email(data)
    reset()
    setText(true)
  }

  const message = () => {
    if (text) {
      return (
        <>
          <h5>{t('contact.formTitle')}</h5>
          <p>{t('contact.formText')}</p>
        </>
      )
    }
  }

  return (
    <div className='contact-content'>
      <div className='info'>
        <h3>{t('contact.title')}</h3>
        <div className='data'>
          <div className='img'></div>
          <div className='text'>
            <p>{t('contact.email')}</p>
            <p>jhamiltonvo@gmail.com</p>
            <p>jhonvio@hotmail.com</p>
          </div>
          <div className='text'>
            <p>{t('contact.phone')}</p>
            <p>(+57) 3166833681</p>
          </div>
        </div>
      </div>
      <div className='form'>
        <form className='card-content' onSubmit={handleSubmit(onSubmit)}>
          {message()}
          <div>
            <label>{t('contact.formName')}: </label>
            <input {...register('name')} />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label>{t('contact.formEmail')}: </label>
            <input {...register('email')} />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label>{t('contact.formSubject')}: </label>
            <input {...register('subject')} />
            <p>{errors.subject?.message}</p>
          </div>
          <div>
            <label>{t('contact.formMessage')}: </label>
            <textarea {...register('message')} />
            <p>{errors.message?.message}</p>
          </div>
          <div>
            <input type='submit' value={t('contact.button') as string} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default InfoContact
