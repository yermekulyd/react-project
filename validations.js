import { body } from 'express-validator'; 

export const loginValidation = [
    body('email', 'Non-correct form of email').isEmail(),
    body('password', 'Password should be at least 5 symbols').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Non-correct form of email').isEmail(),
    body('password', 'Password should be at least 5 symbols').isLength({ min: 5 }),
    body('fullName', 'Write name').isLength({ min: 3 }),
    body('avatarUrl', 'Non-correct URL of avatar').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
    body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
    body('tags', 'Неверный формат тэгов').optional().isString(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
  ]; 