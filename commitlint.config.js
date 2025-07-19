module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',    // Nuevas características
        'fix',     // Corrección de errores
        'docs',    // Documentación
        'style',   // Cambios de estilo y formateo
        'refactor',// Refactorización del código
        'perf',    // Mejoras de rendimiento
        'test',    // Añadir o modificar tests
        'chore',   // Tareas de mantenimiento
        'build',   // Cambios en el sistema de build
        'ci',      // Cambios en la integración continua
        'revert'   // Revertir cambios
      ]
    ],
    'type-case': [2, 'always', 'lower'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 50]
  }
};