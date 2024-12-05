import LoginForm from './LoginForm';

export default function SignUp() {
    return ( 
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <LoginForm />
            </div>
        </div>
    )
}
