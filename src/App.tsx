import Button from './components/Button';
import { TextInput } from './components/InputText';
import { Envelope, Lock, User, GithubLogo, LinkedinLogo } from 'phosphor-react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';

import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

interface FormProps {
  usuario: string;
  email: string;
  senha: string;
}

function App() {
  const { handleSubmit, control, reset, formState: { errors} } = useForm<FormProps>();

  useEffect(() => {
    if ( errors.email || errors.senha) {
      toast.error("Ops! Parece que algo deu errado :(", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }, [errors])



  const onSubmit = (value: any) => {
    toast.success("Formulário enviado", {
      position: toast.POSITION.TOP_RIGHT
    }); 
    reset();
  };
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div id="wrapper" className="bg-gray-900 w-full h-screen flex items-center justify-center flex-col">
        <ToastContainer />
        <div id="wrapper-form" className='w-2/6 -lg:w-4/6 p-8 rounded bg-gray-800 flex flex-col gap-4'>
          <div id="header-form" className='w-full flex items-center justify-center flex-col'>
            <p className='text-white text-2xl -lg:text-xl'>Crie sua conta</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-4'>
              <div id="form-group" className='flex flex-col gap-2'>
                <Controller
                  name="usuario"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value} }) => (
                    <TextInput.Root>
                      <TextInput.Icon>
                        <User className='text-xl'/>
                      </TextInput.Icon>
                      <TextInput.Input value={value} onChange={onChange} placeholder='Nome'/>
                    </TextInput.Root>
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{ required: true, pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Tem que ser um e-mail válido"
                  }}}
                  render={({ field: { onChange, value} }) => (
                    <>
                      <TextInput.Root>
                        <TextInput.Icon>
                          <Envelope className='text-xl'/>
                        </TextInput.Icon>
                        <TextInput.Input value={value} onChange={onChange}  placeholder='E-mail'/>
                      </TextInput.Root>
                      {
                        errors.email && 
                          <span className="text-red-600">{errors.email?.message}</span>
                      }
                    </>
                  )}
                />
                <Controller
                  name="senha"
                  control={control}
                  defaultValue=""
                  rules={{ required: true, minLength: { value: 8, message: "Senha tem que possuir no mínimo 8 caracteres" }}}
                  render={({ field: { onChange, value} }) => (
                    <> 
                      <TextInput.Root>
                        <TextInput.Icon>
                          <Lock className='text-xl'/>
                        </TextInput.Icon>
                        <TextInput.Input 
                          value={value} 
                          onChange={onChange}
                          type="password" 
                          placeholder='Senha'
                        />
                      </TextInput.Root>
                      {errors.senha && <span className="text-red-600">{errors.senha?.message}</span>}
                    </>
                  )}
                />
              </div>
              <Button>
                Criar conta
              </Button>
            </div>
          </form>
        </div>
      </div>
      <footer className='bg-cyan-500 w-full flex items-center justify-center gap-4 -lg:items-center -lg:justify-center -lg:flex-col -lg:gap-2 -lg:py-2'>
        <p className='text-black -lg:text-center'>Desenvolvido por: Arthur César e Vanessa de Queiroz ❤️</p>
        <div className='flex items-center justify-center'>
          <a href='mailto:240700ac@gmail.com' target="_blank">
            <Envelope className='text-black text-2xl' />
          </a>
          <a href='https://github.com/nogueiraac' target="_blank">
            <GithubLogo className='text-black text-2xl' />
          </a>
          <a href="https://www.linkedin.com/in/arthur-c%C3%A9sar/" target="_blank">
            <LinkedinLogo className='text-black text-2xl' />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
