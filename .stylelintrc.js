module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-config-standard',
  ],
  rules: {
    'selector-id-pattern': null, // idでkebab-case以外も許容
    'selector-class-pattern': null, // classでkebab-case以外も許容
    'keyframes-name-pattern': null, // keyframesでkebab-case以外も許容
    'color-function-notation': 'legacy',
    'function-no-unknown': [
      true, //map.getやcolor.scaleがエラーにならないように
      {
        ignoreFunctions: ['/^map\\..+/', '/^color\\..+/'],
      },
    ],
    'at-rule-empty-line-before': [
      //余白、改行の設定
      'always',
      {
        except: ['blockless-after-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-no-unknown': null, // 不明な@規則を禁止を無効
    'no-invalid-position-at-import-rule': null, //@importルールの無効
    'scss/at-rule-no-unknown': true, // Scssのデフォルト関数以外は引っかかるようにする
  },
  ignoreFiles: ['**/node_modules/**'],
};
