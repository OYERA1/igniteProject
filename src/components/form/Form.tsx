import Countdown from '../countdown'
import FormButton from './Button'
import FormHeader from './Header'

export default function Form() {
    return (
        <div className='flex w-full justify-center'>
            <form className="flex flex-col w-max h-full my-20">
                <FormHeader />
                <Countdown />
                <FormButton />
            </form>
        </div>
    )
}
