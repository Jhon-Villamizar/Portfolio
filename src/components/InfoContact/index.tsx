import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import '../../i18n/index'
import './InfoContact.scss'
import Email from '../../service/email'
import { EmailData } from '../../types/emailType'
import { useEffect, useState } from 'react'
import { schema } from '../../types/emamilSchema'

const InfoContact = () => {
  const [text, setText] = useState(false)
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
      <div className='info' data-testid='contact-title'>
        <h3>{t('contact.title')}</h3>
        <div className='data'>
          <div className='img'></div>
          <div className='text' data-testid='contact-email'>
            <p>{t('contact.email')}</p>
            <p>jhamiltonvo@gmail.com</p>
            <p>jhonvio@hotmail.com</p>
          </div>
          <div className='text' data-testid='contact-phone'>
            <p>{t('contact.phone')}</p>
            <p>(+57) 3166833681</p>
          </div>
        </div>
      </div>
      <div className='form' data-testid='contact-content'>
        <form className='card-content' onSubmit={handleSubmit(onSubmit)} data-testid='contact-form'>
          {message()}
          <div data-testid='contact-name'>
            <label data-testid='input-name'>{t('contact.formName')}: </label>
            <input {...register('name')} />
            <p>{errors.name?.message}</p>
          </div>
          <div data-testid='contact-email'>
            <label data-testid='input-email'>{t('contact.formEmail')}: </label>
            <input {...register('email')} />
            <p>{errors.email?.message}</p>
          </div>
          <div data-testid='contact-subject'>
            <label data-testid='input-subject'>{t('contact.formSubject')}: </label>
            <input {...register('subject')} />
            <p>{errors.subject?.message}</p>
          </div>
          <div data-testid='contact-message'>
            <label data-testid='input-message'>{t('contact.formMessage')}: </label>
            <textarea {...register('message')} />
            <p>{errors.message?.message}</p>
          </div>
          <div data-testid='contact-button'>
            <input type='submit' value={t('contact.button') as string} data-testid='input-send' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default InfoContact
