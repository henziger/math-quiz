import clientESLintConfig, { env as _env } from './config/eslint';

export default Object.assign({}, clientESLintConfig, {
  env: Object.assign({}, _env, {
    node: true,
  })
});
