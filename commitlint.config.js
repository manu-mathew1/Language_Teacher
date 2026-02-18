module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation only
        'style',    // Code style (formatting, no logic change)
        'refactor', // Code refactoring
        'perf',     // Performance improvement
        'test',     // Adding/updating tests
        'chore',    // Build process, dependencies, tooling
        'revert',   // Revert a previous commit
        'ci',       // CI/CD changes
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
