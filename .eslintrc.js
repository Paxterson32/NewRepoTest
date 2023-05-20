module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  rules: {
    // Règles générales
    'no-console': 'warn', // Interdire les appels à console.log() et console.error()
    'no-unused-vars': 'warn', // Avertir lorsque des variables sont déclarées mais non utilisées
    'no-undef': 'error', // Signaler les variables non définies
    'semi': ['error', 'always'], // Obliger l'utilisation de points-virgules
    'quotes': ['error', 'single'], // Utiliser les guillemets simples pour les chaînes de caractères
    'indent': ['error', 2], // Utiliser une indentation de 2 espaces
    'comma-dangle': ['error', 'always-multiline'], // Toujours utiliser une virgule de trailing (dernière virgule) dans les objets et tableaux multi-lignes

    // Règles spécifiques à la syntaxe EJS (si vous utilisez EJS)
    'ejs/no-invalid-await': 'error', // Signaler les utilisations invalides de l'expression "await" dans les templates EJS
    'ejs/no-multiple-outputs': 'error', // Interdire plusieurs instructions d'émission dans un template EJS
    // ... (ajoutez d'autres règles spécifiques à EJS selon vos besoins)

    // Règles supplémentaires spécifiques à votre projet ou préférences personnelles
    // ...
  },
};
