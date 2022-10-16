import { body } from 'express-validator'; 

export const registerValidation = [
    body('email', 'Non-correct form of email').isEmail(),
    body('password', 'Password should be at least 5 symbols').isLength({ min: 5 }),
    body('fullName', 'Write name').isLength({ min: 3 }),
    body('avatarUrl', 'Non-correct URL of avatar').optional().isURL(),
];