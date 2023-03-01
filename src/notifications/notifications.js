import toast from 'react-hot-toast'

export const notifyAccountExists = () => toast.error('A user already exists with this email address');

export const notifyEmailSent = () => toast.error('Email has been sent');