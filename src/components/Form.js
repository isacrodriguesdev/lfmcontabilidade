import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-nextjs-toast'
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import colors from '../app/colors'
// images
import UserSVG from '../assets/images/svg/user-name.svg'
import DirectSVG from '../assets/images/svg/direct.svg'
import PhoneSVG from '../assets/images/svg/phone-call.svg'
import WhatsappSVG from '../assets/images/svg/whatsapp.svg'
import CheckMarkSVG from '../assets/images/svg/check-mark.svg'

export default function Form() {

  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      name: '', 
      email: '',
      phone: '',
      whatsapp: '',
      subjectMatter: 'Apenas entrar em contato',
      message: ''
    }
  })

  const onSubmit = (data) => {

    axios.post('https://www.lfmcontabilidade.com.br/mailer', data)
      .then(() => {
        toast.notify('Mensagem enviada', {
          title: "Sucesso!",
          duration: 5,
          type: "success"
        })

        reset()
        
      }).catch(() => {
        toast.notify('Algo deu errado, por favor tente enviar novamente mais tarde, pedimos desculpa', {
          title: "Falha",
          duration: 8,
          type: "error"
        })
      })
  }

  return (
    <div className='contact' style={{ display: "flex", justifyContent: 'flex-start' }}>
      <div className='col-md-12 col-sm-12'>
        <FormRequest onSubmit={handleSubmit(onSubmit)}>
          <FormTitleContainer>
            <h5>Deixe-nos um email</h5>
            <p>Iremos avaliar o seu caso e responde-lo em breve</p>
          </FormTitleContainer>
          <div className="form-row">
            <div className="form-group col-md-6">
              <InputContainer>
                <UserSVG width={24} height={24} />
                <input type="text" placeholder="* Nome Completo" name="name"
                  ref={register({
                    required: "Required",
                    minLength: 3,
                  })} />
              </InputContainer>
              {errors.name && <InvalidInputText>Nome inválido</InvalidInputText>}
            </div>
            <div className="form-group col-md-6">
              <InputContainer>
                <DirectSVG width={24} height={24} />
                {/* <CheckMarkSVG width={24} height={24} /> */}
                <input type="email" placeholder="* E-mail" required name="email" ref={register({
                  required: "Required",
                  minLength: 10,
                })} />
              </InputContainer>
              {errors.email && <InvalidInputText>Informe um email valido</InvalidInputText>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <InputContainer>
                <PhoneSVG width={24} height={24} />
                <input type="text" placeholder="Telefone" name="phone" ref={register({
                  minLength: 8,
                })} />
              </InputContainer>
              {errors.phone && <InvalidInputText>Telefone inválido</InvalidInputText>}
            </div>
            <div className="form-group col-md-6">
              <InputContainer>
                <WhatsappSVG width={24} height={24} />
                <input type="text" placeholder="Whatsapp" name="whatsapp" ref={register({
                  minLength: 3,
                })} />
              </InputContainer>
              {errors.whatsapp && <InvalidInputText>Número de celular inválido</InvalidInputText>}
            </div>
          </div>

          <div class="form-group">
            <label for="select-subject">Assunto</label>
            <InputContainer className="reset-padding-vertical reset-padding-horizontal">
              <select class="form-control" id="select-subject" required name="subjectMatter"
                ref={register({
                  required: "Required",
                })}>
                <option>Apenas entrar em contato</option>
                <option>Desejo abrir minha empresa</option>
                <option>Fechar empresa</option>
                <option>Descobrir o melhor formato para minha empresa</option>
                <option>Quero mudar de contador</option>
              </select>
            </InputContainer>
          </div>

          <div className="form-group">
            <InputContainer>
              <textarea rows="4" name="message" required placeholder="* Como podemos te ajudar?"
                ref={register({
                  required: "Required",
                  minLength: 3,
                })}></textarea>
            </InputContainer>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: '30px' }}>
            <button style={{ backgroundColor: colors.primaryColor, padding: '15px 40px', fontSize: '0.85em' }}
              className="btn btn-primary btn-sm mybutton">
              Enviar mensagem
            </button>
          </div>
        </FormRequest>
      </div>
      <div style={{ position: "absolute", zIndex: 9999999999 }}>
        <ToastContainer align="right" position="bottom" />
      </div>
    </div>
  )
}

const InvalidInputText = styled.span`
  position: relative;
  top: 6px;
  color: red;
`

const FormTitleContainer = styled.div`
  font-family: Montserrat;
  margin-bottom: 70px;
  h5 {
    color: #2f314a;
    font-weight: bold;
    font-size: 1.4em;
  }
  p {
    position: relative;
    font-size: 1.2em;
    font-weight: 400;
    color: #2f314a;
    bottom: 5px;
  }
`
const FormRequest = styled.form`
  background-color: #f7f8ff;
  border-radius: 10px;
  padding: 30px 15px;
  @media(min-width: 600px) {
    padding: 30px 50px;
  }
`
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 2px solid #d1d1f3;
  padding: 10px 12px;
  border-radius: 5px;
`