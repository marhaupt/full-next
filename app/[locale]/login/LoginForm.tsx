import { login } from "./actions";

export default function LoginForm() {
  return (
    <form className="space-y-6">
    <div>
      <label 
        htmlFor="email" 
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    <button
      formAction={login}
      className="w-24 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    >
      Login
    </button>
  </form>
  )
}