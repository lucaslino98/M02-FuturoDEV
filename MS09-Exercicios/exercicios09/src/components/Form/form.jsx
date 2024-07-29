import './form.css'
import { useForm } from "react-hook-form"

function Form() {
    const { register, handleSubmit, formState } = useForm({
        // mode:'all',
    })

    const { errors, isSubmitting } = formState;
    console.log(errors)
    const handleSubmitData = (data) => {
        console.log('submit', data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(handleSubmitData)}>

                <h2>Formulário</h2>

                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    {...register('name', { required: true })}
                />
                {errors.name && errors.name.type === 'required' && <p style={{ color: 'red' }}>{errors.name.message || 'Nome é obrigatório'}</p>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Digite seu E-MAIL"
                    {...register('email', { required: true })}
                />
                {errors.email && errors.email.type === 'required' && <p style={{ color: 'red' }}>{errors.email.message || 'Email é obrigatório'}</p>}



                <label htmlFor="idade">idade</label>
                <input
                    type="number"
                    placeholder="Digite sua idade"
                    {...register('idade', {
                        required: 'Idade é obrigatória',
                        min: {
                            value: 18,
                            message: 'A idade mínima é 18 anos'
                        }
                    })}
                />
                {errors.idade && errors.idade.type === 'required' && <p style={{ color: 'red' }}>{errors.idade.message || 'idade é obrigatório'}</p>}


                <label htmlFor="profissao">Profissão</label>
                <select
                    name=""
                    id=""
                    {...register('profissao', { required: true })}
                >
                    <option value="0">Selecione sua Profissão</option>
                    <option value="develop">Desenvolvedor</option>
                    <option value="outher">Outra</option>
                </select>


                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    {...register('password', { required: true })}
                />



                {/* <input
                    type="password"
                    name="passwordSecun"
                    id="passwordSecun"
                    placeholder="Confirme sua senha"
                /> */}

                <button type="submit">confirm</button>
            </form>
        </>
    )
}

export default Form