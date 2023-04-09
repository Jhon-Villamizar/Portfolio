import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import '../../i18n/index'
import './InfoContact.scss'

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required()

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

const InfoContact = () => {
  const { t } = useTranslation(['texts'])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: unknown) => console.log(data)
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
          <h5>{t('contact.formTitle')}</h5>
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
