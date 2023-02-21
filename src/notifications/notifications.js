import toast from 'react-hot-toast'

export const notifyAccountExists = () => toast.error('A user already exists with this email address');