export default {
	   nameRules: [
        v => !!v || 'Nombre es requerido',
      ],
      nicknameRules: [
        v => !!v || 'nickname es requerido',
      ],
      passwordRules: [
        v => !!v || 'password es requerido',
        v => v.length <= 10 || 'password debe ser menor a 10 caracteres',
        v => v.length >= 5 || 'password debe ser mayor a 6 caracteres'
      ],
      emailRules: [
        v => !!v || 'Email es requerido',
        v => /.+@.+/.test(v) || 'ingrese un Email valido'
      ],
}